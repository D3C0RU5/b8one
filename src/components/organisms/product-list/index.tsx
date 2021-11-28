import React from "react";
import ProductCard from "../../molecules/product-card";
import { Product } from "../../../types";
import { Section } from "./styles";

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <Section>
      <div className="container">
        <div className="row App">
          {products.map((p, i) => (
            <div key={i} className="col-md-6 col-lg-4">
              <ProductCard product={p}></ProductCard>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ProductList;
