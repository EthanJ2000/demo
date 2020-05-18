import React, { useState } from "react";
import "./homepage-styles.scss";
import { connect } from "react-redux";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Sidebar from "../../components/sidebar/sidebar-component";

//Screens
import Dashboard from "../../components/screens/dashboard/dashboard-component";
import Doctors from "../../components/screens/doctors/doctors-component";
import Products from "../../components/screens/products/products-component";
import Manufacturers from "../../components/screens/manufacturers/manufacturers-component";
import Importers from "../../components/screens/importers/importers-component";
import Applications from "../../components/screens/applications/applications-component";

const Homepage = ({ activeScreen, logout, accountHolder }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <div>
      <div className="home-header ">
        <Dropdown
          isOpen={dropdownOpen}
          toggle={toggle}
          className="account-holder"
        >
          <DropdownToggle caret color="transparent" className="dropdown">
            {accountHolder}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>My Profile</DropdownItem>
            <DropdownItem onClick={() => logout()}>Logout</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <Sidebar />
      {renderScreen(activeScreen)}
    </div>
  );
};

const renderScreen = (screen) => {
  switch (screen) {
    case "Dashboard":
      return <Dashboard />;
    case "Doctors":
      return <Doctors />;
    case "Products":
      return <Products />;
    case "Manufacturers":
      return <Manufacturers />;
    case "Importers":
      return <Importers />;
    case "Applications":
      return <Applications />;
    default:
      return;
  }
};

const mapStateToProps = (state) => {
  return {
    activeScreen: state.dashboard.dashboardScreen,
    accountHolder: state.auth.accountHolder,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch({ type: "set_auth_status", authenticated: false });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
