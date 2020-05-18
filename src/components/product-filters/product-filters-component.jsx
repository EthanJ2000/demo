import React, { useState } from "react";
import { connect } from "react-redux";
import "./product-filters-styles.scss";
import AppliedFilters from "../applied-filters/applied-filters-component";
import { Button, Input, Label } from "reactstrap";

const ProductFilters = ({
  productType,
  format,
  manufacturer,
  price,
  status,
  setType,
  setFormat,
  setManufacturer,
  setPrice,
  setStatus,
}) => {
  const [typeFilter, setTypeFilter] = useState("");
  const [formatFilter, setFormatFilter] = useState("");
  const [manufacturerFilter, setManufacturerFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [isReset, setIsReset] = useState(false);

  const applyFilters = () => {
    setIsReset(!isReset);
    if (typeFilter !== "" && typeFilter !== "Select") {
      setTypeFilter("");
      setType(typeFilter);
    }
    if (formatFilter !== "" && formatFilter !== "Select") {
      setFormatFilter("");
      setFormat(formatFilter);
    }
    if (manufacturerFilter !== "" && manufacturerFilter !== "Select") {
      setManufacturerFilter("");
      setManufacturer(manufacturerFilter);
    }
    if (priceFilter !== "" && priceFilter !== "Select") {
      setPriceFilter("");
      setPrice(priceFilter);
    }
    if (statusFilter !== "" && statusFilter !== "Select") {
      setStatusFilter("");
      setStatus(statusFilter);
    }
  };

  return (
    <div className="product-filters">
      <div className="dropdown-container">
        <div className="type">
          <Label for="exampleSelect">Type</Label>
          <Input
            type="select"
            name="select"
            className="dropdown"
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option selected={isReset}>Select</option>
            <option>High THC | Low CBD</option>
            <option>Low THC | High CBD</option>
            <option>Balanced 1:1</option>
          </Input>
        </div>
        <div className="format">
          <Label for="exampleSelect">Format</Label>
          <Input
            type="select"
            name="select"
            className="dropdown"
            onChange={(e) => setFormatFilter(e.target.value)}
          >
            <option selected={isReset}>Select</option>
            <option>Oils</option>
            <option>Sprays</option>
            <option>Capsules</option>
            <option>Vape</option>
            <option>Flower</option>
            <option>Suppository</option>
            <option>Strips</option>
          </Input>
        </div>
        <div className="manufacturer">
          <Label for="exampleSelect">Manufacturer</Label>
          <Input
            type="select"
            name="select"
            className="dropdown"
            onChange={(e) => setManufacturerFilter(e.target.value)}
          >
            <option selected={isReset}>Select</option>
            <option>TGOD</option>
            <option>Aurora</option>
            <option>Hexo</option>
            <option>Emerald</option>
          </Input>
        </div>
        <div className="price">
          <Label for="exampleSelect">Price</Label>
          <Input
            type="select"
            name="select"
            className="dropdown"
            onChange={(e) => setPriceFilter(e.target.value)}
          >
            <option selected={isReset}>Select</option>
            <option>Low to High</option>
            <option>High to Low</option>
          </Input>
        </div>
        <div className="status">
          <Label for="exampleSelect">Status</Label>
          <Input
            type="select"
            name="select"
            className="dropdown"
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option selected={isReset}>Select</option>
            <option>Available</option>
            <option>Out of Stock</option>
          </Input>
          <Button
            color="secondary"
            className="apply-filter-button"
            onClick={() => applyFilters()}
          >
            Apply Filter
          </Button>
        </div>
      </div>
      {productType || format || manufacturer || price || status ? (
        <AppliedFilters />
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    productType: state.dropdown.productType,
    format: state.dropdown.format,
    manufacturer: state.dropdown.manufacturer,
    price: state.dropdown.price,
    status: state.dropdown.status,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setType: (productType) => {
      dispatch({ type: "set_type", productType });
    },
    setFormat: (format) => {
      dispatch({ type: "set_format", format });
    },
    setManufacturer: (manufacturer) => {
      dispatch({ type: "set_manufacturer", manufacturer });
    },
    setPrice: (price) => {
      dispatch({ type: "set_price", price });
    },
    setStatus: (status) => {
      dispatch({ type: "set_status", status });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductFilters);
