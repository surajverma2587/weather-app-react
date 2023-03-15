import Box from "@mui/material/Box";

import { useApp } from "../context/AppProvider";

export const CurrentWeather = () => {
  const { currentWeatherData } = useApp();

  return currentWeatherData ? (
    <Box>
      <pre>{JSON.stringify(currentWeatherData, null, 2)}</pre>
    </Box>
  ) : null;
};
