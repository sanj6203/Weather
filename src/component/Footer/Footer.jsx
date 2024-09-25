import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="weather-footer">
      <div className="footer-details">
        <h2>About Weather App</h2>
        <p>
          Weather App is your reliable source for real-time weather updates,
          forecasts, and historical weather data. Whether you’re planning a trip
          or just checking the local weather, we’ve got you covered with the
          most accurate and up-to-date information.
        </p>
      </div>

      <div className="footer-credits">
        <p>&copy; 2024 Weather App. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
