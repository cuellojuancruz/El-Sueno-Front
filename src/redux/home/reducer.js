const initialState = {
    products: [],
    newproducts: [],
    users: {},
    authenticated: false,
    userType: ""
}



function Products (state = initialState, action){

    console.log("reducer",action.type)

    
        if(action.type === "getProducts"){
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        }

        if(action.type === "setUsers"){
            return {
                ...state,
                users: action.payload
            }
        }

        if(action.type === "setTypeUser"){
            console.log("entro al if", action.payload)
            return {
                ...state,
                userType: action.payload
            }
        }

        if(action.type === "setAuthenticated"){
            return {
                ...state,
                authenticated: action.payload
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