import {useState} from "react";
import axios from "axios";

import WeatherForecastTable from "./WeatherForecastTable";

const HomeScreen = () => {
    const [location, setLocation] = useState('Lisbon');
    const [isLoading, setIsLoading] = useState(false);
    const [weather, setWeather] = useState({});

    async function weatherSelection() {
        try {
            setIsLoading(true);

            const geoData = await axios(
                `https://geocoding-api.open-meteo.com/v1/search?name=${location}`
            )
                .then((response) => response.data.results);

            const { latitude, longitude, timezone, name, countryCode } = geoData[0];

            const weatherData = await axios(
                `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weather_code,temperature_2m_max,temperature_2m_min`
            )
                .then((response) => response.data.daily);

            setWeather(weatherData);
        } catch (err) {
            console.log(err)
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className='home_container'>
            <h1 className='home_title'>Classy Weather</h1>
            <input
                className='form_find-city'
                type="text"
                placeholder='Find city...'
                value={location}
                onChange={e => setLocation(e.target.value)}
            />
            <button onClick={weatherSelection}>Get weather</button>

            {isLoading &&
                <p className='loader'>Loading...</p>
            }

            <div className='weather_forecast-block'>
                <WeatherForecastTable/>
            </div>
        </div>
    )
};

export default HomeScreen;