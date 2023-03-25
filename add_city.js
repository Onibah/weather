import { favoriteButton, cityFavoriteNow, cityesList } from "./variables.js"
import { render } from "./render.js"

export { addCity }
// функция добавления городов в массив
function addCity() {
	if (cityFavoriteNow.textContent) {
		if (!(cityesList.find(city => city.name === cityFavoriteNow.textContent))) {
			cityesList.push({ name: cityFavoriteNow.textContent, id: cityFavoriteNow.id })
		} else {
			alert('такой город уже есть')
		}
	}
	localStorage.setItem('cityesList', JSON.stringify(cityesList))
	render()
}
favoriteButton.addEventListener("click", addCity);