import { combineReducers } from "redux";
import  createProduct  from "./home/reducer";
import Product from "./Card/reducer";




const rootReducer = combineReducers({
  createProduct: createProduct,
  Product: Product,

  });


export default rootReducer;
