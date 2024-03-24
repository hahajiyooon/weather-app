import React from 'react'
//import { Button } from 'react-bootstrap';

const WeatherButton = ({cities,setCity}) => {
  console.log("cities>?", cities)
  return (
    <div>
        {cities.map((item) =>(
          <button 
                  className={"weather-button"} 
                  onClick={() => setCity(item)}>{item}</button>
        ))}

    </div>
  )
}

export default WeatherButton