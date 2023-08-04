import React from "react";
import TuitItem from "./tuit-item";
import { useSelector } from "react-redux";
import "./waterfall.css";

const TuitsList = () => {
  const { tuits } = useSelector((state) => state.tuits);

  return (
    <div className="waterfall">
      {tuits.map((tuit) => (
        <TuitItem key={tuit._id} tuit={tuit} />
      ))}
    </div>
  );
};

export default TuitsList;
