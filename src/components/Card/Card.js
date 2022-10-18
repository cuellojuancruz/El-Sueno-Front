import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { connect } from 'react-redux';





function Onlycard({products}){


  
    

    return(
      <div>
        {products[0]?.map(product => {
          return(
            <Card sx={{ maxWidth: 200 }}>
              <CardActionArea>
                <CardMedia sx={{ maxWidth: 100 }}
                  component="img"
                  height="120"
                  image="https://hiperlibertad.vteximg.com.br/arquivos/ids/177607-1000-1000/DULCE-DE-LECHE-LS-COLONIAL-400G-DUL-LECHE-LS-COLONIAL-400G-1-18083.jpg?v=637552288915700000"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          )
        })}
      </div>

    )
}



function mapStateToProps(state) {
  return {
      products: state.createProduct.products,
  }
}

export default connect(mapStateToProps)(Onlycard);