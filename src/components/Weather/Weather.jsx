import React, { useState, useEffect } from 'react';
import './Weather.css';
import DaySunny from '../../weather/64x64/day/113.png';
import Cloudy from '../../weather/64x64/day/119.png';
import PartlyCloudyDay from '../../weather/64x64/day/116.png';
import Rain from '../../weather/64x64/day/176.png';
import Snow from '../../weather/64x64/day/179.png';
import Thunderstorm from '../../weather/64x64/day/200.png';
import ClearNight from '../../weather/64x64/night/113.png';
import CloudyNight from '../../weather/64x64/night/119.png';
import PartlyCloudyNight from '../../weather/64x64/night/122.png';
import RainNight from '../../weather/64x64/night/176.png';
import SnowNight from '../../weather/64x64/night/179.png';
import ThunderstormNight from '../../weather/64x64/night/200.png';

const API_KEY = 'd0b7abc2b79441ef8e993054241303';

function Weather() {
  const [location, setLocation] = useState(localStorage.getItem('location') || 'Berlin');
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetchWeatherData();
    const intervalId = setInterval(fetchWeatherData, 30000);
    return () => clearInterval(intervalId);
  }, [location]);

  useEffect(() => {
    localStorage.setItem('location', location);
  }, [location]);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&lang=en`);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const renderWeatherIcon = (conditionText, isDay) => {
    if (typeof conditionText === 'string') {
      const condition = conditionText.toLowerCase();

      if (isDay) {
        switch (condition) {
          case "sunny":
            return <img src={DaySunny} alt="Sunny" className="weather-icon" />;
          case "cloudy":
            return <img src={Cloudy} alt="Cloudy" className="weather-icon" />;
          case "partly cloudy":
            return <img src={PartlyCloudyDay} alt="Partly Cloudy" className="weather-icon" />;
          case "rain":
            return <img src={Rain} alt="Rain" className="weather-icon" />;
          case "snow":
            return <img src={Snow} alt="Snow" className="weather-icon" />;
          case "thunderstorm":
            return <img src={Thunderstorm} alt="Thunderstorm" className="weather-icon" />;
          default:
            return null;
        }
      } else {
        switch (condition) {
          case "clear":
            return <img src={ClearNight} alt="Clear Night" className="weather-icon" />;
          case "cloudy":
            return <img src={CloudyNight} alt="Cloudy Night" className="weather-icon" />;
          case "partly cloudy":
            return <img src={PartlyCloudyNight} alt="Partly Cloudy Night" className="weather-icon" />;
          case "rain":
            return <img src={RainNight} alt="Rain" className="weather-icon" />;
          case "snow":
            return <img src={SnowNight} alt="Snow" className="weather-icon" />;
          case "thunderstorm":
            return <img src={ThunderstormNight} alt="Thunderstorm" className="weather-icon" />;
          default:
            return null;
        }
      }
    } else {
      console.error('Condition text is not a string:', conditionText);
      return null;
    }
  };
  const isDayTime = () => {
    const date = new Date();
    const hour = date.getHours();
    return hour >= 6 && hour < 18; // day time is between 6 AM and 6 PM
  };


  return (
    <div className='weather-container'>
      <div className="weather-card">
        {weatherData && (
            <div className="weather-content">
                {renderWeatherIcon(weatherData.current.condition.text, isDayTime())}
                <h2>{location}</h2>
                <p>Current Temperature: {weatherData.current.temp_c}°C</p>
                <p>Weather Condition: {weatherData.current.condition.text}</p>
            </div>
        )}
        <div className="location-select">
          <label htmlFor="location">Choose a Location:</label>
          <select id="location" value={location} onChange={handleLocationChange}>
            <option value="Berlin">Berlin</option>
            <option value="Munich">Munich</option>
            <option value="Hamburg">Hamburg</option>
            <option value="Dusseldorf">Dusseldorf</option>
            <option value="Kleve">Kleve</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Weather;
