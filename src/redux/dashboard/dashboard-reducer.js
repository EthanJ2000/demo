const initialState = {
  dashboardScreen: "Products",
};

const dashboardReducer = (dashboardState = initialState, action) => {
  switch (action.type) {
    case "switch_dashboard_screen":
      return { ...dashboardState, dashboardScreen: action.screen };
    default:
      return dashboardState;
  }
};

export default dashboardReducer;
