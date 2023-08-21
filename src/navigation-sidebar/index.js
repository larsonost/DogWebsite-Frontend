import React, { useEffect } from "react";
import PreviewTuit from "./preview-tuit/preview-tuit";
import { Link, useLocation } from "react-router-dom";
import { findTuitsThunk } from "../services/tuits-thunks";
import { useDispatch, useSelector } from "react-redux";
import logo from "../images/logo-new.png";

function NavigationSidebar() {
      const { currentUser } = useSelector((state) => state.user);
      const { tuits, loading } = useSelector(state => state.tuits)
      console.log(tuits)
      const { pathname } = useLocation();
      const [ignore, active] = pathname.split("/");
      //console.log(userTuits)
      // Snippet given by chatGPT to find the active link
      const activeLink = (linkPath) => {
            return pathname.startsWith(linkPath);
      };
      const toggleTheme = () => {
            document.body.classList.toggle("dark-mode");
      };
      if (currentUser) {
            console.log("THIS USER")
            console.log(currentUser)
      }
      const getRole = (user) => {
            if (user && user.data && user.data.role) {
                  return user.data.role;
            } else if (user && user.role) {
                  return user.role;
            }
            return null;
      };

      const userRole = getRole(currentUser);

      return (
            <div className="container">
                  <div className="row">
                        <div>
                              <img
                                    id="logo"
                                    src={logo}
                                    alt="logo"
                                    className="logo img-fluid rounded-circle"
                                    onClick={toggleTheme}
                              />
                              {/* made the size of the image fluid, so it won't overflow when the screen is small */}
                        </div>
                  </div>
                  <br />
                  <div className="row">
                        <div className="col-12">
                              <div className="list-group">
                                    <Link className={`list-group-item ${activeLink("/../home") ? "active" : ""}`}
                                          to="/../home"> Home </Link>
                                    <Link className={`list-group-item ${activeLink("/../search") ? "active" : ""}`}
                                          to="/../search"> Search </Link>
                                    {!currentUser && <Link className={`list-group-item ${activeLink("/../login") ? "active" : ""}`}
                                          to="/../login"> Login </Link>}
                                    {!currentUser && <Link className={`list-group-item ${activeLink("/../register") ? "active" : ""}`}
                                          to="/../register"> Register </Link>}
                                    {currentUser && <Link className={`list-group-item ${activeLink("/../profile") ? "active" : ""}`}
                                          to="/../profile"> Profile </Link>}
                                    {userRole === "Specialist" && (
                                          <Link
                                                className={`list-group-item ${activeLink("/../client") ? "active" : ""}`}
                                                to="/../client"
                                          >
                                                Client View
                                          </Link>
                                    )}
                                    {userRole === "Merchant" && (
                                          <Link
                                                className={`list-group-item ${activeLink("/../competition") ? "active" : ""}`}
                                                to="/../competition"
                                          >
                                                Competition
                                          </Link>
                                    )}
                              </div>
                        </div>
                  </div>
                  <br />
                  {pathname.endsWith("/home") &&
                        currentUser?.data?.username &&
                        [...tuits].reverse().filter(tuit => tuit.username === currentUser.data.username).length > 0 && (
                              <div className="d-flex justify-content-center align-items-center">
                                    <b>Your recent posts!</b>
                              </div>
                        )
                  }



                  {
                        pathname.endsWith("/home") &&
                        <div className="row mt-3">
                              <div className="col-12">

                                    <ul className="list-group">
                                          {loading &&
                                                <li className="list-group-item">
                                                      Loading...
                                                </li>
                                          }
                                          <div>
                                                {
                                                      currentUser && [...tuits].reverse().filter(tuit => tuit.username === currentUser.data.username).map((tuit) => {
                                                            return <PreviewTuit key={tuit._id} tuit={tuit} />;

                                                      })
                                                }
                                          </div>
                                    </ul>
                              </div>
                        </div>
                  }
            </div>
      );
};

export default NavigationSidebar;