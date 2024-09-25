import React, { useContext, useState } from "react";
import "./Header.css";
import { weatherContext } from "../Context";

const Header = () => {
  const { setLocation, location } = useContext(weatherContext);
  const [currLocation, setCurrLocation] = useState("");
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setLocation(currLocation);
    }
  };

  return (
    <header className="weather-header">
      <div className="logo-container">
        <img
          src="https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/04/Apple-Weather-app.jpg?w=1500&quality=82&strip=all&ssl=1"
          alt="Weather Logo"
          className="weather-logo"
        />
        <h1 className="app-title">Weather </h1>
      </div>

      <div className="search-bar-container">
        <input
          onChange={(e) => {
            setCurrLocation(e.target.value);
          }}
          onKeyPress={handleKeyPress}
          type="text"
          placeholder="Search city..."
          className="search-bar"
        />
        <button
          onClick={() => setLocation(currLocation)}
          className="search-button"
        >
          Search
        </button>
      </div>
    </header>
  );
};

export default Header;
// api====     https://api.weatherapi.com/v1/current.json?key=adec3aba9a3f473c83735131242409&q=buxar&aqi=yes
