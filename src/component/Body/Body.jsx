import React, { useContext } from "react";
import { weatherContext } from "../Context";
import "./Body.css";

const Body = () => {
  const { data } = useContext(weatherContext);
  console.log(data);

  return (
    <div>
      {data ? (
        <div className="weather-container">
          <h2>Weather in {data.location.name}</h2>
          <p>
            {data.location.region}, {data.location.country}
          </p>
          <p>{data.location.localtime}</p>
          <p>Temperature: {data.current.temp_c} °C</p>
          <p>Humidity: {data.current.humidity}</p>
          <p>Condition: {data.current.condition.text}</p>
          <img src={data.current.condition.icon} alt="Weather Icon" />
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default Body;
