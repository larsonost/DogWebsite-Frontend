import React, {useState} from "react";
import guestProfile from "./guest.jpg";
import {AiOutlinePicture} from "react-icons/ai";
import {MdFormatListBulleted} from "react-icons/md";
import {HiOutlineGif} from "react-icons/hi2";
import {TbCalendarStats} from "react-icons/tb";
import {BsEmojiSmile} from "react-icons/bs";
import {HiOutlineLocationMarker} from "react-icons/hi";
import {BiBold, BiItalic} from "react-icons/bi";
import {createTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

const GuestPosts = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        alert("Please login or register to post content");
    }
    return (
        <div className="row">
            <div className="col-auto">
                <img src={guestProfile} width={60} />
            </div>
            <div className="col-10">
                <textarea value={whatsHappening} placeholder="What would you like to say?"
                    className="form-control border-0"
                    onChange={(event) => setWhatsHappening(event.target.value)}>
                </textarea>
                <div>
                    <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                        onClick={tuitClickHandler}>
                        Post
                    </button>
                    <div className="text-primary fs-2">
                        Make your first post!
                    </div>
                </div>
            </div>
            <div className="col-12"><hr /></div>
        </div>
    );
}
export default GuestPosts;