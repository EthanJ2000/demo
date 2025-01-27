import React, { useState } from "react";
import "./register-styles.scss";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input, Col, Row } from "reactstrap";
import { fire, db } from "../../firebase/firebase";

const Register = ({ switchScreen, authenticate }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const onFormSubmit = () => {
    if (password === confirmPassword) {
      if (isChecked) {
        register();
      } else {
        alert("Please check the box.");
      }
    } else {
      alert("The passwords do not match.");
    }
  };

  const register = () => {
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(authenticate())
      .then(
        db.collection(email).doc("profile").set({
          name,
          surname,
        })
      )
      .catch((err) => alert(err));
  };

  const onLoginClicked = () => {
    switchScreen();
  };

  return (
    <div className="register-container">
      <h1 className="register-title">Register Today</h1>
      <p className="register-subtitle">
        We're glad you're joininging Africann! Let's get started:
      </p>

      <Form className="register-form-container">
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="name" className="input-label">
                Name
              </Label>
              <Input
                className="register-inputs"
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="surname" className="input-label">
                Surname
              </Label>
              <Input
                className="register-inputs"
                type="text"
                name="surname"
                id="surname"
                placeholder="Your surname"
                required
                onChange={(e) => setSurname(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="email" className="input-label">
            Email
          </Label>
          <Input
            className="register-inputs"
            type="email"
            name="email"
            id="email"
            placeholder="email@email.com"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password" className="input-label">
            Password
          </Label>
          <Input
            className="register-inputs"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="confirmPassword" className="input-label">
            Confirm Password
          </Label>
          <Input
            className="register-inputs"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </FormGroup>
        <Label check className="tc-checkbox">
          <Input type="checkbox" onClick={() => setIsChecked(!isChecked)} /> I
          agree to the&nbsp;
          <p style={{ textDecoration: "underline", cursor: "pointer" }}>
            Terms & Conditions
          </p>{" "}
          &nbsp;and the&nbsp;
          <p style={{ textDecoration: "underline", cursor: "pointer" }}>
            Privacy Policy
          </p>
        </Label>
        <Button
          className="login-button"
          style={{ backgroundColor: "#54006E" }}
          size="lg"
          block
          onClick={() => onFormSubmit()}
        >
          Register
        </Button>
        <p
          style={{
            fontSize: "1vw",
            display: "flex",
            justifyContent: "center",
            marginTop: "3vh",
          }}
        >
          Already have an account?
          <p
            style={{ cursor: "pointer", fontWeight: 600 }}
            onClick={() => onLoginClicked()}
          >
            &nbsp;Log In
          </p>
        </p>
      </Form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    switchScreen: () => {
      dispatch({ type: "switch_screen", screen: "Login" });
    },
    authenticate: () => {
      dispatch({ type: "set_auth_status", authenticated: true });
    },
    setAccountHolder: (name) => {
      dispatch({ type: "set_account_holder", name });
    },
  };
};

export default connect(null, mapDispatchToProps)(Register);
