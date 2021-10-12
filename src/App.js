import NavBar  from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";


import React from "react";
import { Route } from "react-router-dom";
import './App.css';
import LogOut from "./components/LogOut/LogOut";

function App() {
  return (
    <React.Fragment>
      <Route exact path="/" component={Login} />
      <Route path="/home" component={LogOut} />    
      <Route path="/home" component={NavBar} />
      <Route exact path="/home" component={Home} />
    </React.Fragment>
  );
}

export default App;
