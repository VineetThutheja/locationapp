import { useState } from "react";
import { TextField, Grid, Button, FormHelperText } from "@material-ui/core";
import "./map.css";
const MapForm = (props) => {
  const [formData, setFormData] = useState({
    latitude: {
      hasError: false,
      value: props.position.lat,
    },
    longitude: {
      hasError: false,
      value: props.position.lng,
    },
  });
  const inputHandler = (event) => {
    switch (event.target.name) {
      case "latitude":
        if (
          typeof +event.target.value === "number" &&
          Math.abs(event.target.value) <= 90
        ) {
          const latitude = {
            ...[event.target.name],
            value: event.target.value,
          };

          setFormData((prevstate) => {
            return { ...prevstate, latitude: { ...latitude } };
          });
        } else {
          const latitude = {
            hasError: true,
            message:
              "Latitude Should be less than or equal to 90 and must be a number",
            value: formData[event.target.name].value,
          };
          setFormData((prevstate) => {
            return { ...prevstate, latitude: { ...latitude } };
          });
        }
        break;
      case "longitude":
        if (
          typeof +event.target.value === "number" &&
          Math.abs(event.target.value) <= 180
        ) {
          const longitude = {
            ...[event.target.name],
            value: event.target.value,
          };
          setFormData((prevstate) => {
            return { ...prevstate, longitude };
          });
        } else {
          const longitude = {
            hasError: true,
            message:
              "Longitude Should be less than or equal to 180 and must be a number",
            value: formData[event.target.name].value,
          };
          setFormData((prevstate) => {
            return { ...prevstate, longitude: { ...longitude } };
          });
        }
        break;
      default:
        return;
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    props.updatePosition({
      lat: +formData.latitude.value,
      lng: +formData.longitude.value,
    });
  };

  return (
    <div className={"box"}>
      <form onSubmit={submitHandler}>
        <Grid container spacing={3}>
          <Grid item md={3}>
            <TextField
              label="Latitude"
              name="latitude"
              size="small"
              variant="outlined"
              value={formData.latitude.value}
              onChange={inputHandler}
              error={formData.latitude.hasError}
            />
            {formData.latitude.hasError && (
              <FormHelperText error>{formData.latitude.message}</FormHelperText>
            )}
          </Grid>
          <Grid item md={3}>
            <TextField
              label="Longitude"
              name="longitude"
              size="small"
              variant="outlined"
              value={formData.longitude.value}
              onChange={inputHandler}
              error={formData.longitude.hasError}
            />
            {formData.longitude.hasError && (
              <FormHelperText error>
                {formData.longitude.message}
              </FormHelperText>
            )}
          </Grid>
          <Grid item md={3}>
            <Button
              type={"submit"}
              variant="contained"
              margin="normal"
              color="primary"
            >
              Update Location
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};
export default MapForm;
