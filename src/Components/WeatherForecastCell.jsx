function getWeatherIcon(code) {
    const icons = new Map([
        [[0], "☀️"],
        [[1], "🌤️"],
        [[2], "⛅️"],
        [[3], "🌥️"],
        [[45, 48], "☁️"],
        [[51, 56, 61, 66, 80], "🌦️"],
        [[53, 55, 57, 63, 65, 67, 81, 82], "🌧️"],
        [[71, 73, 75, 77, 85, 86], "🌨️"],
        [[95], "🌩️"],
        [[96, 99], "⛈️"]
    ]);

    const foundIcon = [...icons.keys()].find((key) => key.includes(code));
    return icons.get(foundIcon);
}

const WeatherForecastCell = ({ date, temperatureMax, temperatureMin, code, isToday }) => {
    return (
        <div className='cell'>
            <p className='cell_image'>{ getWeatherIcon(code) }</p>
            <h3 className='cell_title'>
                { isToday ? 'Today' : date }
            </h3>
            <p className='temperature'>{ temperatureMin }° ― <span>{ temperatureMax }°</span></p>
        </div>
    )
};

export default WeatherForecastCell;