import WeatherForecastCell from "./WeatherForecastCell";
import Weather from "../Class/Weather";

const WeatherForecastTable = ({ time, weather_code, temperature_2m_max, temperature_2m_min, location }) => {
    const weathers = [];

    for (let i = 0; i < time.length; i++) {
        const max = Math.round(temperature_2m_max[i]);
        const min = Math.round(temperature_2m_min[i]);

        weathers.push(new Weather(max, min, time[i], weather_code[i]));
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