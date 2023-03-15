import { useFormik } from "formik";
import * as Yup from "yup";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useApp } from "../context/AppProvider";

export const SearchForm = () => {
  const { setCity } = useApp();

  const initialValues = {
    cityName: "",
  };

  const validationSchema = Yup.object({
    cityName: Yup.string().required("Please enter a valid city."),
  });

  const onSubmit = ({ cityName }) => {
    setCity(cityName);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        p: 2,
      }}
      onSubmit={formik.handleSubmit}
    >
      <TextField
        name="cityName"
        placeholder="Enter city"
        error={!!formik.errors.cityName}
        helperText={formik.errors.cityName}
        value={formik.values.cityName}
        onChange={formik.handleChange}
        sx={{ my: 2 }}
      />
      <Button variant="contained" type="submit">
        Hello
      </Button>
    </Box>
  );
};
