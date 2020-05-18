import React from "react";
import "./App.css";
import { connect } from "react-redux";

//Pages
import LoginRegisterPage from "./pages/login-register/login-register-component";
import Homepage from "./pages/homepage/homepage-component";

function App({ isAuthenticated }) {
  return <div>{renderScreen(isAuthenticated)}</div>;
}

const renderScreen = (isAuthenticated) => {
  if (isAuthenticated) {
    return <Homepage />;
  } else {
    return <LoginRegisterPage />;
  }
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps)(App);
