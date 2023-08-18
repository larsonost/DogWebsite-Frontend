import React, { useEffect } from "react";
import TuitItem from "../tuits/tuit-items/tuit-item";
import OwnerTuit from '../tuits/tuit-items/owner-item';
import MerchantTuit from '../tuits/tuit-items/merchant-item';
import SpecialistTuit from '../tuits/tuit-items/specialist-item';
import { Link, useLocation } from "react-router-dom";
import { findTuitsThunk } from "../services/tuits-thunks";
import { useDispatch, useSelector } from "react-redux";

function NavigationSidebar() {
      const { currentUser } = useSelector((state) => state.user);
      const { tuits, loading } = useSelector(state => state.tuits)
      console.log(tuits)
      const { pathname } = useLocation();
      const [ignore, active] = pathname.split("/");
      console.log("logged in username:")
      if (currentUser) {
            console.log(currentUser.data.username);
      }
      //console.log(userTuits)
      // Snippet given by chatGPT to find the active link
      const activeLink = (linkPath) => {
            return pathname.startsWith(linkPath);
      };

      return (
            <div className="container">
                  <div className="row">
                        <div className="col-12">
                              <div className="list-group">
                                    <Link className={`list-group-item ${activeLink("/../home") ? "active" : ""}`}
                                          to="/../home"> Home </Link>
                                    <Link className={`list-group-item ${activeLink("/../search") ? "active" : ""}`}
                                          to="/../search"> Search </Link>
                                    <Link className={`list-group-item ${activeLink("/../details") ? "active" : ""}`}
                                          to="/../details"> Details </Link>
                                    {!currentUser && <Link className={`list-group-item ${activeLink("/../login") ? "active" : ""}`}
                                          to="/../login"> Login </Link>}
                                    {!currentUser && <Link className={`list-group-item ${activeLink("/../register") ? "active" : ""}`}
                                          to="/../register"> Register </Link>}
                                    {currentUser && <Link className={`list-group-item ${activeLink("/../profile") ? "active" : ""}`}
                                          to="/../profile"> Profile </Link>}
                              </div>
                        </div>
                  </div>
                  <div className="row mt-3">  {/* Add margin-top for spacing */}
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
                                                      console.log(tuit.role);
                                                      switch (tuit.role) {
                                                            case 'owner':
                                                            case 'Owner':
                                                                  return <OwnerTuit key={tuit._id} tuit={tuit} />
                                                            case 'merchant':
                                                            case 'Merchant':
                                                                  return <MerchantTuit key={tuit._id} tuit={tuit} />
                                                            case 'specialist':
                                                            case 'Specialist':
                                                                  return <SpecialistTuit key={tuit._id} tuit={tuit} />
                                                            default:
                                                                  return <TuitItem key={tuit._id} tuit={tuit} />
                                                      }
                                                })
                                          }
                                    </div>
                              </ul>
                        </div>
                  </div>
            </div>
      );
};

export default NavigationSidebar;