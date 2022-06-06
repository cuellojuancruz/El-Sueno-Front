import { combineReducers } from "redux";
import  createProduct  from "./home/reducer";
import Products from "./home/reducer";




const rootReducer = combineReducers({
  createProduct: createProduct,
  Producst: Products,

  });


export default rootReducer;
