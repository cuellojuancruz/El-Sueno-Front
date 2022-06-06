import axios from 'axios';


export function searchproduct (name) {
    console.log("entro al search")
    return function (dispatch) {
        dispatch({
            type: "Search",
            payload: name
        })
    }
}


