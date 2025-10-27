import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({ info }) {
    const INIT_URL = "https://images.unsplash.com/photo-1572687413625-cb2c4d9c4d32?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000"
    const HOT_URL = "https://images.unsplash.com/photo-1447601932606-2b63e2e64331?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VubnklMjB3ZWF0aGVyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600";
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600";
    const RAIN_URL = "https://images.unsplash.com/photo-1558409057-bbe679023136?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600";
    return (
        <div className="InfoBox">
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 85 ? RAIN_URL : (info.temp > 15 ? HOT_URL : COLD_URL)}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}{
                                info.humidity > 85 ? <ThunderstormIcon/> : (info.temp > 15 ? <SunnyIcon/> : <AcUnitIcon/>)
                            }
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p>
                                Temperature : {info.temp}&deg;
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

                            <p>
                                The Weather can be described as <i>{info.weather}</i> and it feels like : {info.feelsLike}&deg;
                            </p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
};