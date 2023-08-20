import React, { useState } from "react";
import "./specialist.css"
import specialistProfile from "./specialistProfile.jpg";
import { useSelector } from "react-redux";
import { AiOutlinePicture } from "react-icons/ai";
import { MdFormatListBulleted } from "react-icons/md";
import { HiOutlineGif } from "react-icons/hi2";
import { TbCalendarStats } from "react-icons/tb";
import { BsEmojiSmile } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiBold, BiItalic } from "react-icons/bi";
import { createTuitThunk } from "../../services/tuits-thunks";
import { useDispatch } from "react-redux";

const SpecialistPosts = () => {
    const [dogBreed, setDogBreed] = useState('');
    const [whatsHappening, setWhatsHappening] = useState('');
    const [title, setTitle] = useState('');
    const { tuits, loading } = useSelector(state => state.tuits)
    const [interest, setInterest] = useState('');
    const [roleOption, setRoleOption] = useState('Specialist');
    const [selectedproduct, setSelectedproduct] = useState(null);
    const uniqueDogBreeds = [...new Set(tuits.map(tuit => tuit.selectedDogBreed))].filter(Boolean);
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.user);
    const service = currentUser.data.service;

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
            interest: interest,
            service: service,
            dogBreedTarget: dogBreed
        };
        dispatch(createTuitThunk(newTuit));
        setWhatsHappening("");
        setTitle("");
        setInterest("");
    };

    return (
        <div className="row mt-4">
            <div className="col-md-2 text-center d-none d-lg-block">
                <img src={specialistProfile} width={90} alt="Specialist Profile" className="rounded-circle mb-3" />
            </div>

            <div className="col-md-10">
                <h6>Create your post:</h6>
                <input
                    value={title}
                    placeholder="Post Title"
                    className="form-control mb-2"
                    onChange={(event) => setTitle(event.target.value)}
                />
                <textarea
                    value={whatsHappening}
                    placeholder="Post body"
                    className="form-control border-0 mb-3"
                    rows="3"
                    onChange={(event) => setWhatsHappening(event.target.value)}
                ></textarea>

                <div class="service-container">
                    <h6>Your Service:</h6>
                    <div class="service-button">
                        {service}
                    </div>
                    <br />
                </div>
                <br />

                <h6>Dog Breed Target:</h6>
                <div className="mb-3">
                    <select
                        value={dogBreed}
                        onChange={(event) => setDogBreed(event.target.value)}
                        className="form-control"
                    >
                        {uniqueDogBreeds.map(breed => (
                            <option key={breed} value={breed}>{breed}</option>
                        ))}

                    </select>
                </div>
                <h6>Any special notes?</h6>

                <input
                    value={interest}
                    placeholder="Special Notes"
                    className="form-control mb-3"
                    onChange={(event) => setInterest(event.target.value)}
                />

                <div>
                    <button
                        className="rounded-pill btn btn-primary fw-bold"
                        onClick={tuitClickHandler}
                    >
                        Create Post!
                    </button>
                </div>
            </div>
        </div>
    );
}
export default SpecialistPosts;
