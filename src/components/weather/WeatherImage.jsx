import React from 'react';
import "./weather.css";
import stormy from '../../assets/images/stormy.svg';
import rainy from '../../assets/images/rainy.svg';
import sleet from '../../assets/images/sleet.svg';
import snow from '../../assets/images/snow.svg';
import sunny from '../../assets/images/sunny.svg';
import tornado from '../../assets/images/tornado.svg';
import partCloudy from '../../assets/images/partly-cloudy.svg';
import cloudy from '../../assets/images/cloudy.svg';



function displayImage({weatherData}) {
    return (weatherData.weather[0].id >= 200) && (weatherData.weather[0].id < 300) ? stormy
        : (weatherData.weather[0].id >= 300) && (weatherData.weather[0].id < 600) ? rainy
            : (weatherData.weather[0].id >= 600) && (weatherData.weather[0].id < 611) ? snow
            : (weatherData.weather[0].id >= 611) && (weatherData.weather[0].id < 800) ? sleet
                    : weatherData.weather[0].id === 800 ? sunny
                        : weatherData.weather[0].id === 781 ? tornado
                            : (weatherData.weather[0].id === 801) || (weatherData.weather[0].id === 802) || (weatherData.weather[0].id === 803) ? partCloudy
                                : cloudy;
}

const WeatherImage = ({weatherData}) => {
    return (
        <>
            <div id={'img_' + weatherData.weather[0].main}>
                <img src={displayImage({weatherData})} alt='img.svg' />
            </div>
        </>
    )
}

export default WeatherImage