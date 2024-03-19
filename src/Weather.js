import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState("");
  let [submitted, setSubmitted] = useState(false);
  let [currentData, setCurrentData] = useState(null);

  function getApiUrl(city) {
    let apiKey = "1bfa1ab4e6b89407b8af3385at1eocb2";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    return apiUrl;
  }

  function handleResponse(response) {
    setSubmitted(true);
    let currentTemp = Math.round(response.data.temperature.current);
    let description = response.data.condition.description;
    let humidity = response.data.temperature.humidity;
    let wind = response.data.wind.speed;
    let icon = response.data.condition.icon_url;
    let city = response.data.city;
    let currentWeather = [currentTemp, description, humidity, wind, icon, city];

    setCurrentData(currentWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.get(getApiUrl(city)).then(handleResponse);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Type a city" onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );
  if (submitted) {
    return (
      <div>
        {form}
        <ul>
          <li>City: {currentData[5]}</li>
          <li>Current Temperature: {currentData[0]}°C</li>
          <li>Description: {currentData[1]}</li>
          <li>Humidity: {currentData[2]}%</li>
          <li>Wind: {currentData[3]} km/h</li>
          <li>
            <img src={currentData[4]} alt="weather icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
