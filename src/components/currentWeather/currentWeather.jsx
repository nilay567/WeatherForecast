import './currentWeather.css'

const CurrentWeather = ({data}) => {

   console.log(data);     
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">{data.city}</p>
                    <p className="weather-desc">{data.weather[0].description}</p>
                </div>
            </div>
            <div className="bottom">
               <p className="temp">{data.main.temp}°C</p>
               <div className="details">
                 <div className="para-row">
                    <span className="para-label-det">Details</span>
                 </div>
                 <div className="para-row">
                    <span className="para-label">Feels like</span>
                    <span className="para-value">{data.main.feels_like}°C</span>
                 </div>
                 <div className="para-row">
                    <span className="para-label">Wind</span>
                    <span className="para-value">{data.wind.speed} m/s</span>
                 </div>
                 <div className="para-row">
                    <span className="para-label">Humidity</span>
                    <span className="para-value">{data.main.humidity}</span>
                 </div>
                 <div className="para-row">
                    <span className="para-label">Pressure</span>
                    <span className="para-value">{data.main.pressure}</span>
                 </div>
                 
               </div>
            </div>
        </div>


    )


}

export default CurrentWeather


