import React from "react";
import "./sidebar-styles.scss";
import logo from "../../assets/logo.png";
import { connect } from "react-redux";
import { MdDashboard } from "react-icons/md";
import { GiDoctorFace, GiMedicines, GiFactory } from "react-icons/gi";
import { FaTruckMoving, FaFileContract } from "react-icons/fa";

const Sidebar = ({ activeScreen, switchScreen }) => {
  return (
    <div className="sidebar-container">
      <img src={logo} alt="Logo" className="logo" />
      <p
        className={`menu-item ${activeScreen === "Dashboard" ? "active" : ""}`}
        onClick={() => switchScreen("Dashboard")}
      >
        <MdDashboard className="icon" />
        Dashboard
      </p>
      <p
        className={`menu-item ${activeScreen === "Doctors" ? "active" : ""}`}
        onClick={() => switchScreen("Doctors")}
      >
        <GiDoctorFace className="icon" />
        Doctors
      </p>
      <p
        className={`menu-item ${activeScreen === "Products" ? "active" : ""}`}
        onClick={() => switchScreen("Products")}
      >
        <GiMedicines className="icon" />
        Products
      </p>
      <p
        className={`menu-item ${
          activeScreen === "Manufacturers" ? "active" : ""
        }`}
        onClick={() => switchScreen("Manufacturers")}
      >
        <GiFactory className="icon" />
        Manufacturers
      </p>
      <p
        className={`menu-item ${activeScreen === "Importers" ? "active" : ""}`}
        onClick={() => switchScreen("Importers")}
      >
        <FaTruckMoving className="icon" />
        Importers
      </p>
      <p
        className={`menu-item ${
          activeScreen === "Applications" ? "active" : ""
        }`}
        onClick={() => switchScreen("Applications")}
      >
        <FaFileContract className="icon" />
        Applications
      </p>
      <div className="sidebar-footer">
        <p className="footer-item">Privacy Policy</p>
        <p className="footer-item">Terms & Conditions</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    activeScreen: state.dashboard.dashboardScreen,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    switchScreen: (screen) => {
      dispatch({ type: "switch_dashboard_screen", screen: screen });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
