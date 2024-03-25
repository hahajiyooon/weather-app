import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities,setCity,city,handleCityChange}) => {
  console.log("cities", cities,'city',city)
  return (
    <div>
      <Button variant={`${city==null? "light" : "outline-light"}`} onClick={() =>  {setCity(""); handleCityChange("current");}} size="sm" className="btn-box opacity-8">
        Current Location
      </Button>

        {cities.map((item) =>(
          <Button variant={`${city==item? "light" : "outline-light"}`} size="sm" className="btn-box opacity-8" 
                  onClick={() => {
                    setCity(item);
                    handleCityChange(item);
                  }}>{item}</Button>
        ))}

    </div>
  )
}

export default WeatherButton