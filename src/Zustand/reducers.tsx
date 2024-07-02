//reducers.tsx
import { UPDATE_FIELD } from "./constants";
import { ProductFormInitialState } from "./interfaces";

const initialState = {
  addProduct: {
    product: ProductFormInitialState,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FIELD:
      return {
        ...state,
        addProduct: {
          ...state.addProduct,
          product: {
            ...state.addProduct.product,
            [action.payload.fieldName]: action.payload.value,
          },
        },
      };
    default:
      return state;
  }
};
export default reducer;
