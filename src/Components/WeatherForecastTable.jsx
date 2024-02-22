import WeatherForecastCell from "./WeatherForecastCell";

import Weather from "../Class/Weather";

const WeatherForecastTable = ({ time, weather_code, temperature_2m_max, temperature_2m_min, location }) => {
    const weathers = [];

    for (let i = 0; i < time.length; i++) {
        weathers.push(new Weather(
            Math.round(temperature_2m_max[i]),
            Math.round(temperature_2m_min[i]),
            new Intl.DateTimeFormat("en", {
                weekday: 'long'
            }).format(new Date(time[i])),
            weather_code[i])
        );
    }

    return (
        <div className='weather_table-container'>
            <h1 className='weather_table-title'>Weather {location}</h1>

            <div className='weather_cells-container'>
                {
                    weathers.map((weather, index) => (
                        <WeatherForecastCell
                            {...weather}
                            isToday={index === 0}
                            key={index}
                        />
                    ))
                }
            </div>
        </div>
    )
};

export default WeatherForecastTable;