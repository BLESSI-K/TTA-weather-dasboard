import React from 'react'
import '../styles/CityWeather.css'

export default function CityWeather({city, temperature, condition}) {

  const getWeatherIcon = (condition) => {
    switch (condition) {
      case 'Sunny':
        return '☀️';
      case 'Rainy':
        return '🌧️';
      case 'Cloudy':
        return '☁️';
      case 'Snowy':
        return '❄️';
      default:
        return '🌤️'; // Default icon for unknown conditions
    }
  }

  return (
    <div className='city-weather'>
        <h2>{city}</h2>
        <h2>Temperature: {temperature}</h2>
        <h2>Condition: {condition}</h2>
        <div className='icon'>{getWeatherIcon(condition)}</div>
    </div>
  )
}
