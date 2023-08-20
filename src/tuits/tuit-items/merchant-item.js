import React from "react";
import { useDispatch } from "react-redux";
import { FaTwitter, FaCheck, FaTimes, FaBone } from "react-icons/fa";
import TuitStats from "../tuit-stats";
import "./tuit-item.css";
import { deleteTuitThunk } from "../../services/tuits-thunks"
import "bootstrap/dist/css/bootstrap.min.css";

const MerchantTuit = ({ tuit }) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  }
  const USERNAME = tuit.username
  return (
    <div className="tuit-item-merchant border rounded p-3 my-2">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
        <FaBone style={{ marginRight: '10px' }} />
          <h5 className="mb-0">{tuit.username}</h5>
          <span className="ml-2 badge badge-custom">{tuit.role}</span>
        </div>
        <small className="text-muted">{tuit.time}</small>
      </div>
      <h6 className="mt-2">{tuit.title}</h6>
      <p>{tuit.tuit}</p>
      <hr />
      <b>Product Features: </b> {tuit.interest}
      
      <div className="mt-3">
        <TuitStats tuit={tuit} />
      </div>
    </div>
  );
};
export default MerchantTuit;
