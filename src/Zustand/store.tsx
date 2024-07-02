import { create } from "zustand";
import reducer from "./reducers";
import { Product } from "./interfaces";
import { Action } from "./actions";

export type StoreState = {
  productForm: Product[];
};

const initialProduct: Product[] = [
  { prodName: "", cost: "", quantity: "", units: "" },
];

export const useStore = create<StoreState>((set) => ({
  productForm: initialProduct,
  dispatch: (action: Action) => set((state) => reducer(state, action)),
}));
