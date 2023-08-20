import React from "react";
import { useDispatch } from "react-redux";
import { FaTwitter, FaCheck, FaTimes, FaDog } from "react-icons/fa";
import TuitStats from "../tuit-stats";
import "./tuit-item.css";
import {deleteTuitThunk} from "../../services/tuits-thunks"
import "bootstrap/dist/css/bootstrap.min.css";

const OwnerTuit = ({ tuit }) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
}
const USERNAME = tuit.username
return (
  <div className="tuit-item-owner border rounded p-3 my-2" style={{ backgroundColor: 'rgba(255, 200, 200, 1)' }}>
    <div className="d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
      <FaDog style={{ marginRight: '10px' }} />
        <h5 className="mb-0">{tuit.username}</h5>
        <span className="ml-2 badge badge-custom">{tuit.role}</span>
      </div>
      
      <small className="text-muted">{tuit.time}</small>
      
    </div>
    <hr />
    <b>Seeking a {tuit.seekingrole} for my {tuit.selectedDogBreed}, {tuit.selectedDogName}</b>
    <hr />
    <h6 className="mt-2">{tuit.title}</h6>
    <p>{tuit.tuit}</p>
    
    <div className="mt-3">
      <TuitStats tuit={tuit} />
    </div>
  </div>
);
/*
  return (
    <div className="tuit-item bg-success">
      <li className="list-group-item bg-success">
      <div className="row">
          <div className="col-1">
          </div>
          <div className="col-10">
            <div className="fs-5">
            <FaCheck className="checkmark-icon" />{" "}
              <b>{USERNAME}</b> - {tuit.role} 
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
  */
};
export default OwnerTuit;
