import Box from "@mui/material/Box";

import { useApp } from "../context/AppProvider";

export const ForecastWeather = () => {
  const { forecastWeatherData } = useApp();

  return forecastWeatherData ? (
    <Box>
      <pre>{JSON.stringify(forecastWeatherData, null, 2)}</pre>
    </Box>
  ) : null;
};
