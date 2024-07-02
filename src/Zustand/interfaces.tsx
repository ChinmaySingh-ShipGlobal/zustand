export interface Product {
  prodName: string;
  cost: string;
  quantity: string;
  units: string;
}

export interface ProductsState {
  productForm: Product[];
}

export const ProductFormInitialState: ProductsState = {
  productForm: [{ prodName: "", cost: "", quantity: "", units: "" }],
};
