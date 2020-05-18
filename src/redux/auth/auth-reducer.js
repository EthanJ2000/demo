const initialState = {
  activeScreen: "Login",
  isAuthenticated: false,
  accountHolder: "Ethan",
};

const authReducer = (authState = initialState, action) => {
  switch (action.type) {
    case "switch_screen":
      return { ...authState, activeScreen: action.screen };
    case "set_auth_status":
      return { ...authState, isAuthenticated: action.authenticated };
    case "set_account_holder":
      return { ...authState, accountHolder: action.name };
    default:
      return authState;
  }
};

export default authReducer;
