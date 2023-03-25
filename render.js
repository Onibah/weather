import { cityesList, cityContainer } from "./variables.js";
import { changeClassIcon } from "./icon.js";

export {render}
// функция рендера
function render() {
	clearList()
	cityesList.forEach(city => {
		createEl(city.name, city.id)
	});
	changeClassIcon()
}


// Функция создания элементов на странице
function createEl(name, id) {
	const newCity = document.createElement('li');
	newCity.classList.add('list-right-content__item')
	cityContainer.appendChild(newCity)
	newCity.id = id

	const cityText = document.createElement('p');
	cityText.classList.add('list-right-content__text')
	cityText.textContent = name

	newCity.appendChild(cityText)

	const deleteButton = document.createElement('button');
	deleteButton.classList.add('button-delete')
	deleteButton.textContent = '+'
	newCity.appendChild(deleteButton)
}
// Функция очищения списка при рендере
function clearList() {
	const newCityes = document.querySelectorAll('.list-right-content__item')
	if (newCityes) {
		newCityes.forEach(newCitye => {
			newCitye.remove()
		});
	}
}