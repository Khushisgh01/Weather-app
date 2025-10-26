import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox(){
    let [city,setCity]=useState("");

    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="e75ab2703f6a42c15727f06578b4b828";
    //this getWeatherInfo should be a async function as we are doing an API call here 
    // API calls are generally asynchronousfunctions
    let getWeatherInfo=async()=>{
        let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse=await response.json();
        let result={
            city:city,
            temp: jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description
        };
        console.log(result);
    };
    

let handleChange=(event)=>{
    setCity(event.target.value);
}
let handleSubmit=(event)=>{
    event.preventDefault();
    console.log(city);
    setCity("");
    getWeatherInfo();
}
    return (
        <div className='SearchBox'>
            <h3> Search for the Weather </h3>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
                <br></br><br></br>
                <Button variant="contained" type='submit'>
                    SEARCH
                </Button>
            </form>
        </div>
    )
};