import React from "react";
import ProductList from "../../organisms/product-list";

import products from "../../../feed/products";

const MainTemplate: React.FC = () => {
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};

export default MainTemplate;
