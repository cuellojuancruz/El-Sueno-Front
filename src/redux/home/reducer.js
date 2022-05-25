const initialState = {
    products: []
}



function createProduct (state = initialState, action){

    console.log("reducer",action.payload)
    

    
        if(action.type === "getProducts"){
            console.log("reducer",action.payload)
            console.log("entro al action type", action.payload)
            console.log(state.products, "estado de productos")
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        }

        if(action.type === "createProduct"){
            console.log("entro al action type", action.payload)
            console.log(state.products, "estado de productos")
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        }

    return state;
}


export default createProduct