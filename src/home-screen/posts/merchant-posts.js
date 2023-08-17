import React, { useState } from "react";
import merchantProfile from "./merchantProfile.jpg";
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
            <div className="col-md-2 text-center">
                <img src={merchantProfile} width={90} alt="merchant Profile" className="rounded-circle mb-3" />
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
                    placeholder="Post body"
                    className="form-control border-0 mb-3"
                    rows="3"
                    onChange={(event) => setWhatsHappening(event.target.value)}
                ></textarea>
                
                <h6>Your Products:</h6>
                <div className="mb-3">
                    {products.map((product, index) => (
                        <div className="form-check" key={index}>
                            <input 
                                className="form-check-input"
                                type="radio"
                                name="selectedproduct"
                                id={`product-${index}`}
                                value={product.name}
                                onChange={() => setSelectedproduct(product)}
                            />
                            <label className="form-check-label" htmlFor={`product-${index}`}>
                                {product.name} - ${product.price}
                            </label>
                        </div>
                    ))}
                </div>
                
                <h6>Dog Breed Target:</h6>
            <div className="mb-3">
                <select 
                    value={dogBreed} 
                    onChange={(event) => setDogBreed(event.target.value)} 
                    className="form-control"
                >
                    <option value="Labrador">Labrador</option>
                    <option value="Golden Retriever">Golden Retriever</option>
                    <option value="German Shepherd">German Shepherd</option>
                    <option value="Poodle">Poodle</option>
                    <option value="Bulldog">Bulldog</option>
                    {/* ... You can add more dog breeds as options here */}
                </select>
            </div>

                <input 
                    value={interest}
                    placeholder="What makes this product interesting?"
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
