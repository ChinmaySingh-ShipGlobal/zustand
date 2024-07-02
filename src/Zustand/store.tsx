// store.ts
import { create } from "zustand";
import reducer from "./reducers";
// import { ProductFormInitialState, ProductsState } from "./interfaces";
import { Action, Actions } from "./actions";
import { Product } from "./interfaces";

export type StoreState = {
  productForm: Product[];
};

export const ProductFormInitialState: StoreState = {
  productForm: [{ prodName: "", cost: "", quantity: "", units: "" }],
};

export const useStore = create<StoreState & Actions>((set) => ({
  productForm,
  dispatch: (action: Action) => set((state) => reducer(state, action)),
}));
