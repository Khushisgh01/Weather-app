import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
// Imported new icons for better variety
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny'; 
import CloudIcon from '@mui/icons-material/Cloud';
import BeachAccessIcon from '@mui/icons-material/BeachAccess'; // For Haze/Mist/Dust

export default function InfoBox({ info }) {
    // Consolidated Image URLs with clear names
    const HOT_URL = "https://images.unsplash.com/photo-1447601932606-2b63e2e64331?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VubnklMjB3ZWF0aGVyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600";
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600";
    const RAIN_URL = "https://images.unsplash.com/photo-1558409057-bbe679023136?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600";
    const HAZE_URL = "https://images.unsplash.com/photo-1572687413625-cb2c4d9c4d32?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000"

    // Logic to determine the class, icon, and image based on weather data
    let weatherClass;
    let iconComponent;
    let imageUrl;

    const weatherCondition = info.weather.toLowerCase();
    
    // Check for extreme conditions first
    if (weatherCondition.includes("rain") || weatherCondition.includes("thunderstorm") || info.humidity > 80) {
        weatherClass = "rain";
        iconComponent = <ThunderstormIcon />;
        imageUrl = RAIN_URL;
    } 
    // Check for cold
    else if (info.temp <= 10) { 
        weatherClass = "cold";
        iconComponent = <AcUnitIcon />;
        imageUrl = COLD_URL;
    } 
    // Check for hot/sunny
    else if (info.temp >= 25 || weatherCondition.includes("clear")) { 
        weatherClass = "hot";
        iconComponent = <WbSunnyIcon />;
        imageUrl = HOT_URL;
    } 
    // Check for atmospheric conditions (haze, mist, dust, etc.)
    else if (weatherCondition.includes("haze") || weatherCondition.includes("dust") || weatherCondition.includes("mist") || weatherCondition.includes("fog")) {
        weatherClass = "haze";
        iconComponent = <BeachAccessIcon />;
        imageUrl = HAZE_URL;
    }
    // Default/Moderate (e.g., cloudy)
    else {
        weatherClass = "moderate";
        iconComponent = <CloudIcon />;
        imageUrl = HOT_URL; 
    }

    return (
        <div className={`InfoBox ${weatherClass}`}>
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 160 }} /* Increased height for better visual */
                        image={imageUrl}
                        title={info.weather}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                            {info.city}{iconComponent}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p>
                                Temperature : <b>{info.temp}&deg;C</b>
                            </p>

                            <p>
                                Minimum Temperature : {info.tempMin}&deg;C
                            </p>

                            <p>
                                Maximum Temperature : {info.tempMax}&deg;C
                            </p>

                            <p>
                                Humidity : {info.humidity}%
                            </p>

                            <p>
                                Weather : <i>{info.weather}</i>
                            </p>

                            <p>
                                Feels Like : <b>{info.feelsLike}&deg;C</b>
                            </p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
};