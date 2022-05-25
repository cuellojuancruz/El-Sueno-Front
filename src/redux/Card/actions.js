import axios from 'axios'




export default function getproducts() {
    return function(dispatch){
        console.log("entro a la actionssss")
        return axios.get('http://localhost:3001/product/getProduct/')
        .then((res) => {
            console.log(res.data  + " data del res")
            dispatch({
                type:"getProducts",
                payload: res.data
            })
        },
        function error(err){
            console.log("fallo")
        })
    }
}
