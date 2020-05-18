import React, { useEffect, useState } from "react";
import "./login-styles.scss";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input, InputGroup } from "reactstrap";
import { fire } from "../../firebase/firebase";

const Login = ({ switchScreen, setAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setAuth();
      }
    });
  }, []);

  const onFormSubmit = () => {
    if (email !== "" && password !== "") {
      fire
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch((err) => alert(err));
    } else {
      alert("Please fill in all of your details");
    }
  };

  const onRegisterClicked = () => {
    switchScreen();
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Welcome Back</h1>
      <p className="login-subtitle">Please log into your account below</p>

      <Form className="login-form-container">
        <FormGroup>
          <Label className="input-label">Email</Label>
          <Input
            className="login-inputs"
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label className="input-label">Password</Label>
          <InputGroup>
            <Input
              className="login-inputs"
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </InputGroup>
        </FormGroup>
        <div className="form-footer-container">
          <Label check className="checkbox-label">
            <Input type="checkbox" /> Remember me
          </Label>
          <p className="forgot-password">Forgot Password?</p>
        </div>
        <Button
          className="login-button"
          style={{ backgroundColor: "#54006E" }}
          size="lg"
          block
          onClick={() => onFormSubmit()}
        >
          Log in
        </Button>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "3vh",
            fontSize: "1vw",
          }}
        >
          Don't have an account?
          <p
            style={{ cursor: "pointer", fontWeight: 600 }}
            onClick={() => onRegisterClicked()}
          >
            &nbsp;Register
          </p>
        </p>
      </Form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    switchScreen: () => {
      dispatch({ type: "switch_screen", screen: "Register" });
    },
    setAuth: () => {
      dispatch({ type: "set_auth_status", authenticated: true });
    },
  };
};

export default connect(null, mapDispatchToProps)(Login);
