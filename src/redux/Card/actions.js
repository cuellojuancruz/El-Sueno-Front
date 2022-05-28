import axios from 'axios'




export function getproducts() {
    return function(dispatch){
        return axios.get('http://localhost:3001/product/getProduct/')
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

export function getnewproducts(limit){
    return function(dispatch){
        return axios.get(`http://localhost:3001/product/getProduct/${limit}`,)
        .then((res) => {
            dispatch({
                type: "getnewproducts",
                payload: res.data
            })
        })
    }
}




































