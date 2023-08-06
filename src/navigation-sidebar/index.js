import React from "react";
import "./nav.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo.png";

const NavigationSidebar = () => {
  const { pathname } = useLocation();
  const active = pathname.split("/")[1]; // Get the first part of the pathname

  const navItems = [
    { link: "home", text: "Home", icon: "fa-home" },
    { link: "other", text: "Other", icon: "fa-ellipsis-h" },
  ];

  return (
    <div>
      <div>
        <img src={logo} alt="logo" className="img-fluid rounded-circle" />
        {/* made the size of the image fluid, so it won't overflow when the screen is small */}
      </div>
      <br />
      <div className="list-group">
        {navItems.map((item) => (
          <Link
            to={`/${item.link}`}
            className={`list-group-item list-group-item-action text-center text-capitalize ${
              active === item.link ? "active" : ""
            }`}
          >
            <i className={`fas ${item.icon} d-inline-block d-md-none`}></i>
            <span className="d-none d-md-inline-block">{item.text}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavigationSidebar;
