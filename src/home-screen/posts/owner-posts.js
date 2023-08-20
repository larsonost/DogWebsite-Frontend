import React, { useState } from "react";
import ownerProfile from "./ownerProfile.jpg";
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
            image: ownerProfile,
            username: currentUser.data.username,
            time: "now",
            likes: 0,
            liked: false,
            dislikes: 0,
            disliked: false,
            title: title,
            seekingrole: roleOption,
            role: "Owner",
            selectedDogName: selectedDog.name,
            selectedDogBreed: selectedDog.breed,
            interest: interest,
        };
        dispatch(createTuitThunk(newTuit));
        setWhatsHappening("");
        setTitle("");
        setInterest("");
    };

    return (
        <div className="row mt-4">
            <div className="col-md-2 text-center d-none d-lg-block">
                <img src={ownerProfile} width={90} alt="Owner Profile" className="rounded-circle mb-3" />
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
                    placeholder="Post Body"
                    className="form-control border-0 mb-3"
                    rows="3"
                    onChange={(event) => setWhatsHappening(event.target.value)}
                ></textarea>

                <h6>Which dog are you posting about?</h6>
                <div className="mb-3 d-flex flex-wrap">
                    {dogs.map((dog, index) => (
                        <button
                            key={index}
                            type="button"
                            style={{ marginRight: "10px" }}
                            className={`btn ${selectedDog === dog ? 'btn-primary' : 'btn-secondary'} mr-2 mb-2`}
                            onClick={() => setSelectedDog(dog)}
                        >
                            {dog.name} - {dog.breed}
                        </button>
                    ))}
                </div>


                <h6>What role are you seeking?</h6>
                <div className="mb-3 d-flex flex-wrap">
                    <button
                        type="button"
                        style={{ marginRight: "10px" }}
                        className={`btn ${roleOption === 'Specialist' ? 'btn-primary' : 'btn-secondary'} mb-2`}
                        onClick={() => setRoleOption('Specialist')}
                    >
                        Specialist
                    </button>

                    <button
                        type="button"
                        className={`btn ${roleOption === 'Merchant' ? 'btn-primary' : 'btn-secondary'} mb-2`}
                        onClick={() => setRoleOption('Merchant')}
                    >
                        Merchant
                    </button>
                </div>



                <h6>What are you looking for?</h6>
                <input
                    value={interest}
                    placeholder="Service/product interest..."
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
export default OwnerPosts;
