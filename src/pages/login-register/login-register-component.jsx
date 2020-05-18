import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./login-register-styles.scss";
import logo from "../../assets/logo.png";
import lottie from "lottie-web";

import Login from "../../components/login/login-component";
import Register from "../../components/register/register-component";

const LoginRegisterPage = ({ activeScreen }) => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.getElementById("animation"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "https://assets1.lottiefiles.com/packages/lf20_CYDpRF.json",
    });
  }, []);

  const renderScreen = () => {
    switch (activeScreen) {
      case "Login":
        return <Login />;
      case "Register":
        return <Register />;
      default:
        break;
    }
  };

  return (
    <div className="login-register-page-container">
      <div className="placeholder">
        <div id="animation" />
      </div>
      <div className="login-register">
        <img
          src={logo}
          className="logo"
          alt="logo"
          style={{ cursor: "pointer" }}
        />
        <div className="login-register-form">{renderScreen()}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    activeScreen: state.auth.activeScreen,
  };
};

export default connect(mapStateToProps)(LoginRegisterPage);
