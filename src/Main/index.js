import React from "react";
import {Button} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import "./main.css"
const Main=(props)=>{
    return (
        <div className="background-blue">
        <NavLink to="/map">
            <Button variant="contained" margin="normal" color="primary">Get Location</Button>
        </NavLink>
        </div>
    )
}

export default Main;