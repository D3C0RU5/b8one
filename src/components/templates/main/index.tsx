import React from "react";

import ProductList from "../../organisms/product-list";
import Footer from "../../organisms/footer";

import products from "../../../feed/products";

const MainTemplate: React.FC = () => {
  return (
    <div>
      <ProductList products={products} />
      <Footer />
    </div>
  );
};

export default MainTemplate;
