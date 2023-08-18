import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import "./preview-tuit.css"

const PreviewTuit = ({ tuit }) => {
  const dispatch = useDispatch();
  const [likesNum, setlikesNum] = useState(tuit.likes);
  const [dislikesNum, setdislikesNum] = useState(tuit.dislikes);

  return (
    <div className="tuit-ededed">
      <div className="tuit-title">{tuit.title}</div>
      <div>
        <div className="col-3 d-flex align-items-center">
          <FontAwesomeIcon
            icon={faHeart}
            style={{ color: "red" }}
            className="icon-space"
          />
          {likesNum}
        </div>
        <div className="col-3 d-flex align-items-center">
          <FontAwesomeIcon
            icon={faThumbsDown}
            style={{ color: "blue" }}
            className="icon-space"
          />
          {dislikesNum}
        </div>
      </div>
    </div>
  );
};

export default PreviewTuit;
