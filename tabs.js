// Реализация табов
export { showScreen }
const buttonsContainer = document.querySelector('.buttons');

function showScreen(e) {
	const screens = document.querySelectorAll('.left-content__top');
	const buttons = document.querySelectorAll('.buttons__button');
	screens.forEach(screen => {
		screen.hidden = true
		changeHidden(e.target.id, screen.id, screen)
	});
	buttons.forEach(button => {
		button.classList.remove('_active-tab')
	});
	e.target.classList.add('_active-tab')
}
buttonsContainer.addEventListener("click", showScreen);
function changeHidden(targetId, screenId, screen) {
	if (targetId === screenId) {
		screen.hidden = false
	}
}