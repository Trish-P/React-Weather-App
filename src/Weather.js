import React from "react";

export default function Weather() {
  let weatherData = {
    city: "Tulsa",
    temperature: "2",
    currentDay: "Thursday",
    currentHour: "11:30",
    description: "Sunny",
    humidity: "Humidity: 0%",
    wind: "Wind: 2km/H",
    imgLink: "http//openweathermap.org/img/wn/10d.png"
  };

  return (
    <div className="Weather">
      <div className="Project">
        <div className="card">
          <form id="city-form" className="mb-3">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Type a Cty..."
                  id="city-input"
                  className="form-control"
                  autocomplete="off"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="search"
                  className="btn btn-primar w-100"
                />
              </div>
            </div>
          </form>
          </div>
    

          <div className="row">
            <div className="col-5 city">
              <h2 id="greetings">
                <i className="fa-solid fa-calendar-day"></i> Weather in </h2>
                <h1>{weatherData.city}</h1>
                <img
                src={weatherData.imgLink}
                alt="cloudy day"
                width="100"
                className="float-left"
                id="icon"/>

        </div>
        <div className="col-4">
          <div className="today-temperature">
            <span className="temperature"{weatherData.temperature}</span>

            <span className="units">
              <a href="#" id="celsius-link" className="active">°C </a>{" "}
              <a href="#" id= fahrenheit-link"> °F </a> </span>

              <ul>
              <li id="feels-like"></li>
              </ul>
      </div>
      </div>
      <div className="col-3">
        <ul>
          <li className="day">{weatherData.currentDay}<li>
            <li>{weatherData.currentHour}</li>

        <br />
        <li>{weatherData.description}<li>
          <li>{weatherData.humidity}<li>
            <li>{weatherData.wind}</li>
            </ul>
            </div>
            </div>

          <h3>{weatherData.Data.suggestion}</h3>
          </div>
          <footer>
            Coded by Trish Patel</footer>
            </div>
            </div>
      
  
  );
}
