import React, { useState, useEffect } from 'react';
import { getWeatherData } from '../data/weatherApi';



const Weather = () => {

    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState("");
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
        <div className="container">
            <div className="App row">
                <div className='col-12'>
                    <div className="input-group d-flex justify-content-center mt-4" >
                        <div className="form-outline ">
                            <input
                                onChange={(e) => setCity(e.target.value)}
                                type="search" id="form1" className="form-control" placeholder="Search" />
                        </div>
                        <button
                            onClick={() => getData()}
                            type="button" className=" btn btn-primary">Serach</button>
                    </div>
                </div>
                <div className='col-12'>{
                    weatherData !== null ? (
                        <div className='row'>
                            <ul className='col-6'>
                                <h2>{weatherData.weather[0].main} | {weatherData.name} | {weatherData.sys.country}</h2>
                                {/* <h2>{(weatherData.main.temp - 273.15).toFixed(2)}&deg;C</h2> */}
                                <h2>{weather}</h2>
                                <h4>humidity: {(weatherData.main.humidity)}%</h4>
                            </ul>
                            <div className='col-6'>
                                <ul>
                                    <li className='p-3'><input onClick={convertKelvin} type='radio' value='' />Kelvin</li>
                                    <li><input onClick={convertCelcius} type='radio' />Celsius</li>
                                    <li className='p-3'><input onClick={convertFahrenheit} type='radio' />Fahrenheit</li>
                                </ul>
                            </div>
                        </div>
                    ) : null
                }</div>
            </div>
        </div>
    )
}

export default Weather;