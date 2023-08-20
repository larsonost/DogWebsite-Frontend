import React, { useState } from "react";
import merchantProfile from "./merchantProfile.jpg";
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

const MerchantPosts = () => {
    const [dogBreed, setDogBreed] = useState('');
    const [whatsHappening, setWhatsHappening] = useState('');
    const [title, setTitle] = useState('');
    const [interest, setInterest] = useState('');
    const [roleOption, setRoleOption] = useState('Specialist');
    const [selectedproduct, setSelectedproduct] = useState(null);

    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.user);
    const products = currentUser.data.products;

    const tuitClickHandler = () => {
        const newTuit = {
            tuit: whatsHappening,
            image: merchantProfile,
            username: currentUser.data.username,
            time: "now",
            likes: 0,
            liked: false,
            dislikes: 0,
            disliked: false,
            title: title,
            role: "Merchant",
            interest: interest,
            selectedproductName: selectedproduct.name,
            selectedproductPrice: selectedproduct.price,
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
                <img src={merchantProfile} width={90} alt="merchant Profile" className="rounded-circle mb-3" />
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

                <h6>Your Products:</h6>
                <div className="mb-3 d-flex flex-wrap">
                    {products.map((product, index) => (
                        <button
                            key={index}
                            type="button"
                            style={{ marginRight: "10px" }}
                            className={`btn ${selectedproduct === product ? 'btn-primary' : 'btn-secondary'} mr-2 mb-2`}
                            onClick={() => setSelectedproduct(product)}
                        >
                            {product.name} - ${product.price}
                        </button>
                    ))}
                </div>
                <h6>Why is this product interesting?</h6>

                <input
                    value={interest}
                    placeholder="Interesting Features"
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
export default MerchantPosts;
