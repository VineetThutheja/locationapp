import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Map from "./Map";
import Main from "./Main";
const App=() =>{
  return (
    <Router>
      <Route path="/" component={Main} exact/>
      <Route path="/map" component={Map} exact />
    </Router>  
  )
}

export default App;
