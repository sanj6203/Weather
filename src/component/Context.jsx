import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

// Create the context
const weatherContext = createContext();

// Create the Provider component
const WeatherContextProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState("Buxar");

  // Function to fetch weather data
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=adec3aba9a3f473c83735131242409&q=${location}&aqi=yes`
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [location]);

  return (
    <weatherContext.Provider value={{ data, setData, setLocation }}>
      {children}
    </weatherContext.Provider>
  );
};

export { weatherContext, WeatherContextProvider };
