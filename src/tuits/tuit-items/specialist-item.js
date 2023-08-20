import React from "react";
import { useDispatch } from "react-redux";
import { FaTwitter, FaCheck, FaTimes, FaPaw } from "react-icons/fa";
import TuitStats from "../tuit-stats";
import "./tuit-item.css";
import { deleteTuitThunk } from "../../services/tuits-thunks"
import "bootstrap/dist/css/bootstrap.min.css";

const SpecialistTuit = ({ tuit }) => {
  const dispatch = useDispatch();
  console.log(tuit.firstname)
  const USERNAME = tuit.username
  return (
    <div className="tuit-item border rounded p-3 my-2" style={{ backgroundColor: 'rgba(255, 200, 200, 1)' }}>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
        <FaPaw style={{ marginRight: '10px' }} />
          <h5 className="mb-0">{tuit.username}</h5>
          <span className="ml-2 badge badge-custom">{tuit.role}</span>
        </div>
        <small className="text-muted">{tuit.time}</small>
      </div>
      <h6 className="mt-2">{tuit.title}</h6>
      <p>{tuit.tuit}</p>
      <hr />
      
      <div className="d-flex justify-content-between align-items-center">
        <span>
          <strong>Service:</strong> {tuit.service} 
        </span>
        <span>
          <strong>For:</strong> {tuit.dogBreedTarget} 
        </span>
      </div>
      <hr />
      <b>Special Note: </b> {tuit.interest}
      
      <div className="mt-3">
        <TuitStats tuit={tuit} />
      </div>
    </div>
  );
  /*
  return (
    <div className="tuit-item bg-danger">
      <li className="list-group-item bg-danger">
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
export default SpecialistTuit;
