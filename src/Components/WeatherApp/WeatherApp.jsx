import React, { useState } from 'react';
import './WeatherApp.css';
import search_icon from  "../Asssets/search.png";
import { WiDayCloudyWindy } from "react-icons/wi"
import clear_icon from "../Asssets/clear-sky.png";
// import cloudy_icon from "../Asssets/cloud-day.png";
import drizzle_icon from "../Asssets/drizzle.png";
import rain_icon from "../Asssets/rain.gif";
// import snow_icon from "../Asssets/snow.gif";

import { WiHumidity } from "react-icons/wi";
import { FaCloudRain } from "react-icons/fa6";
import { FiWind } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";






const WeatherApp = () => {
  const [wicon, setWicon]=useState(clear_icon);
  const search=async()=>
    {
    
      let api_key="0f1612032ba2a8b716059ed084f8a0e5";

   
      const element=document.getElementsByClassName("city-name")
       if(element[0].value==="")
        {
          return 0
        }
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
           
        let response = await fetch(url);
        let data= await response.json();

        const humidity=document.getElementsByClassName("humidity-percentage");
        const wind=document.getElementsByClassName("Wind-speed");
        const location =document.getElementsByClassName("weather-location");
        const temperature=document.getElementsByClassName("weather-temperature");
    

        humidity[0].innerHTML=data.main.humidity+ "%";
        wind[0].innerHTML=data.wind.speed + "km/hr";
        temperature[0].innerHTML=data.main.temp + "°C";
        location[0].innerHTML=data.name;


        if(data.weather[0].icon=== "01d" || data.weather[0].icon=== "01n")
              
          {
            setWicon(clear_icon);
          }

          else if(data.weather[0].icon=== "02d" || data.weather[0].icon=== "02n")
       {
        setWicon(clear_icon);
       }
       else if(data.weather[0].icon=== "03d" || data.weather[0].icon=== "03n")
        {
         setWicon(drizzle_icon);
        }
        else if(data.weather[0].icon=== "04d" || data.weather[0].icon=== "04n")
          {
           setWicon(drizzle_icon);
          }
          else if(data.weather[0].icon=== "09d" || data.weather[0].icon=== "09n")
            {
             setWicon(rain_icon);
            }
            else if(data.weather[0].icon=== "10d" || data.weather[0].icon=== "10n")
              {
               setWicon(rain_icon);
              }
              else if(data.weather[0].icon=== "13d" || data.weather[0].icon=== "13n")
                {
                 setWicon(clear_icon);
                }
                else{
                  setWicon( clear_icon);
                }
       
       
       
          }
  return (
    <div className='container'>
        <div className="top-bar">
            <input type="text" className="city-name" placeholder='Enter City Name'/>
            <div className="search-icon" onClick={()=>{search()}}>
            <CiSearch className='search-icon-image'/>
            </div>

        </div>

        <div className="weather-image">
        <img src={wicon} alt="weather-icon"/>
       
        </div>

        <div className="weather-temperature"> 20 c</div>
        <div className="weather-location">Jhansi</div>
        <div className="data-conatiner">

          {/* here i have added additional infomation of the weather using div */}
          <div className="element">
          <WiHumidity className='icon'/>
            <div className="data">
               <div className="humidity-percentage">67%</div>
               <div className="text">Humidity</div>
            </div>
          </div>

          <div className="element">
            <FiWind className='icon' />
            <div className="data">
               <div className="Wind-speed">15 km/hr</div>
               <div className="text">Wind Speed</div>
            </div>
          </div>
        </div>

    

     
    </div>
  )
}

export default WeatherApp
