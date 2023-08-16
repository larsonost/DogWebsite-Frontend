import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

function NavigationSidebar() {
      const { currentUser } = useSelector((state) => state.user);
      const { pathname } = useLocation();
      const [ignore, active] = pathname.split("/");

      // Snippet given by chatGPT to find the active link
      const activeLink = (linkPath) => {
            return pathname.startsWith(linkPath);
      };

      return (
            <div className="list-group">
                  <Link className={`list-group-item ${activeLink("/../home") ? "active" : ""}`}
                        to="/../home"> Home </Link>
                  <Link className={`list-group-item ${activeLink("/../search") ? "active" : ""}`}
                        to="/../search"> Explore </Link>
                  <Link className={`list-group-item ${activeLink("/../details") ? "active" : ""}`}
                        to="/../details"> Notifications </Link>
                  {!currentUser && <Link className={`list-group-item ${activeLink("/../login") ? "active" : ""}`}
                        to="/../login"> Login </Link>}
                  {!currentUser && <Link className={`list-group-item ${activeLink("/../register") ? "active" : ""}`}
                        to="/../register"> Register </Link>}
                  {currentUser && <Link className={`list-group-item ${activeLink("/../profile") ? "active" : ""}`}
                        to="/../profile"> Profile </Link>}
            </div>
      );
};

export default NavigationSidebar;