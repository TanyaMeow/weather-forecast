import React from "react";
import {
    useCallback,
    useEffect,
    useState
} from "react";

import axios from "axios";

const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = React.useState(value);

    React.useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value]);

    return debouncedValue;
};

const SearchCityWeather = ({ setDisplayLocation, setIsLoading, setWeather }) => {
    const [location, setLocation] = useState(localStorage.getItem('location'));
    const lastLocation = useDebounce(location, 500);

    const weatherSelection = useCallback(async () => {
        try {
            setIsLoading(true);

            const geoData = await axios(
                `https://geocoding-api.open-meteo.com/v1/search?name=${lastLocation}`
            )
                .then((response) => response.data.results[0]);

            const { latitude, longitude, timezone, name } = geoData;
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
    }, [lastLocation]);

    useEffect(() => {
        weatherSelection()
            .then(r => r);
        
        localStorage.setItem('location', location);
    }, [lastLocation, weatherSelection]);

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
        </>
    )
};

export default SearchCityWeather;