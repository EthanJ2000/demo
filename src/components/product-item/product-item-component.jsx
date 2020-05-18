import React from "react";
import "./product-item-styles.scss";
import { Button } from "reactstrap";
import { FiMoreVertical } from "react-icons/fi";
import { connect } from "react-redux";

const ProductItem = ({ item, showPrices }) => {
  const { name, subText, price, imageUrl, available } = item;
  return (
    <div className="product-item">
      <div className="icon-container">
        <FiMoreVertical className="more-icon" />
      </div>
      {available === "Out of Stock" ? renderOutofStock() : null}

      <img src={imageUrl} alt="product" className="product-image" />
      <p className="product-name">{name}</p>
      <p className="product-subtext">{subText}</p>
      {showPrices ? displayPrices(price) : null}
      <Button color="secondary" className="view-details">
        View Details
      </Button>
    </div>
  );
};

const displayPrices = (price) => {
  return <p className="product-price">{`R${price}`}</p>;
};

const renderOutofStock = () => {
  return (
    <div className="out-of-stock">
      <p>Out of Stock</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    showPrices: state.filter.showPrices,
  };
};

export default connect(mapStateToProps)(ProductItem);
