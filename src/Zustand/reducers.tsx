// reducers.ts
import { ADD_PRODUCT, REMOVE_PRODUCT, UPDATE_FIELD } from "./constants";
import { ProductFormInitialState, ProductsState } from "./interfaces";

const reducer = (
  state: ProductsState = ProductFormInitialState,
  action: any
) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        productForm: [...state.productForm, action.payload],
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        productForm: state.productForm.filter((_, i) => i !== action.payload),
      };
    case UPDATE_FIELD:
      return {
        ...state,
        productForm: state.productForm.map((product, indx) =>
          indx === action.payload.index
            ? { ...product, [action.payload.field]: action.payload.value }
            : product
        ),
      };
    default:
      return state;
  }
};

export default reducer;
