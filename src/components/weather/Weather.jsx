import "./weather.css";
import React, { useState } from 'react';
import WeatherDisplay from './WeatherDisplay';

const locationOptions = [
    { id: 1, label: 'Dallas, TX', value: 'lat=32.779167&lon=-96.808891' },
    { id: 2, label: 'Los Angeles, CA', value: 'lat=34.052235&lon=-118.243683' },
    { id: 3, label: 'Vancouver, WA', value: 'lat=45.6387281&lon=-122.66148609999999' },
    { id: 4, label: 'Washington, DC', value: 'lat=38.8951100&lon=-77.0363700' },
    { id: 5, label: 'Albuquerque, NM', value: 'lat=35.106766&lon=-106.629181' },
    { id: 6, label: 'The Uintah Basin, UT (aka Skinwalker Ranch)', value: 'lat=40.258901595300905&lon=-109.8929713505666' }
];

const API_KEY = '8c3d5b5fd86452ccea0e33353f2211a4';
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const Weather = () => {

    const [selectedLocation, setSelectedLocation] = useState(null);
    const [weatherData, setWeatherData] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const fetchWeatherData = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}?${selectedLocation}&appid=${API_KEY}&units=imperial`);
            const data = await response.json();
            setWeatherData(data);
            setSubmitted(true);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            setWeatherData(null);
            setSubmitted(false);
        }
    };
    
    const handleLocationChange = (location) => {
        setSelectedLocation(location);
    };

    const handleSearch = () => {
        fetchWeatherData();
    };

    const handleChangeLocation = () => {
        setSubmitted(false);
        setWeatherData(null);
    };
    
    return (
        <>            
            <div>
                <h3>Check the Weather</h3>
                {submitted ? (
                    <div>
                        <WeatherDisplay weatherData={weatherData} />
                        <button onClick={handleChangeLocation} className="primary-button">Change Location</button>
                    </div>
                ) : (
                        <div>
                            <div>
                                <p>Select your abduction site:</p>
                                {locationOptions.map((location) => (
                                    <label key={location.id}>
                                        <input
                                            type="radio"
                                            name="location"
                                            value={location.value}
                                            checked={selectedLocation === location.value}
                                            onChange={() => handleLocationChange(location.value)}
                                        />
                                        {location.label}
                                    </label>
                                ))}
                            </div>

                            <button onClick={handleSearch} disabled={!selectedLocation} className="primary-button">
                                Search
                            </button>

                        </div>
                )}
            </div>
        </>
    )
}

export default Weather