import { stampToDate, stampToTime } from "./formated.js";
import { showScreen } from "./tabs.js";
import { render } from "./render.js";
import { SERVER_URL, SERVER_URL_FORECAST, API_KEY, MAIN_INPUT, SEARCH_BUTTON,    favoriteCity,  } from "./variables.js";
import { changeClassIcon } from "./icon.js";
import { showFavoriteInfo } from "./show_favorite.js";
import { addCity } from "./add_city.js";
import { deleteCity } from "./delete_city.js";
import { allErrors } from "./errors.js";


export { getInfo, getInfoForecast }


// главная функция показывающая информацию о погоде
async function getInfo(cityName) {
	const iconWeather = document.querySelector('.now-content__img');
	const temp = document.querySelector('.now-content__top');
	const cityesTabs = document.querySelectorAll('[data-city]');
	const listElementsDetails = document.querySelectorAll('.details__item');
	const URL = `${SERVER_URL}?q=${cityName}&appid=${API_KEY}&units=metric`;

	try {
		const response = await fetch(URL)
		const data = await response.json();
		if (!(response.status >= 200 && response.status < 299)) {
			throw (`Ошибка: ${allErrors[data.message]}`);
		}
		cityesTabs.forEach(city => {
			city.textContent = data.name
			city.id = data.id
		});
		temp.textContent = `${Math.round(data.main.temp)}°`
		iconWeather.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`

		listElementsDetails.forEach(element => {
			switch (element.id) {
				case '1':
					element.textContent = `Temperature: ${Math.round(data.main.temp)}°`
					break;
				case '2':
					element.textContent = `Feels like: ${Math.round(data.main.feels_like)}°`
					break;
				case '3':
					element.textContent = `Weather: ${data.weather[0].main}`
					break;
				case '4':
					element.textContent = `Sunrise: ${stampToTime(data.sys.sunrise)}`
					break;
				case '5':
					element.textContent = `Sunset: ${stampToTime(data.sys.sunset)}`
					break;
			}
		});
		getInfoForecast(cityName)
	} catch (error) {
		alert(error)
	} finally {
		MAIN_INPUT.value = ''
	}
	changeClassIcon()
}
// первый вызов функции
SEARCH_BUTTON.addEventListener("click", function (e) {
	e.preventDefault()
	getInfo(MAIN_INPUT.value)
});


// главная функция показа инфы для форкаст
async function getInfoForecast(cityName) {
	const URL_FORECAST = `${SERVER_URL_FORECAST}?q=${cityName}&appid=${API_KEY}&units=metric`

	const responseForecast = await fetch(URL_FORECAST);
	const dataForecast = await responseForecast.json();

	const listContainerForecast = document.querySelector('.forecast__list');
	listContainerForecast.textContent = ''

	for (let i = 0; i < 9; i++) {

		const forecastItem = document.createElement('li');
		forecastItem.classList.add('forecast__item', 'item-forecast')
		listContainerForecast.appendChild(forecastItem)

		const forecastItemTop = document.createElement('div');
		forecastItemTop.classList.add('item-forecast__top')
		forecastItem.appendChild(forecastItemTop)

		const forecastDate = document.createElement('div');
		forecastDate.textContent = stampToDate(dataForecast.list[i].dt)
		forecastItemTop.appendChild(forecastDate)

		const forecastTime = document.createElement('div');
		forecastTime.textContent = stampToTime(dataForecast.list[i].dt)
		forecastItemTop.appendChild(forecastTime)

		const forecastItemInfo = document.createElement('div');
		forecastItemInfo.classList.add('item-forecast__info')
		forecastItem.appendChild(forecastItemInfo)

		const containerLeft = document.createElement('div');
		containerLeft.classList.add('item-forecast__left')
		forecastItemInfo.appendChild(containerLeft)

		const forecastTemp = document.createElement('div');
		forecastTemp.textContent = `Temperature: ${Math.round(dataForecast.list[i].main.temp)}°`;
		containerLeft.appendChild(forecastTemp)

		const forecastFeels = document.createElement('div');
		forecastFeels.textContent = `Feels like: ${Math.round(dataForecast.list[i].main.feels_like)}°`;
		containerLeft.appendChild(forecastFeels)

		const containerRight = document.createElement('div');
		containerRight.classList.add('item-forecast__right')
		forecastItemInfo.appendChild(containerRight)

		const containerWeather = document.createElement('div');
		containerWeather.textContent = dataForecast.list[i].weather[0].main;
		containerRight.appendChild(containerWeather)

		const forecastImg = document.createElement('img');
		forecastImg.setAttribute("src", "https://openweathermap.org/img/wn/" + dataForecast.list[i].weather[0].icon + "@4x.png");
		forecastImg.classList.add('item-forecast__icon');
		containerRight.appendChild(forecastImg)
	}
}
// вызов рендеров локалстораджа и правого списка
if (favoriteCity) {
	getInfo(favoriteCity)
}
render()


