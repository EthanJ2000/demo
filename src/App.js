import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { fire, db } from "../src/firebase/firebase";

//Pages
import LoginRegisterPage from "./pages/login-register/login-register-component";
import Homepage from "./pages/homepage/homepage-component";

function App({ isAuthenticated, setAccountHolder }) {
  return <div>{renderScreen(isAuthenticated, setAccountHolder)}</div>;
}

const renderScreen = (isAuthenticated, setAccountHolder) => {
  if (isAuthenticated) {
    const user = fire.auth().currentUser;
    if (user) {
      getDisplayName(user.email, setAccountHolder);
    }
    return <Homepage />;
  } else {
    return <LoginRegisterPage />;
  }
};

const getDisplayName = (email, setAccountHolder) => {
  db.collection(email)
    .doc("profile")
    .get()
    .then((doc) => {
      setAccountHolder(doc.data().name);
    });
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAccountHolder: (name) => {
      dispatch({ type: "set_account_holder", name });
    },
  };
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
