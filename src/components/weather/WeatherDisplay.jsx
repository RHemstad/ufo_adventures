import React from 'react'

const WeatherDisplay = ({ weatherData }) => {
  return (
    <div>
      {weatherData && weatherData.main && weatherData.weather && (
        <div>
          <h2>
            {weatherData.name}, {weatherData.sys && weatherData.sys.country}
          </h2>
          <p>Temperature: {Math.round(weatherData.main.temp)}°F</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  )
}

export default WeatherDisplay