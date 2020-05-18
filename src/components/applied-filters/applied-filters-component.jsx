import React from "react";
import { connect } from "react-redux";
import "./applied-filters-styles.scss";
import { GrFormClose } from "react-icons/gr";

const AppliedFilters = ({
  filters,
  removeType,
  removeFormat,
  removeManufacturer,
  removePrice,
  removeStatus,
}) => {
  const iterableFilters = Object.values(filters);

  const removeFilter = (filters, filter) => {
    console.log("removed :" + getKeyByValue(filters, filter));
    switch (getKeyByValue(filters, filter)) {
      case "productType":
        return removeType();
      case "format":
        return removeFormat();
      case "manufacturer":
        return removeManufacturer();
      case "price":
        return removePrice();
      case "status":
        return removeStatus();
      default:
        break;
    }
  };

  return (
    <div className="applied-filters-container">
      <hr />
      <p className="applied-filters-title">Applied Filters:</p>
      <div className="filters-display">
        {iterableFilters
          .filter((filter) => filter !== null && filter !== "Select")
          .map((filter) => {
            return (
              <p className="filter-item">
                {filter}
                <GrFormClose
                  className="close"
                  onClick={() => removeFilter(filters, filter)}
                />
              </p>
            );
          })}
      </div>
    </div>
  );
};

const getKeyByValue = (filters, filter) => {
  return Object.keys(filters).find((key) => filters[key] === filter);
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeType: () => {
      dispatch({ type: "remove_type" });
    },
    removeFormat: () => {
      dispatch({ type: "remove_format" });
    },
    removeManufacturer: () => {
      dispatch({ type: "remove_manufacturer" });
    },
    removePrice: () => {
      dispatch({ type: "remove_price" });
    },
    removeStatus: () => {
      dispatch({ type: "remove_status" });
    },
  };
};

const mapStateToProps = (state) => {
  return {
    filters: state.dropdown,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppliedFilters);
