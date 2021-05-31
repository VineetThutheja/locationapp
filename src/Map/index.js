import { useEffect, useState, Fragment } from "react";
import { Button } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import MapContainer from "./MapContainer";
import MapForm from "./MapForm";
import "./map.css";
const Map = (props) => {
  const defaultCenter = {
    lat: 43.3851,
    lng: 20.1734,
  };
  const [position, setPosition] = useState(defaultCenter);
  const [dialogStatus, setDialogStatus] = useState(false);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          setPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        function (permission) {
          setDialogStatus(true);
        }
      );
    }
  }, []);

  const handleClose = () => {
    setDialogStatus(false);
  };

  const positionUpdatehandler = (position) => {
    setPosition({ lat: +position.lat, lng: +position.lng });
  };
  return (
    <Fragment>
      <Dialog open={dialogStatus} onClose={handleClose}>
        <DialogTitle>
          {"You denied for location. Location is set to default"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            okay
          </Button>
        </DialogActions>
      </Dialog>
        <MapForm position={position} updatePosition={positionUpdatehandler} />
      <MapContainer position={position} />
    </Fragment>
  );
};
export default Map;
