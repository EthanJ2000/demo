import { combineReducers } from "redux";
import authReducer from "./auth/auth-reducer";
import dashboardReducer from "./dashboard/dashboard-reducer";
import filterReducer from "./filter/filter-reducer";
import dropdownReducer from "./dropdowns/dropdown-reducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  dashboard: dashboardReducer,
  filter: filterReducer,
  dropdown: dropdownReducer,
});
