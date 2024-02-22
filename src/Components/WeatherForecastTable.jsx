import WeatherForecastCell from "./WeatherForecastCell";

const createWeather =  (time, weather_code, temperature_2m_max, temperature_2m_min) => {
    const weathers = [];

    for (let i = 0; i < time.length; i++) {
        weathers.push(
            {
                temperatureMax: Math.floor(temperature_2m_max[i]),
                temperatureMin: Math.ceil(temperature_2m_min[i]),
                date: new Intl.DateTimeFormat("en", {
                    weekday: 'long'
                }).format(new Date(time[i])),
                code: weather_code[i]
            }
        );
    }

    return weathers;
}

const WeatherForecastTable = ({ time, weather_code, temperature_2m_max, temperature_2m_min, displayLocation }) => {
    const weathers = createWeather(time, weather_code, temperature_2m_max, temperature_2m_min)

    return (
        <div className='weather_table-container'>
            <h1 className='weather_table-title'>Weather {displayLocation}</h1>

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