import React from 'react'
import CityWeather from './CityWeather'
import '../styles/WeatherDashboard.css'

export default function WeatherDashboard({onBack}) {
  return (
    <div className='weather-dashboard'>
       <button onClick={onBack} className='back-button'>Back</button>
       <div className='cities'>
        <CityWeather city="New York" temperature="15C" condition="Sunny" />
        <CityWeather city="London" temperature="10C" condition="Rainy" />
        <CityWeather city="Tokyo" temperature="20C" condition="Cloudy" />
        <CityWeather city="Sydney" temperature="25C" condition="Sunny" />
        <CityWeather city="Moscow" temperature="-5C" condition="Snowy" />
        </div>
    </div>
  )
}
