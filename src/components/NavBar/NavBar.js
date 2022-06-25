import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { getnewproducts } from '../../redux/Card/actions';
import { useDispatch } from 'react-redux';
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
    {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEX+Kir/KyuqVYmdAAACXUlEQVR4nO2VsWoFMBDD3P//6T5aep1uOgLCyMkgssUelPzk63Nq4euTH2qF/D3Uwu8dboS/NVsh/YE07YaHQJp+vuFQHUTjF0AoXtb42mINpGk3PATS9PMNh+ogGr8AQvGyxtcWayBNu+EhkKafbzhUB9H4BRCKlzW+tlgDadoND4E0/XzDoTqIxi+AULys8bXFGkjTbngIpOnnGw7VQTR+AYTiZY2vLdZAmnbDQyBNP99wqA6i8QsgFC9rfG2xBtK0Gx4Cafr5hkN1EI1fAKF4WeNrizWQpt3wEEjTzzccqoNo/AIIxcsaX1usgTTthodAmn6+4VAdROMXQChe1vjaYg2kaTc8BNL08w2H6iAavwBC8bLG1xZrIE274SGQpp9vOFQH0fgFEIqXNb62WANp2g0PgTT9fMOhOojGL4BQvKzxtcUaSNNueAik6ecbDtVBNH4BhOJlja8t1kCadsNDIE0/33CoDqLxCyAUL2t8bbEG0rQbHgJp+vmGQ3UQjV8AoXhZ42uLNZCm3fAQSNPPNxyqg2j8AgjFyxpfW6yBNO2Gh0Cafr7hUB1E4xdAKF7W+NpiDaRpNzwE0vTzDYfqIBq/AELxssbXFmsgTbvhIZCmn284VAfR+AUQipc1vrZYA2naDQ+BNP18w6E6iMYvgFC8rPG1xRpI0254CKTp5xsO1UE0fgGE4mWNry3WQJp2w0MgTT/fcKgOovELIBQva3xtsQbStBseAmn6+YZDdRCNXwCheFnja4s1kKbd8BBI0883HKqDaPwCCMXLGl9brIE07YaH/P+1FL4BPtdcl9KXfdoAAAAASUVORK5CYII=" alt="" /> */}
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