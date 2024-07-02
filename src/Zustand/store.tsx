import { create } from "zustand";
import reducer from "./reducers";
import { Product } from "./interfaces";
import { Action, Actions } from "./actions";

export type StoreState = {
  productForm: Product[];
};

const initialProduct: Product[] = [
  { prodName: "", cost: "", quantity: "", units: "" },
];

export const useStore = create<StoreState & Actions>((set) => ({
  productForm: initialProduct,
  dispatch: (action: Action) => set((state) => reducer(state, action)),
}));
