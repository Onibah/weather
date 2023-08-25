import { combineReducers } from "redux";
import { extendedWeatherApi } from "../weather_api/urls";
import { searchSlice } from "../slices/search-slice";

const combineReducer = combineReducers({
  searchSlice: searchSlice.reducer,
  [extendedWeatherApi.reducerPath]: extendedWeatherApi.reducer,
});

export { combineReducer };
