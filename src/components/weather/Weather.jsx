import "./weather.css";
import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const url = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&appid={API key}`;

const api = axios.create({
    baseURL: url
});

const options = [
    { id: 1, label: 'Dallas,TX', lat: '32.779167', lon: '-96.808891' },
    { id: 2, label: 'Los Angeles, CA', lat: '34.052235', lon: '118.243683' },
    { id: 3, label: 'Vancouver, WA', lat: '45.6387281', lon: '122.66148609999999' },
    { id: 4, label: 'Washington, DC', lat: '-77.0364', lon: '38.8951' },
    { id: 5, label: 'Albuquerque, NM', lat: '35.106766', lon: '-106.629181' },
    { id: 6, label: 'Dixon, MT', lat: '47.3165963', lon: '-114.3140075' }
];



const Weather = () => {
    
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (event) => {
        setSelectedOption(Number(event.target.value));
    };
    
    const handleSubmit = (event) => {

        event.preventDefault();

        if (selectedOption !== null) {
            // Make API call with selected option
            console.log('API call with selected option:', selectedOption);
        } 
    };
    
    return (
      
        <>
            
        
            <h3>Check the Weather</h3>



            <form onSubmit={handleSubmit}>
                <label htmlFor="locations"></label>
                <input type="radio" name="locations" id="locations" />
                <button class="primary-button" type="submit">Select</button>
            </form>
        

        </>

  )
}

export default Weather