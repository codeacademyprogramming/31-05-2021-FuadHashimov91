import React, { useState, useEffect } from 'react';
import { getWeatherData } from '../data/weatherApi';
import SearchWeather from './SearchWeather';
import WeatherList from './WeatherLIst';

const Weather = () => {

    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState("Baku");
    const [weather, setWeather] = useState();

    const getData = async () => {
        try {
            const data = await getWeatherData(city);
            setWeatherData(data);
        }
        catch (error) {
            console.log(error.message);
        }
    }

    const convertKelvin = () => {
        setWeather(weatherData.main.temp)
    }

    const convertCelcius = () => {
        setWeather((weatherData.main.temp - 273.15).toFixed(2))
    }

    const convertFahrenheit = () => {
        setWeather(((weatherData.main.temp - 273.15) * 9 / 5 + 32).toFixed(4))
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <SearchWeather setCity={setCity} getData={getData} />
            <WeatherList
                weatherData={weatherData}
                weather={weather}
                convertFahrenheit={convertFahrenheit}
                convertCelcius={convertCelcius}
                convertKelvin={convertKelvin}
            />

        </>
    )
}

export default Weather;