import React, { useState } from "react";
import {AiFillHeart, AiOutlineHeart, AiOutlineUpload} from "react-icons/ai";
import {FaRetweet} from 'react-icons/fa';
import {LiaCommentDotsSolid} from "react-icons/lia";
import "./tuit-item.css";

const TuitStats = ({ tuit }) => {
    const [likes, setLikes] = useState(tuit.likes);
    const [liked, setLiked] = useState(tuit.liked);

    const handleLikeClick = () => {
        if (liked) {
            setLikes(likes - 1);
            setLiked(false);
        } else {
            setLikes(likes + 1);
            setLiked(true);
        }
    };

    const likeIcon = liked
        ? <AiFillHeart color={"red"} onClick={handleLikeClick} />
        : <AiOutlineHeart onClick={handleLikeClick} />;


    return(
                 <div className="row alignment">
                        <div className="col-2">
                            <LiaCommentDotsSolid/> {tuit.replies}
                        </div>
                        <div className="col-2">
                            <FaRetweet/> {tuit.retuits}
                        </div>
                        <div className="col-2">
                            {likeIcon} {likes}
                        </div>
                        <div className="col-2">
                            <AiOutlineUpload/>
                        </div>
                    </div>
    );
};
export default TuitStats;