import { Product } from "./interfaces";

export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const UPDATE_FIELD = "UPDATE_FIELD";

export interface Action {
  type: string;
  payload?: any;
}

export const addProduct = (newProduct: Product) => ({
  type: ADD_PRODUCT,
  payload: newProduct,
});

export const removeProduct = (index: number) => ({
  type: REMOVE_PRODUCT,
  payload: index,
});

export const updateField = (
  index: number,
  field: keyof Product,
  value: string
) => ({
  type: UPDATE_FIELD,
  payload: { index, field, value },
});
