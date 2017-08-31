import searchBarController from './SearchBarController'
import axios from 'axios'

export const type = {
    FETCH_WEATHER: 'FETCH_WEATHER'
};

export const fetchWeather = (cityName, countryCode = null) => {

    return{
        type: type.FETCH_WEATHER,
        payload: searchBarController.fetchWeather(cityName, countryCode)
        // payload: { weather: searchBarController.fetchWeather(cityName, countryCode) }
    }
};