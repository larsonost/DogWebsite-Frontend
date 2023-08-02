import React from "react";
import "./index.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../logo.jpg";

const NavigationSidebar = () => {
  const { pathname } = useLocation();
  const active = pathname.split("/")[1]; // Get the first part of the pathname

  const links = ["home", "other"];

  return (
    <div>
      <div>
        <img src={logo} width="250px" className="rounded-circle" />
      </div>
      <br />
      <div className="list-group">
        {links.map((link) => (
          <Link
            to={`/${link}`}
            className={`list-group-item list-group-item-action text-center text-capitalize ${
              active === link ? "active" : ""
            }`}
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavigationSidebar;