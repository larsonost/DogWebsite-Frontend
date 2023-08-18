import React from "react";
import { useDispatch } from "react-redux";
import { FaTwitter, FaCheck, FaTimes } from "react-icons/fa";
import TuitStats from "../tuit-stats";
import "./tuit-item.css";
import {deleteTuitThunk} from "../../services/tuits-thunks"
import "bootstrap/dist/css/bootstrap.min.css";

const MerchantTuit = ({ tuit }) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
}
const USERNAME = tuit.username
  return (
    <div className="tuit-item bg-primary">
      <li className="list-group-item bg-primary">
      <div className="row">
          <div className="col-1">
          </div>
          <div className="col-10">
            <div className="fs-6">
              <b>{USERNAME}</b>-{tuit.role} 
            </div>
            <div className="fs-5">
              <b>{tuit.title} </b>
            </div>
            <div >
              {tuit.tuit}
            </div>
            <div className="row-padding">
              <TuitStats tuit={tuit} />
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};
export default MerchantTuit;
