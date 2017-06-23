import axios from 'axios'

const API_KEY = 'f5184bc8a81debd3157f4ca12ecbca7b';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

class SearchBarController {

    fetchWeather(cityName, countryCode = null){

        let url = `${ROOT_URL}&q=${cityName}`;
        if(countryCode) url = `${url},${countryCode}`;

        return axios.get(url);
    }
}



const searchBarController = new SearchBarController();
export default searchBarController