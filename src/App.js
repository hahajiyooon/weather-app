//npm install 문제있는듯 

import logo from './logo.svg';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
//import ClipLoader from "react-spinners/ClipLoader";/

//1. 앱 실행시, 현재 위치기반의 날씨 보임
//2. 도시, 섭씨, 화씨, 날씨 컨디션
//3. 5개 버튼. 1개는 현재위치, 4개는 다른 나라
//4. 도시 버튼 클릭시, 도시별 날씨 나옴
//5. 현재 버튼 클릭시, 현재위치 기반의 날씨 나옴
//6. 데이터 들고오는 동안 로딩 스피너 돔
function App() {
  const [weather,setWeather] = useState(null)
  const cities = ["Current Loaction","paris","new york", "tokyo","seoul"]
  const [city,setCity] = useState("")
  const [loading,setLoading] = useState(false) //data fetch할떄만 false -> true로 바꿔줌

  const getCurrentLocation = () => {
    //console.log("getCurrentLocation")
    navigator.geolocation.getCurrentPosition((position) => {
      let lat= position.coords.latitude
      let lon= position.coords.longitude
      let apiKey = "beee3bfd2dd4ae5c84b2c04d3267ca7f"
      getWeatherByCurrentLoaction(lat,lon,apiKey)
            
      console.log("lat ",lat,"lon ",lon)
    });

    const getWeatherByCurrentLoaction = async(lat,lon,apiKey) => {
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`//&섭씨
      setLoading(true)
      //url을 가져와서 패치하는 동안 기다려주세요. await는 비동기함수 async 사용해야함  
      let response = await fetch(url)
      let data = await response.json()
      console.log("data ",data)
      setWeather(data)
      setLoading(false)
    }
  }
  
  const getWeatherByCity = async() => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=beee3bfd2dd4ae5c84b2c04d3267ca7f&units=metric`
    setLoading(true)
    let response = await fetch(url)
    let data = await response.json()
    //console.log("data ",data)
    setWeather(data)
    setLoading(false)
  }
  
  //4. 도시버튼 클릭할때 마다 날씨 보여줌
  //useEffect 앱실행시 보이는 화면. 매개변수 2개
  //city를 주시하고 있다 update가 되면, 업데이트 된 city를 불러옴
  useEffect(()=>{
    if(city=="Current Loaction"){
      getCurrentLocation()
    }else{
      getWeatherByCity()
    }
  },[city])

  return (
    <div>
      {loading? (
      <div className="container">
        {/* <ClipLoader color="#f88888" loading={loading} cssOverride={override} size={150} aria-label="Loading Spinner" data-testid="loader"/> */}
      </div>
      ):(
      <div className="container">
        <WeatherBox weather={weather}/>
        <WeatherButton cities={cities} setCity={setCity}/>
      </div>
      )}
    </div>
  );
}

export default App;
