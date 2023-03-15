import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

import {
  API_KEY,
  CURRENT_WEATHER_URL,
  FORECAST_WEATHER_URL,
} from "../constants";

import { getDataFromLocalStorage } from "../utils/getDataFromLocalStorage";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [city, setCity] = useState("");
  const [currentWeatherData, setCurrentWeatherData] = useState();
  const [forecastWeatherData, setForecastWeatherData] = useState();
  const [cities, setCities] = useState(getDataFromLocalStorage("cities", []));

  const value = {
    city,
    currentWeatherData,
    forecastWeatherData,
    cities,
    setCity,
    setCities,
  };

  useEffect(() => {
    if (city) {
      const fetchData = async () => {
        const { data: currentData } = await axios.get(
          `${CURRENT_WEATHER_URL}?q=${city}&appid=${API_KEY}`
        );

        const { lat, lon } = currentData.coord;

        const { data: forecastData } = await axios.get(
          `${FORECAST_WEATHER_URL}?lat=${lat}&lon=${lon}&exclude=[current,minutely,hourly,alerts]&appid=${API_KEY}`
        );

        setCurrentWeatherData(currentData);
        setForecastWeatherData(forecastData);

        const citiesFromLS = getDataFromLocalStorage("cities", []);

        citiesFromLS.push(city);

        localStorage.setItem("cities", JSON.stringify(citiesFromLS));

        setCities(citiesFromLS);
      };

      fetchData();
    }
  }, [city]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => useContext(AppContext);
