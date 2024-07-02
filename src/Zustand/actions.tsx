import { ADD_PRODUCT, REMOVE_PRODUCT, UPDATE_FIELD } from "./constants";
import { Product } from "./interfaces";

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
