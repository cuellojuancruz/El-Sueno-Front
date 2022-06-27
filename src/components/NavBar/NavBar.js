import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { getnewproducts } from '../../redux/Card/actions';
import { useDispatch, useSelector } from 'react-redux';
import {searchproduct} from '../../redux/Card/actions'
import "./NavBar.css"
import LogOut from '../LogOut/LogOut';



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: "center",
        flexDirection: 'space-evenly',
        alignItems: 'center',
      '& > *': {
        margin: theme.spacing(7),
      },
    },
  }));


export function NavBar(){

  const dispatch = useDispatch()

  const initialState = {name: ""}
  
  const [datos, setDatos] = useState(initialState)
  
  const {name} = datos


  const handleKeyPress = (e) => {
    console.log("entro al enter")
    if(e.key === 'Enter'){
      dispatch(searchproduct(name))
  }
}

  const handleEffect = () => {
    dispatch(getnewproducts(5))
  }


  const handlesubmit = function (e){
    setDatos({
        ...datos, 
        name: e.target.value
    })
}

    const classes = useStyles();

    return(



<div className="Fondo">

    <LogOut></LogOut>  
    <button>contactos</button>

<ButtonGroup size="small" variant="contained" color="primary" aria-label="contained primary button group" className={classes.root}>
    <Link to = "/">
    <Button onClick={() => handleEffect()}>Inicio</Button>
    </Link>

    <Link to = "/Nosotros">
    <Button>Nosotros</Button>
    </Link>
    
    <Link to = "/Profile">
    <Button>Profile</Button>
    </Link>

    <Link to = "/Productos">
    <Button>Productos</Button>
    </Link>

    <Link to = "/Novedades">
    <Button>Novedades</Button>
    </Link>

    <Link to ="/Promociones">
    <Button>Promociones</Button>
    </Link>

    <TextField id="outlined-basic" label="Outlined" variant="outlined" name="search" value= {name} onChange={(e) => handlesubmit(e)} onKeyPress={(e) => handleKeyPress(e)}/>
    <Link to = "/Purchas">
    <ShoppingCartIcon fontSize="large" sx={{ color: "#212121" }}/>
    </Link >
</ButtonGroup>

        </div>
    )

}



export default NavBar;