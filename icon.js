import { cityesList, cityFavoriteNow, favoriteButton } from "./variables.js"

export { changeClassIcon }
// Функция добавления цвета иконки лайка
function changeClassIcon() {
	cityesList.find(name => name.name === cityFavoriteNow.textContent) ?
		favoriteButton.classList.add('_active-favorite') :
		favoriteButton.classList.remove('_active-favorite')
}
