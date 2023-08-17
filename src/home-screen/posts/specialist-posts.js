import React, { useState } from "react";
import specialistProfile from "./specialistProfile.jpg";
import { useSelector } from "react-redux";
import {AiOutlinePicture} from "react-icons/ai";
import {MdFormatListBulleted} from "react-icons/md";
import {HiOutlineGif} from "react-icons/hi2";
import {TbCalendarStats} from "react-icons/tb";
import {BsEmojiSmile} from "react-icons/bs";
import {HiOutlineLocationMarker} from "react-icons/hi";
import {BiBold, BiItalic} from "react-icons/bi";
import {createTuitThunk} from "../../services/tuits-thunks";
import { useDispatch } from "react-redux";

const OwnerPosts = () => {
    const [whatsHappening, setWhatsHappening] = useState('');
    const [title, setTitle] = useState('');
    const [interest, setInterest] = useState('');
    const [roleOption, setRoleOption] = useState('Specialist');
    const [selectedDog, setSelectedDog] = useState(null);

    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.user);
    const dogs = currentUser.data.dogs;

    const tuitClickHandler = () => {
        const newTuit = {
            tuit: whatsHappening,
            image: specialistProfile,
            username: currentUser.data.username,
            time: "now",
            likes: 0,
            liked: false,
            dislikes: 0,
            disliked: false,
            title: title,
            role: "Specialist",
        };
        dispatch(createTuitThunk(newTuit));
        setWhatsHappening("");
        setTitle("");
        setInterest("");
    };

    return (
        <div className="row mt-4">
            <div className="col-md-2 text-center">
                <img src={specialistProfile} width={90} alt="merchant Profile" className="rounded-circle mb-3" />
            </div>
            
            <div className="col-md-10">
                <input
                    value={title}
                    placeholder="Post Title"
                    className="form-control mb-2"
                    onChange={(event) => setTitle(event.target.value)}
                />
                <textarea 
                    value={whatsHappening}
                    placeholder="Owner Posts"
                    className="form-control border-0 mb-3"
                    rows="3"
                    onChange={(event) => setWhatsHappening(event.target.value)}
                ></textarea>
                
                <h6>Your Dog:</h6>
                <div className="mb-3">
                    {dogs.map((dog, index) => (
                        <div className="form-check" key={index}>
                            <input 
                                className="form-check-input"
                                type="radio"
                                name="selectedDog"
                                id={`dog-${index}`}
                                value={dog.name}
                                onChange={() => setSelectedDog(dog)}
                            />
                            <label className="form-check-label" htmlFor={`dog-${index}`}>
                                {dog.name} - {dog.breed}
                            </label>
                        </div>
                    ))}
                </div>
                
                <h6>Role:</h6>
                <div className="mb-3">
                    <div className="form-check">
                        <input 
                            className="form-check-input"
                            type="radio"
                            name="roleOption"
                            id="Specialist"
                            value="Specialist"
                            checked={roleOption === 'Specialist'}
                            onChange={(event) => setRoleOption(event.target.value)}
                        />
                        <label className="form-check-label" htmlFor="Specialist">Specialist</label>
                    </div>
                    <div className="form-check">
                        <input 
                            className="form-check-input"
                            type="radio"
                            name="roleOption"
                            id="Merchant"
                            value="Merchant"
                            checked={roleOption === 'Merchant'}
                            onChange={(event) => setRoleOption(event.target.value)}
                        />
                        <label className="form-check-label" htmlFor="Merchant">Merchant</label>
                    </div>
                </div>

                <input 
                    value={interest}
                    placeholder="What are you interested in?"
                    className="form-control mb-3"
                    onChange={(event) => setInterest(event.target.value)}
                />
                
                <div>
                    <button 
                        className="rounded-pill btn btn-primary fw-bold"
                        onClick={tuitClickHandler}
                    >
                        Tuit
                    </button>
                </div>
            </div>
        </div>
    );
}
export default OwnerPosts;
