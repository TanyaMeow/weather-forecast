import {useState} from "react";

import WeatherForecastTable from "./WeatherForecastTable";
import SearchCityWeather from "./SearchCityWeather";

const HomeScreen = () => {
    const [displayLocation, setDisplayLocation] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [weather, setWeather] = useState({});

    return (
        <div className='home_container'>
            <SearchCityWeather
                setDisplayLocation={setDisplayLocation}
                setIsLoading={setIsLoading}
                setWeather={setWeather}
            />

            {isLoading &&
                <p className='loader'>Loading...</p>
            }

            {weather?.weather_code &&
                <div className='weather_forecast-block'>
                    <WeatherForecastTable
                        {...weather}
                        location={displayLocation}
                    />
                </div>}
        </div>
    )
};

export default HomeScreen;