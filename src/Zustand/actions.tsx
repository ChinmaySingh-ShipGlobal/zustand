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

export type Actions = {
  addProduct: (newProduct: Product) => void;
  removeProduct: (index: number) => void;
  updateField: (index: number, field: keyof Product, value: string) => void;
};

export type Action = {
  type: keyof Actions;
  newProduct: Product;
  index: number;
  field: keyof Product;
  value: string;
};
