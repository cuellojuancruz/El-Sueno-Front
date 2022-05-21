
import Home from "./components/Home/Home";
import Nosotros from "./components/Nosotros/Nosotros"
import Productos from "./components/Productos/Productos";
import Novedades from "./components/Novedades/Novedades";
import Promociones from "./components/Promociones/Promociones";
import Purchas from "./components/Purchas/Purchas";


import React from "react";
import { Route } from "react-router-dom";
import './App.css';


function App() {
  return (
    <React.Fragment>
   
      <Route exact path="/" component={Home}/>
      
      <Route exact path="/Productos" component={Productos}/>
      
      <Route exact path="/Promociones" component={Promociones}/>
      
      <Route exact path="/Purchas" component={Purchas}/>
      
      <Route exact path="/Novedades" component={Novedades}/>

      <Route path="/Nosotros" component={Nosotros}/>
      
    </React.Fragment>
  );
}

export default App;
