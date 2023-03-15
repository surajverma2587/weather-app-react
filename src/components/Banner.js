import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useApp } from "../context/AppProvider";

export const Banner = () => {
  const { city } = useApp();

  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Weather Dashboard
      </Typography>

      <Typography variant="h5" component="h2" gutterBottom>
        {city ? city : "View results"}
      </Typography>
    </Box>
  );
};
