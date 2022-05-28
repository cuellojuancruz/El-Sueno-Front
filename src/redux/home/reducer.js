const initialState = {
    products: [],
    newproducts: []
}



function Products (state = initialState, action){

    console.log("reducer",action.type)
    

    
        if(action.type === "getProducts"){
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        }

        if(action.type === "getnewproducts"){
            return{
                ...state,
                newproducts: action.payload
            }
        }

    return state;
}


export default Products