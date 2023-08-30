import "./weather.css";
import React, { useState } from 'react';
import WeatherDisplay from './WeatherDisplay';
import Subheader from '../subheader/Subheader';
import WeatherImage from "./WeatherImage";

const locationOptions = [
    { id: 1, label: 'Dallas, TX', value: 'lat=32.779167&lon=-96.808891' },
    { id: 2, label: 'Los Angeles, CA', value: 'lat=34.052235&lon=-118.243683' },
    { id: 3, label: 'Vancouver, WA', value: 'lat=45.6387281&lon=-122.66148609999999' },
    { id: 4, label: 'Washington, DC', value: 'lat=38.8951100&lon=-77.0363700' },
    { id: 5, label: 'Albuquerque, NM', value: 'lat=35.106766&lon=-106.629181' },
    { id: 6, label: 'The Uintah Basin, UT (aka Skinwalker Ranch)', value: 'lat=40.258901595300905&lon=-109.8929713505666' }
];

//works calling this directly but not through .env, not sure why. I copied everything from what I did with William, but the only thing that's different is calling the keys directly vs .env
const REACT_APP_API_KEY = '8c3d5b5fd86452ccea0e33353f2211a4';
const REACT_APP_API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const Weather = () => {

    const [selectedLocation, setSelectedLocation] = useState(null);
    const [weatherData, setWeatherData] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const fetchWeatherData = async () => {
        try {
            console.error(`Made it to API - selectedLocation:${selectedLocation}`);
            const response = await fetch(`${REACT_APP_API_BASE_URL}?${selectedLocation}&appid=${REACT_APP_API_KEY}&units=imperial`);
            // const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}?${selectedLocation}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`);
            console.log(response);
            const data = await response.json();
            console.log(data);
            setWeatherData(data);
            setSubmitted(true);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            setWeatherData(null);
            setSubmitted(false);
        }
    };
    
    const handleLocationChange = (location, e) => {
        setSelectedLocation(e.target.value);
        console.log(e.target);
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
        <Subheader>Planning Your Abduction</Subheader>         
            <section className="weather" id="weather">
                <h3>Check the Weather</h3>
                {submitted ? (
                    <div className="display_main">
                        <div className="display_img">
                            <WeatherImage weatherData={weatherData} />
                        </div>
                        <div className="display_info">
                            <WeatherDisplay weatherData={weatherData} />
                        </div>
                        
                        <button onClick={handleChangeLocation} className="primary-button">Change Location</button>
                    </div>
                ) : (
                        <div className="main">
                            <div className="input-group">
                                <label className="locationLabel">Select your abduction site:</label> 
                                {locationOptions.map((location) => (
                                    <div className="cardStyle">
                                    <label key={location.id} id="option">
                                        <input
                                            type="radio"
                                            name="location"
                                            value={location.value}
                                            checked={selectedLocation === location.value}
                                            onChange={(e) => handleLocationChange(location.value, e)}
                                        />
                                        {location.label}
                                        </label>
                                    </div>
                                ))}
                            </div>

                            <button onClick={handleSearch} disabled={!selectedLocation} className="primary-button">
                                Search
                            </button>

                        </div>
                )}
            </section>
        </>
    )
}

export default Weather