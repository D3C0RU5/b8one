import React from "react";
import ProductCard from "../../molecules/product-card";
import { Row, Container } from "./styles";

interface ProductListProps {
  products: Product[];
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

const ProductList: React.FC<ProductListProps> = (props) => {
  const { products } = props;

  return (
    <Row>
      {products.map((p) => (
        <Container>
          <ProductCard product={p}></ProductCard>
        </Container>
      ))}
    </Row>
  );
};

export default ProductList;
