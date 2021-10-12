import NavBar  from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";


import React from "react";
import { Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Route path="/home" component={NavBar} />
      <Route exact path="/home" component={Home} />
    </React.Fragment>
  );
}

export default App;
