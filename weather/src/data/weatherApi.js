import axios from 'axios';

const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?';
const apiKey = '16596fe956171a7376f2ba91213e3499';

const getWeatherData = async (cityname) => {
    try {
        const {data} = await axios.get(baseUrl + `q=${cityname}&appid=${apiKey}`);
        return data;
    } 
    catch (error) {
        throw error;
    }
}
export default getWeatherData;