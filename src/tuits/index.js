import React, { useEffect } from "react";
import TuitItem from "./tuit-item";
import "./waterfall.css";
import { findTuitsThunk } from "../services/tuits-thunks";
import { useDispatch, useSelector } from "react-redux";

const TuitsList = () => {
  const { tuits, loading } = useSelector(state => state.tuits)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])

  return (
    <ul className="list-group">
      {loading &&
        <li className="list-group-item">
          Loading...
        </li>
      }

      <div className="waterfall">
        {tuits.map((tuit) => (
          <TuitItem key={tuit._id} tuit={tuit} />
        ))}
      </div>
    </ul>
  );
};

export default TuitsList;
