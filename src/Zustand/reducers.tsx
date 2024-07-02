// reducers.ts
import { Action } from "./actions";
import { ProductFormInitialState, ProductsState } from "./interfaces";

const reducer = (
  state: ProductsState = ProductFormInitialState,
  action: Action
) => {
  switch (action.type) {
    case "addProduct":
      return {
        ...state,
        productForm: [...state.productForm, action.newProduct],
      };
    case "removeProduct":
      return {
        ...state,
        productForm: state.productForm.filter((_, i) => i !== action.index),
      };
    case "updateField":
      return {
        ...state,
        productForm: state.productForm.map((product, indx) =>
          indx === action.index
            ? { ...product, [action.field]: action.value }
            : product
        ),
      };
    default:
      return state;
  }
};
export default reducer;
