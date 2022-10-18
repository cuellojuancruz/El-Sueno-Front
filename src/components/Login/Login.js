import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from 'react-redux';
import {setTypeUser} from '../../redux/Card/actions'

function LoginButton () {
  const { loginWithRedirect } = useAuth0();
  const dispatch = useDispatch()

  const handleTypeUser = function(e){
    dispatch(setTypeUser(e.target.value))
    loginWithRedirect()
}

  return (

    <>

      <button value="Cliente"  onClick={(e) => handleTypeUser(e)}>Cliente</button>

      <button value="Provedor" onClick={(e) => handleTypeUser(e)}>Provedor</button>

    </>
  )
  
  
  
};

export default LoginButton;