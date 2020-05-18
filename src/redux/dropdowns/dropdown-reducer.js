const initialState = {
  productType: null,
  format: null,
  manufacturer: null,
  price: null,
  status: null,
};

const dropdownReducer = (dropdownState = initialState, action) => {
  switch (action.type) {
    case "set_type":
      return { ...dropdownState, productType: action.productType };
    case "remove_type":
      return { ...dropdownState, productType: null };
    case "set_format":
      return { ...dropdownState, format: action.format };
    case "remove_format":
      return { ...dropdownState, format: null };
    case "set_manufacturer":
      return { ...dropdownState, manufacturer: action.manufacturer };
    case "remove_manufacturer":
      return { ...dropdownState, manufacturer: null };
    case "set_price":
      return { ...dropdownState, price: action.price };
    case "remove_price":
      return { ...dropdownState, price: null };
    case "set_status":
      return { ...dropdownState, status: action.status };
    case "remove_status":
      return { ...dropdownState, status: null };
    default:
      return dropdownState;
  }
};

export default dropdownReducer;
