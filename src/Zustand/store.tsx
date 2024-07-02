// store.ts
import { create } from "zustand";
import reducer from "./reducers";
import { ProductFormInitialState, ProductsState } from "./interfaces";

interface StoreState extends ProductsState {
  dispatch: (args: any) => void;
}

export const useStore = create<StoreState>((set) => ({
  ...ProductFormInitialState,
  dispatch: (args) => set((state) => reducer(state, args)),
}));
