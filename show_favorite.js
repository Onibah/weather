import { cityContainer } from "./variables.js";
import { getInfo } from "./main.js";

export { showFavoriteInfo }
// Функция показа инфы по клику на город
function showFavoriteInfo() {
	cityContainer.addEventListener("click", function (e) {
		if (e.target.classList.contains('list-right-content__text')) {
			getInfo(e.target.textContent)
			localStorage.setItem('favoriteCity', JSON.stringify(e.target.textContent))
		}
	});
}
showFavoriteInfo()