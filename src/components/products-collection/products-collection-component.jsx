import React from "react";
import { connect } from "react-redux";
import "./product-collection-styles.scss";
import ProductItem from "../product-item/product-item-component";

const ProductsCollection = ({ items, searchPhrase, filters }) => {
  return (
    <div className="product-preview-container">
      {renderItems(items, searchPhrase, filters)}
    </div>
  );
};

const renderItems = (items, searchPhrase, filters) => {
  const { productType, format, manufacturer, price, status } = filters;

  if (searchPhrase === "") {
    if (status || format || productType) {
      return (
        <div className="preview">
          {items
            .filter(
              (item) =>
                item.available === status ||
                item.format === format ||
                item.type === productType
            )
            .map((item) => (
              <ProductItem className="product-item" item={item} />
            ))}
        </div>
      );
    } else {
      return (
        <div className="preview">
          {items.map((item) => (
            <ProductItem className="product-item" item={item} />
          ))}
        </div>
      );
    }
  } else {
    return (
      <div className="preview">
        {items
          .filter((item) =>
            item.name.toLowerCase().includes(searchPhrase.toLowerCase())
          )
          .map((item) => (
            <ProductItem className="product-item" item={item} />
          ))}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    searchPhrase: state.filter.searchPhrase,
    filters: state.dropdown,
  };
};

export default connect(mapStateToProps)(ProductsCollection);
