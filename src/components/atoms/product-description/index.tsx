import React from "react";

interface ProductDescriptionProps {
  product: Product;
}

interface Product {
  title: string;
  priceWithoutDiscount: Number;
  price: Number;
  parcel: {
    times: Number;
    value: Number;
  };
}

const ProductDescription: React.FC<ProductDescriptionProps> = (props) => {
  const { product } = props;
  return <div>{product.title}</div>;
};

export default ProductDescription;
