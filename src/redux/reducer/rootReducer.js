import { combineReducers } from "redux";
import { productReducer, selectedProductsReducer } from "./productReducer";

export const rootReducer = combineReducers({
  allProducts: productReducer,
  selectproduct: selectedProductsReducer,
});
export default rootReducer;
