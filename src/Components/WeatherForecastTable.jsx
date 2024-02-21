import WeatherForecastCell from "./WeatherForecastCell";
import {weathers} from "../data/weather";

const WeatherForecastTable = () => {
    return (
        <div className='weather_table-container'>
            <h1 className='weather_table-title'>Weather Berlin</h1>
            <div className='weather_cells-container'>
                {
                    weathers.map((weather) => (
                        <WeatherForecastCell {...weather}
                                             key={weather.id}/>
                    ))
                }
            </div>
        </div>
    )
};

export default WeatherForecastTable;