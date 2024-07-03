import React from "react";
import { Product } from "@/zustand/interfaces";

interface Props {
  product: Product;
  index: number;
  onUpdateField: (index: number, field: keyof Product, value: string) => void;
  onRemoveProduct: (index: number) => void;
}

const ProductItem: React.FC<Props> = ({
  product,
  index,
  onUpdateField,
  onRemoveProduct,
}) => {
  const handleInputChange = (
    field: keyof Product,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    onUpdateField(index, field, e.target.value);
  };

  return (
    <div className="flex flex-row space-x-2 items-center">
      <input
        type="text"
        value={product.prodName}
        onChange={(e) => handleInputChange("prodName", e)}
        placeholder="Product Name"
        className="border p-1"
        required
      />
      <input
        type="text"
        value={product.cost}
        onChange={(e) => handleInputChange("cost", e)}
        placeholder="Cost"
        className="border p-1"
        required
      />
      <input
        type="text"
        value={product.quantity}
        onChange={(e) => handleInputChange("quantity", e)}
        placeholder="Quantity"
        className="border p-1"
        required
      />
      <input
        type="text"
        value={product.units}
        onChange={(e) => handleInputChange("units", e)}
        placeholder="Units"
        className="border p-1"
        required
      />
      <button
        onClick={() => onRemoveProduct(index)}
        className="bg-blue px-2 py-1 rounded-md"
      >
        Remove
      </button>
    </div>
  );
};

export default ProductItem;
