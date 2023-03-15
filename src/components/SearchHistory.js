import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { useApp } from "../context/AppProvider";

export const SearchHistory = () => {
  const { cities, setCities } = useApp();

  const handleClearSearch = () => {
    localStorage.removeItem("cities");

    setCities([]);
  };

  return (
    <Box>
      <pre>{JSON.stringify(cities, null, 2)}</pre>
      <Button variant="contained" color="error" onClick={handleClearSearch}>
        Clear
      </Button>
    </Box>
  );
};
