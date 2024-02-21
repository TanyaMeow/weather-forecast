import axios from "axios";
import { useState } from "react";

const SearchCityWeather = ({ setDisplayLocation, setIsLoading, setWeather }) => {
    const [location, setLocation] = useState('Lisbon');

    async function weatherSelection() {
        try {
            setIsLoading(true);

            const geoData = await axios(
                `https://geocoding-api.open-meteo.com/v1/search?name=${location}`
            )
                .then((response) => response.data.results);

            const { latitude, longitude, timezone, name } = geoData[0];
            setDisplayLocation(name);

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
        <>
            <h1 className='home_title'>Weather forecast</h1>
            <input
                className='form_find-city'
                type="text"
                placeholder='Find city...'
                value={location}
                onChange={e => setLocation(e.target.value)}
            />
            <button onClick={weatherSelection}>Get weather</button>
        </>
    )
};

export default SearchCityWeather;