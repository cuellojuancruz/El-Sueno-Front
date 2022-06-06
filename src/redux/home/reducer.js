const initialState = {
    products: [],
    newproducts: [],
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
            console.log("entro al newprodcuts")
            return{
                ...state,
                newproducts: action.payload
            }
        }

        if(action.type === "Search"){
            console.log("entro al reducer search")
            return{
                ...state,
                newproducts: action.payload
            }
        }

    return state;
}


export default Products