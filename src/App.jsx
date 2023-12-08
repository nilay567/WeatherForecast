import { useState } from 'react'
import './App.css'
import Search from './components/search/search'
import CurrentWeather from './components/currentWeather/currentWeather'
import ForecastWeather from './components/forecastWeather/forecastWeather'
function App() {
  const weather_API_Key = import.meta.env.VITE_WEATHER_API_KEY;
  console.log(weather_API_Key);
  const [currWeather, setCurrWeather] = useState(null);
  const [foreWeather, setForeWeather] = useState(null);

  const searchChange = (e) => {
    console.log(e);
    const [lat, lon] = e.value.split(" ");
    const currentWeather = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weather_API_Key}&units=metric`)
    const forecastWeather = fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weather_API_Key}&units=metric`)

    Promise.all([currentWeather, forecastWeather])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const ForecastResponse = await response[1].json();
        setCurrWeather({ city: e.label, ...weatherResponse })
        setForeWeather({ city: e.label, ...ForecastResponse })
      })
      .catch(console.log)
  }

  return (
    <div className="container">
      <Search onSearchChangeDebounce={searchChange} />
      {currWeather && <CurrentWeather data={currWeather}/>}
      {foreWeather && <ForecastWeather data={foreWeather}/>}
    </div>
  )
}

export default App
