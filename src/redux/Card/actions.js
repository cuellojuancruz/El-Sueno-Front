import axios from 'axios'




export function getproducts() {
    return function(dispatch){
        return axios.get('http://localhost:3001/product/getProduct')
        .then((res) => {
            dispatch({
                type:"getProducts",
                payload: res.data
            })
        },
        function error(err){
            console.log(err)
        })
    }
}



export function searchproduct (name) {
    console.log("entro al search de la action " + name)
    return function (dispatch) {
        return axios.get(`http://localhost:3001/product/getProduct/?name=${name}`)
        .then((res) => {
            console.log( "dentro de la action el res.data " +res.data)
            dispatch({
                type: "Search",
                payload: res.data
            })
        })
    }
}


export function setUsers(payload){
    console.log("entro a la action ",payload)
    return {type:"setUsers", payload: payload}
}
export function setAuthenticated(payload){
    console.log("entro a la action ",payload)
    return {type:"setAuthenticated", payload: payload}
}

export function getnewproducts(limit){
    return function(dispatch){
        return axios.get(`http://localhost:3001/product/getProduct/${limit}`)
        .then((res) => {
            dispatch({
                type: "getnewproducts",
                payload: res.data
            })
        })
    }
}
