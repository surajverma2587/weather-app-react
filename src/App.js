import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { Banner } from "./components/Banner";
import { SearchForm } from "./components/SearchForm";
import { SearchHistory } from "./components/SearchHistory";
import { CurrentWeather } from "./components/CurrentWeather";
import { ForecastWeather } from "./components/ForecastWeather";
import { AppProvider } from "./context/AppProvider";

export const App = () => {
  return (
    <AppProvider>
      <Stack gap={2}>
        <Box>
          <Banner />
        </Box>

        <Box>
          <Grid container>
            <Grid item xs={12} sm={12} md={3}>
              <Stack gap={2}>
                <Box>
                  <SearchForm />
                </Box>
                <Box>
                  <SearchHistory />
                </Box>
              </Stack>
            </Grid>

            <Grid item xs={12} sm={12} md={9}>
              <Stack gap={2}>
                <Box>
                  <CurrentWeather />
                </Box>
                <Box>
                  <ForecastWeather />
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </AppProvider>
  );
};
