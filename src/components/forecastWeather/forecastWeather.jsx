import './forecastWeather.css';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion'
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const todayIndex = new Date().getDay();

const nextDays = [];

for (let i = 0; i < 7; i++) {
    const dayIndex = (todayIndex + i) % 7;
    nextDays.push(days[dayIndex]);
}


const ForecastWeather = ({ data }) => {

    const uniqueDates = [...new Set(data.list.map(data => data.dt_txt.split(' ')[0]))]


    const myData = uniqueDates.map(date => {
        const d = data.list.find(data => data.dt_txt.split(' ')[0] === date)
        return { date, weatherData: d }
    })

    myData.push(myData[0])
    console.log(myData)

    return (
        console.log(data),
        <>
            <div className="title">Daily</div>
            <Accordion allowZeroExpanded>

                {Array.from({ length: 7 }, (_, idx) => (

                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <span className="day">{nextDays[idx]}</span>
                                    <span className="description">{myData[idx] && myData[idx].weatherData.weather[0].description}</span>
                                    <span className="min-max">{myData[idx] && myData[idx].weatherData.main.temp_min}/{myData[idx]
                                        && myData[idx].weatherData.main.temp_max}</span>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details">
                                <div className="detail">
                                    <label>Pressure :</label>
                                    <label>{myData[idx] && myData[idx].weatherData.main.pressure}</label>
                                </div>

                                <div className="detail">
                                    <label>Humidity :</label>
                                    <label>{myData[idx] && myData[idx].weatherData.main.humidity}</label>
                                </div>

                                <div className="detail">
                                    <label>Clouds :</label>
                                    <label>{myData[idx] && myData[idx].weatherData.clouds.all}</label>
                                </div>

                                <div className="detail">
                                    <label>Wind speed :</label>
                                    <label>{myData[idx] && myData[idx].weatherData.wind.speed} m/s</label>
                                </div>

                                <div className="detail">
                                    <label>Sea Level :</label>
                                    <label>{myData[idx] && myData[idx].weatherData.main.sea_level}</label>
                                </div>

                                <div className="detail">
                                    <label>Feels Like :</label>
                                    <label>{myData[idx] && myData[idx].weatherData.main.feels_like}</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}




            </Accordion>
        </>

    )
}

export default ForecastWeather