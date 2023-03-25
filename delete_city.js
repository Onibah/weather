import { cityContainer, cityesList } from "./variables.js";
import { render } from "./render.js";

export { deleteCity }
// Функция удаления города из списка по клику 
function deleteCity(e) {
	if (e.target.classList.contains('button-delete')) {
		const targetCity = cityesList.findIndex(name => name.id === e.target.parentElement.id);
		cityesList.splice(targetCity, 1)
		localStorage.setItem('cityesList', JSON.stringify(cityesList))
		render()
	}
}
cityContainer.addEventListener("click", deleteCity);