import React from "react";
import Wish from "../../atoms/wish";
import Button from "../../atoms/button";
import ProductDescription from "../../atoms/product-description";
import Picture from "../../atoms/picture";
import Typography from "../../atoms/typography";

interface ProductCardProps {
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
  imageSrc: string;
}

const ProductCard: React.FC<ProductCardProps> = (props) => {
  const { product } = props;
  return (
    <div>
      <Picture imageSrc={product.imageSrc} maxWidth="300px" />
      <Wish>ss22</Wish>

      <Typography style={{ color: "#f00", textDecoration: "line-through" }}>
        abcd
      </Typography>
      <Button>teste</Button>
    </div>
  );
};

export default ProductCard;
