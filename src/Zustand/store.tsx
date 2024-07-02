import { create } from "zustand";
import { Product, ProductsState, ProductFormInitialState } from "./interfaces";

interface StoreState extends ProductsState {
  addProduct: (product: Product) => void;
  removeProduct: (index: number) => void;
  updateField: (index: number, field: keyof Product, value: string) => void;
}

export const useStore = create<StoreState>((set) => ({
  productForm: ProductFormInitialState.productForm,

  addProduct: (product: Product) =>
    set((state) => ({
      productForm: [...state.productForm, product],
    })),

  removeProduct: (index: number) =>
    set((state) => ({
      productForm: state.productForm.filter((_, i) => i !== index),
    })),

  updateField: (index: number, field: keyof Product, value: string) =>
    set((state) => ({
      productForm: state.productForm.map((product, i) =>
        i === index ? { ...product, [field]: value } : product
      ),
    })),
}));
