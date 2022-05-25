import React from 'react';
import Onlycard from './../Card/Card'
import { useEffect } from "react";
import getproducts from '../../redux/Card/actions';
import { useDispatch } from 'react-redux';

function Productos(){
  
    
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getproducts())
  }, [dispatch])




    return(

        <div>
            
            <Onlycard></Onlycard>
        
        </div>
    )
}





export default Productos