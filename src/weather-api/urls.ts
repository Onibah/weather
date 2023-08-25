import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = '519f051c412d368da48a0499dae27c6f';

const weatherApi = createApi({
	reducerPath: 'weatherApi',
	baseQuery: fetchBaseQuery({
		baseUrl,
	}),
	endpoints: () => ({}),
});
const extendedWeatherApi = weatherApi.injectEndpoints({
	endpoints: (build) => ({
		getCityInfo: build.query({
			query: (cityName) => ({
				url: `?q=${cityName}&appid=${apiKey}`,
				method: 'GET',
				headers: { 'Content-Type': 'text/plain;charset=UTF-8'},
			}),
		}),
	}),
});

 
const { useLazyGetCityInfoQuery } = extendedWeatherApi;

export { extendedWeatherApi, useLazyGetCityInfoQuery };
