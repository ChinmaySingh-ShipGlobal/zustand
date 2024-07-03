import { Product } from "./interfaces";
import { ADD_PRODUCT, REMOVE_PRODUCT, UPDATE_FIELD } from "./constants";

type AddProductAction = {
  type: typeof ADD_PRODUCT;
  payload: Product;
};
type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT;
  payload: number;
};
type UpdateFieldAction = {
  type: typeof UPDATE_FIELD;
  payload: {
    index: number;
    field: keyof Product;
    value: string;
  };
};

export type Action = AddProductAction | RemoveProductAction | UpdateFieldAction;
export type Actions = {
  dispatch: (action: Action) => void;
};

export const addProduct = (newProduct: Product): AddProductAction => ({
  type: ADD_PRODUCT,
  payload: newProduct,
});

export const removeProduct = (index: number): RemoveProductAction => ({
  type: REMOVE_PRODUCT,
  payload: index,
});

export const updateField = (
  index: number,
  field: keyof Product,
  value: string
): UpdateFieldAction => ({
  type: UPDATE_FIELD,
  payload: { index, field, value },
});
