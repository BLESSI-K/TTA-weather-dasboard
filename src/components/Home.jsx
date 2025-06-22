import React from 'react'

import '../styles/Home.css';

export default function Home({onShowWeather}) {
  return (
    <div className='home'>
        <p>Welcome to the Weather Dashboard</p>
        <button className='home-button' onClick={onShowWeather}>Show Weather</button>
    </div>
  )
}
