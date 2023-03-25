export {SERVER_URL, SERVER_URL_FORECAST, API_KEY, MAIN_INPUT, SEARCH_BUTTON, cityContainer, cityesList, favoriteButton, favoriteCity, cityFavoriteNow}
const SERVER_URL = 'http://api.openweathermap.org/data/2.5/weather';
const SERVER_URL_FORECAST = 'http://api.openweathermap.org/data/2.5/forecast';
const API_KEY = '52bb32981712284486ea587d642bf60b';
const MAIN_INPUT = document.querySelector('.weather__input');
const SEARCH_BUTTON = document.querySelector('.weather__button');
const cityContainer = document.querySelector('.list-right-content');

const cityesList = JSON.parse(localStorage.getItem('cityesList')) || [];
const favoriteButton = document.querySelector('.bottom-now-content__favorite');

const favoriteCity = JSON.parse(localStorage.getItem('favoriteCity'));
const cityFavoriteNow = document.querySelector('.bottom-now-content__city');