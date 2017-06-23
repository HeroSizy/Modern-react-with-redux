import searchBarController from './SearchBarController'


export const type = {
    FETCH_WEATHER: 'FETCH_WEATHER'
};


export const fetchWeather = (cityName, countryCode = null) => {

    return{
        type: type.FETCH_WEATHER,
        payload: { weather: searchBarController.fetchWeather(cityName, countryCode) }
    }
};