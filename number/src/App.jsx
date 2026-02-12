import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState(null);

  const API_KEY = "c19712e9f07fdfcfa189baa61f631878"; // Replace with your API key

  async function fetchData() {
    if (!input) return;

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}&units=metric`
      );

      const jsonData = await response.json();

      if (jsonData.cod === 200) {
        setData(jsonData);
      } else {
        alert("City not found");
      }
    } catch (error) {
      console.log("Error fetching weather:", error);
    }
  }

  return (
    <div className="app">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search city..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={fetchData}>Search</button>
      </div>

      <div className="main-container">
        {data && data.main && (
          <div className="left-card">
            <div className="overlay">
              <div>
                <h1>{Math.round(data.main.temp)}°C</h1>
                <h3>{data.weather[0].main}</h3>
                <p>Feels like {Math.round(data.main.feels_like)}°C</p>
              </div>

              <div className="bottom-details">
                <div className="info-box">
                  <span>Wind</span>
                  <p>{data.wind.speed} m/s</p>
                </div>

                <div className="info-box">
                  <span>Humidity</span>
                  <p>{data.main.humidity}%</p>
                </div>

                <div className="info-box">
                  <span>Pressure</span>
                  <p>{data.main.pressure} hPa</p>
                </div>

                <div className="info-box">
                  <span>Min</span>
                  <p>{Math.round(data.main.temp_min)}°</p>
                </div>

                <div className="info-box">
                  <span>Max</span>
                  <p>{Math.round(data.main.temp_max)}°</p>
                </div>

                <div className="info-box">
                  <span>Visibility</span>
                  <p>{data.visibility / 1000} km</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="right-card">
          <h2>Hourly Forecast</h2>

          <div className="hourly-container">
            {["10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"].map(
              (time, index) => (
                <div key={index} className="hour-box">
                  <p>{time}</p>
                  <p>☀</p>
                  <p>24°</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
