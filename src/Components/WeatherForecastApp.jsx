import {useState} from "react";

import WeatherForecastTable from "./WeatherForecastTable";
import SearchCityWeather from "./SearchCityWeather";

const WeatherForecastApp = () => {
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
            <div className='loader_block'>
                {isLoading &&

                    <p className='loader'>Loading...</p>
                }
            </div>

            {weather.weather_code &&
                <div className='weather_forecast-block'>
                    <WeatherForecastTable
                        {...weather}
                        displayLocation={displayLocation}
                    />
                </div>
            }
        </div>
    )
};

export default WeatherForecastApp;