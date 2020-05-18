import React, { useState } from "react";
import "./products-styles.scss";

import ProductSubheader from "../../product-subheader/product-subheader-component";
import ProductFilters from "../../product-filters/product-filters-component";
import ProductsCollection from "../../products-collection/products-collection-component";
import PRODUCT_DATA from "./product-data";

const Products = () => {
  const [collections, setCollections] = useState(PRODUCT_DATA);
  return (
    <div className="product-container">
      <ProductSubheader />
      <ProductFilters />
      <div className="products">
        {collections.map(({ items }) => (
          <ProductsCollection items={items} />
        ))}
      </div>
    </div>
  );
};

export default Products;
