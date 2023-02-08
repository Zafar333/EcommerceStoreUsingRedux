import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [
    { id: 1, title: "Zafar", category: "programmmer" },
    { id: 2, title: "hamza", category: "programmmer" },
  ],
};
const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;

    default:
      return state;
  }
};
export default productReducer;
