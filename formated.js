// Функция перевода в нормальный вид дату
export {stampToDate, stampToTime}
function stampToDate(timeStamp) {
	const unixTimestamp = timeStamp
	const date = new Date(unixTimestamp * 1000);
	const formattedTime = date.toLocaleDateString("default");
	return formattedTime
}
// Функция перевода в нормальный вид время
function stampToTime(timeStamp) {
	const unixTimestamp = timeStamp
	const date = new Date(unixTimestamp * 1000);
	const hours = date.getHours();
	const minutes = "0" + date.getMinutes();
	const formattedTime = `${hours}:${minutes.substr(-2)}`;
	return formattedTime
}