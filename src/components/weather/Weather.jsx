import "./weather.css";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";


const url = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&appid={API key}`;

const api = axios.create({
    baseURL: url
});

function handleClick() {
    api.get('data/3.0/onecall')
        .then(response => {
            
        })
}


const Weather = () => {
    
    const [data, setData] = useState(["Dallas,TX", "Los Angeles, CA", "Vancouver, WA", "Washington, DC", "Albuquerque, NM"]);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => setData(data));
    }, []); 

    return (
      
        <>
            <h3>Check the Weather</h3>

            {data.map(item => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.completed ? 'Completed' : 'Not Completed'}</p>
                </div>
            ))}


            <form action="Submit">
                <label htmlFor="locations"></label>
                <input type="radio" name="locations" id="locations" />
                <button class="primary-button" onclick="handleClick">Select</button>
            </form>
        

        </>

  )
}

export default Weather