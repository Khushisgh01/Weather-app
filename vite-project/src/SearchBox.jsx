import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let [error,setError]=useState(false); // Initialize error state

    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="e75ab2703f6a42c15727f06578b4b828";
    
    // this getWeatherInfo should be an async function as we are doing an API call here 
    // API calls are generally asynchronous functions
    let getWeatherInfo=async()=>{
        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            
            if (response.status !== 200) {
                throw new Error("City not found");
            }
            
            let jsonResponse=await response.json();
            let result={
                city:city,
                temp: jsonResponse.main.temp,
                tempMin:jsonResponse.main.temp_min,
                tempMax:jsonResponse.main.temp_max, // CORRECTED: Now uses temp_max instead of humidity
                feelsLike:jsonResponse.main.feels_like,
                weather:jsonResponse.weather[0].description,
                humidity:jsonResponse.main.humidity,
            };
            console.log(result);
            return result;
        }catch(err){
            throw err;
        }
    };
    

let handleChange=(event)=>{
    setCity(event.target.value);
}
let handleSubmit=async(event)=>{
    event.preventDefault();
    setError(false); // Reset error state on new submission
    try{
        console.log(city);
        let newInfo=await getWeatherInfo();
        updateInfo(newInfo);
        setCity(""); // Clear the input field only on successful fetch
    }catch(err){
        setError(true);
        setCity(""); // Clear the input field even on error
    }
    
}
    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="city" 
                    label="City Name" 
                    variant="outlined" 
                    required 
                    value={city} 
                    onChange={handleChange}
                    sx={{ width: '100%' }} // Make TextField responsive in its container
                />
                <Button 
                    variant="contained" 
                    type='submit' 
                    sx={{ width: '100%' }} // Make Button responsive in its container
                >
                    SEARCH
                </Button>
                {error && <p style={{color:"red"}}>No such place exists!</p>}
            </form>
        </div>
    )
};