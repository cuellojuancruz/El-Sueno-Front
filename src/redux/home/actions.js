import axios from 'axios';


export function createProduct (product) {
    return function (dispatch) {
        axios.post(`http://localhost:3001/product/createProduct/`, product)
        .then((res) => {
            dispatch({
                type: "createProduct",
                payload: res.data
            })
        })
    }
}


// export function creategames (datos) {
//     return function (dispatch) {
//         axios.post(`http://localhost:3001/videogame/`, {datos})
//         .then((res) => {
//             dispatch({
//                 type: "creategame",
//                 payload: res.data
//             })
//         })
//     }
// }