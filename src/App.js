
import Home from "./components/Home/Home";
import Nosotros from "./components/Nosotros/Nosotros"
import Productos from "./components/Productos/Productos";
import Novedades from "./components/Novedades/Novedades";
import Promociones from "./components/Promociones/Promociones";
import Purchas from "./components/Purchas/Purchas";
import NavBar from "./components/NavBar/NavBar";
import LoginButton from "./components/Login/Login";
import LogOut from "./components/LogOut/LogOut";
import User from "./components/User/User"


import { useAuth0 } from "@auth0/auth0-react"
import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import { Route } from "react-router-dom";
import './App.css';



function App(){


  const { isLoading } = useAuth0()
  const { isAuthenticated }= useAuth0()
  console.log(isAuthenticated)

  return(
    
    <Auth0Provider domain="dev-tr0vgaux.us.auth0.com" clientId="3hAsdKBCYROUx1kCPzsdeXnTDlXfj79y" redirectUri={window.location.origin}>
      {
        
        
        isLoading
        
        
        ?
        //true
      (
      <h1>
        isloading
      </h1>      
        )

      :
      //false
      
        
      isAuthenticated
        
        ?
        //true
        <div>

          <Route path="/" component={NavBar}/>

          <Route exact path="/" component={Home}/>
          
          <Route exact path="/Productos" component={Productos}/>
          
          <Route exact path="/Profile" component={User}/>
  
          <Route exact path="/Promociones" component={Promociones}/>
  
          <Route exact path="/Purchas" component={Purchas}/>
  
          <Route exact path="/Novedades" component={Novedades}/>
  
          <Route path="/Nosotros" component={Nosotros}/>
         </div>
        
        :
        //false
        <>
        
        <LoginButton/>
        <LogOut/>
        
        </>
        
    
    }



    </Auth0Provider>

  )

}
































// function App() {

//   const { isLoading } = useAuth0();
//   const { isAuthenticated }= useAuth0();
//   console.log(isAuthenticated)

//   return (

//   <>
//   <Auth0Provider domain="dev-4ivkxcfj.us.auth0.com" clientId="UXJlfRtCTWIScbJqtAdrob9Fd5foQilf" redirectUri={window.location.origin}>
//     { isLoading ? (
//     <h1>
//       isloading
//     </h1>      
//     ): 
//       {isAuthenticated ? (
      
  

//         <div>

//           {/* <Route exact path="/" component={LoginButton}/> */}

//           <Route path="/" component={LogOut}/>

//           <Route path="/" component={NavBar}/>
  
//           <Route exact path="/" component={Home}/>
  
//           <Route exact path="/Productos" component={Productos}/>
  
//           <Route exact path="/Promociones" component={Promociones}/>
  
//           <Route exact path="/Purchas" component={Purchas}/>
  
//           <Route exact path="/Novedades" component={Novedades}/>
  
//           <Route path="/Nosotros" component={Nosotros}/>
//         </div>
      

   
    
    
//   ):
//   <h1> no autenticado </h1>

//    }
//   </Auth0Provider>
//   </>
//   );
// }

export default App;
