import { create } from "zustand";
import reducer from "./reducers";
import { ProductFormInitialState, ProductsState } from "./interfaces";
import { Action, Actions } from "./actions";

export const useStore = create<ProductsState & Actions>((set) => ({
  productForm: ProductFormInitialState.productForm,
  dispatch: (action: Action) => set((state) => reducer(state, action)),
}));
