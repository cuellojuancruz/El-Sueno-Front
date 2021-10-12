import { combineReducers } from "redux";
import  createProduct  from "./home/reducer";




const rootReducer = combineReducers({
  createProduct: createProduct

  });


export default rootReducer;
