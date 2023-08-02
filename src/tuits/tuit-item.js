import React from "react";
import { useDispatch } from "react-redux";
import { FaTwitter, FaCheck, FaTimes  } from 'react-icons/fa';
import TuitStats from "./tuit-stats";
import "./tuit-item.css";
import { deleteTuit } from "../reducers/tuits-reducer";
import 'bootstrap/dist/css/bootstrap.min.css';



const TuitItem = ({ tuit }) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img className="rounded-circle" height={48} src={`/images/${tuit.image}`} />
                </div>
                <div className="col-10">
                <div className="delete-button" onClick={() => deleteTuitHandler(tuit._id)}>
                    <FaTimes className="delete-icon" />
                </div>
                    <div><b>{tuit.userName}</b> <FaCheck className="checkmark-icon" /> {tuit.handle} · {tuit.time}</div>
                    <div>{tuit.tuit}</div>
                    <div className="row-padding"><TuitStats tuit={tuit} /></div>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;
