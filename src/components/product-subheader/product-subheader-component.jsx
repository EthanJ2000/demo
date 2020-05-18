import React from "react";
import "./product-subheader-styles.scss";
import { connect } from "react-redux";
import { Button, Input, CustomInput } from "reactstrap";

const ProductSubheader = ({ showPrices, togglePrice, updateSearch }) => {
  return (
    <div className="product-subheader">
      <h1 className="title">Products</h1>
      <div className="product-subheader-filters">
        <Button color="secondary" className="add-button">
          + Add Product
        </Button>

        <Input
          type="search"
          name="search"
          className="searchbar"
          placeholder="Search"
          onChange={(e) => updateSearch(e.target.value)}
        />

        <div className="switch-container">
          <CustomInput
            type="switch"
            id="showPriceSwitch"
            bsSize="lg"
            checked={showPrices}
            onClick={() => togglePrice(showPrices)}
          />
          <p className="switch-label">Show Price</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    showPrices: state.filter.showPrices,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    togglePrice: (showPrices) => {
      dispatch({ type: "set_show_prices", showPrices: !showPrices });
    },
    updateSearch: (text) => {
      dispatch({ type: "set_search_phrase", searchPhrase: text });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductSubheader);
