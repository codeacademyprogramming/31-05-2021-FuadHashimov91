const WeatherList = (
    {
        weatherData,
        weather,
        convertFahrenheit,
        convertCelcius,
        convertKelvin,
        handleDelete
    }) => {
    return (
        <div className="container">
            <div className="App row">
                <div className='col-12 card mt-5'>
                    <div>
                        {
                            weatherData !== null ? (
                                <div className='row'>
                                    <ul className='col-6'>
                                        <h2 >{weatherData.weather[0].main} | {weatherData.name} | {weatherData.sys.country}</h2>
                                        <h2>{weather}</h2>
                                        <h4 id='humidity'>humidity: {(weatherData.main.humidity)}%</h4>
                                    </ul>
                                    <div className='col-6'>
                                        <ul>
                                            <li className='p-3'><input onClick={convertKelvin} type='radio' value='' />Kelvin</li>
                                            <li><input onClick={convertCelcius} type='radio' />Celsius</li>
                                            <li className='p-3'><input onClick={convertFahrenheit} type='radio' />Fahrenheit</li>
                                        </ul>
                                    </div>
                                    <button onClick={handleDelete} className='btn btn-success'>Delete</button>
                                </div>
                            ) : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherList;