const initialState = {
  showPrices: true,
  searchPhrase: "",
};

const filterReducer = (filterState = initialState, action) => {
  switch (action.type) {
    case "set_show_prices":
      return { ...filterState, showPrices: action.showPrices };
    case "set_search_phrase":
      return { ...filterState, searchPhrase: action.searchPhrase };
    default:
      return filterState;
  }
};

export default filterReducer;
