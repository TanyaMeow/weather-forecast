import sun from '../sun.png';

const WeatherForecastCell = ({title, temperature}) => {
    return (
        <div className='cell'>
            <img className='cell_image' src={sun} alt=""/>
            <h3 className='cell_title'>{title}</h3>
            <p className='temperature'>{temperature}</p>
        </div>
    )
};

export default WeatherForecastCell;