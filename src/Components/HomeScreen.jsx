import WeatherForecastTable from "./WeatherForecastTable";

const HomeScreen = () => {
    return (
        <div className='home_container'>
            <h1 className='home_title'>Classy Weather</h1>
            <input className='form_find-city' type="text" placeholder='Find city...'/>

            <div className='weather_forecast-block'>
                <WeatherForecastTable />
            </div>
        </div>
    )
};

export default HomeScreen;