import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import "./App.css"; // Import App.css for the container style

export default function WeatherApp(){
    let [weatherInfo, setWeatherInfo]=useState({
        city: "Delhi",
        feelsLike: 24.4,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div className="WeatherAppContainer">
            <h2 style={{ marginBottom: "30px", color: "#333", fontSize: "2rem" }}>
                <span role="img" aria-label="sun and cloud">🌤️</span> Minimal Weather App
            </h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}