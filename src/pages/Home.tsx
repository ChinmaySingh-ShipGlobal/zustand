// Home.tsx
import React from "react";
import { useStore } from "@/zustand/store";
import { Product } from "@/zustand/interfaces";
import { addProduct, removeProduct, updateField } from "@/zustand/actions";
import ProductItem from "@/PageComponents/ProductItem";

const Home: React.FC = () => {
  const { productForm } = useStore((state) => state);
  const dispatch = useStore((state) => state.dispatch);

  const handleAddProduct = () => {
    dispatch(
      addProduct({
        prodName: "",
        cost: "",
        quantity: "",
        units: "",
      })
    );
    console.log(productForm);
  };

  const handleRemoveProduct = (index: number) => {
    dispatch(removeProduct(index));
  };

  const handleUpdateField = (
    index: number,
    field: keyof Product,
    value: string
  ) => {
    dispatch(updateField(index, field, value));
  };

  return (
    <div className="max-w-screen-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      {productForm.map((product, index) => (
        <div key={index} className="bg-white shadow-md rounded-md p-4 mb-4">
          <ProductItem
            product={product}
            index={index}
            onUpdateField={handleUpdateField}
            onRemoveProduct={handleRemoveProduct}
          />
        </div>
      ))}
      <button
        className="bg-blue text-white px-4 py-2 rounded-md"
        onClick={handleAddProduct}
      >
        Add Product
      </button>
    </div>
  );
};

export default Home;
