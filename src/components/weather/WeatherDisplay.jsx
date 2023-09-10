import React from 'react'


const WeatherDisplay = ({ weatherData }) => {
  return (
    <>
      <div>
        {weatherData && weatherData.main && weatherData.weather && (
          <>
            <div className='weatherDetails_div'>
              <h2>
                {weatherData.name}, {weatherData.sys && weatherData.sys.country}
              </h2>
              <h4 className="temp">{Math.round(weatherData.main.temp)}°F</h4>
              <p className="tempdesc">{weatherData.weather[0].description}</p>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default WeatherDisplay