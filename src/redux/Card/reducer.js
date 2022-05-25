const initialState = {
    products: []
}



function Product (state = initialState, action){

    console.log(state.products, "estado de productos")
    
    if(action.type === "product"){
        console.log("reducer",action.payload)
        console.log("entro al action type", action.payload)
        return {
            ...state,
            products: state.products.concat(action.payload),
        }
    }
    return state;
}


export default Product