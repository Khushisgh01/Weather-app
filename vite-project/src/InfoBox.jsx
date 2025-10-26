import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Component } from 'react';

export default function InfoBox() {
    const INIT_URL="https://images.unsplash.com/photo-1572687413625-cb2c4d9c4d32?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000"
    let info = {
        city:"Delhi",
        feelsLike: 24.4,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    };
    return (
        <div className="InfoBox">
            <h1>WeatherInfo-{info.weather}</h1>

            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={INIT_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <p>
                            Temperature : {info.temp}&deg;
                        </p>
                        
                        <p>
                            The Weather feels like : {info.feelsLike}&deg;
                        </p>
                        
                        <p>
                            Minimum Temperature : {info.tempMin}&deg;
                        </p>
                        
                        <p>
                            Maximum Temperature : {info.tempMax}&deg;
                        </p>
                        
                        <p>
                            Humidity : {info.humidity}
                        </p>
                        
                        <p>
                            Weather : {info.weather}
                        </p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
};