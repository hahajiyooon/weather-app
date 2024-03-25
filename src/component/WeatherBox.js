import React from 'react'

const WeatherBox = ({weather}) => {

  console.log("WeatherBox에 왔는가")
  return (
    <div className="weather-box opacity-8">
        <div className='margin-bottom-5'>{weather?.name}</div>
        <h2>{Math.ceil(weather?.main.temp)}°C / {Math.ceil(weather?.main.temp*1.8+32)} °F</h2>
        <h4>{weather?.weather[0].description}</h4>
    </div>
  )
}

export default WeatherBox