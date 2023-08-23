import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { findDetailThunk, findThunk, findUserDetailThunk } from "../services/search-thunk";
import { Link } from "react-router-dom";

const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
const USERS_URL = `${SERVER_API_URL}/users`;

function Details() {
    const { places, loading } = useSelector(state => state.places)
    const { placesDetails } = useSelector(state => state.placesDetails)
    const { userDetails } = useSelector(state => state.userDetails)
    const { currentUser } = useSelector(state => state.user);
    const [users, setUsers] = useState([]);
    const [localReviews, setLocalReviews] = useState([]); // Step 1: New state for local reviews
    const [newReview, setNewReview] = useState(''); // State to hold the new review text

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(findDetailThunk())
        dispatch(findUserDetailThunk())
    }, [])
    const handleReviewSubmit = e => {
        e.preventDefault();
        if (newReview && currentUser) {
            setLocalReviews(prev => [...prev, { review: newReview, user: currentUser.data.username }]);
            setNewReview('');
        }
    }
    console.log(places);
    console.log(userDetails);
    // useEffect(() => {
    //     const fetchUsers = async () => {
    //         try {
    //             const response = await fetch(USERS_URL);
    //             if (!response.ok) {
    //                 throw new Error('Failed to fetch users');
    //             }
    //             const data = await response.json();
    //             console.log(data)
    //             setUsers(data);
    //             // updateMyArray( arr => [...arr, `${arr.length}`]);
    //             console.log(users)
    //         } catch (error) {
    //             console.error("There was an error fetching the users:", error);
    //         }
    //     };
    //     fetchUsers();
    //     console.log(users)
    // }, []);
    return (
        <>
            <div className="row">
                <div className="col-2">
                    <h2>Details</h2>
                </div>
                <br /><br />
                {<Link to="/search">Back to search</Link>}


                <div className="row">
                    <div className="col-6">
                        {
                            places.candidates?.map(tuit =>
                                <>
                                    <div><h1>{tuit.name}<br /></h1></div>
                                    <div><b>Address:</b> {tuit.formatted_address}<br /></div>
                                    <div><b>Rating:</b> {tuit.rating}<br /></div>
                                    <br />
                                </>
                            )
                        }
                    </div>
                    <div className="row">
                    <div className="col-6">
                    <h3>User Comments</h3>
                    {
                        [...placesDetails, { reviews: localReviews }].map(tuit => {
                                return <div key={tuit._id || 'local'}>
                                    {tuit.reviews.map((type, index) => {
                                            const user = userDetails.find(u => u.username === type.user) || currentUser;
                                            return <span key={index}>
                                                    <Link to={`/profile/${user._id}`}>@<b>{type.user}</b><br/> </Link>
                                                {type.review}<br/><br/>
                                                    </span>
                                        }
                                    )}
                                </div>
                            })
                    }
                    {/* Conditionally render the review form based on the currentUser */}
                    {currentUser ? (
                        <form onSubmit={handleReviewSubmit}>
                            <textarea
                                value={newReview}
                                onChange={(e) => setNewReview(e.target.value)}
                                placeholder="Write your review here..."
                                rows="4"
                                style={{ width: '100%', marginBottom: '10px' }}
                            />
                            <button type="submit">Add Review</button>
                        </form>
                    ) : (
                        <p>Please log in to add a review.</p>
                    )}
                </div>

                        <div className="col-6">
                            <h2>Amenities Nearby</h2>
                            {
                                placesDetails?.map(tuit =>
                                    <>
                                        <div>City: {tuit.city}<br /></div>
                                        <br />
                                        <div>Hospital: {tuit.hospital.name}<br /></div>
                                        <div>Hospital Address: {tuit.hospital.address}<br /></div>
                                        <div><img className="rounded-bottom-5 rounded-top-5" src={tuit.hospital.image} height='360' width='360' /></div>
                                        <br />
                                        <div>Hotel: {tuit.hotel.name}<br /></div>
                                        <div>Hotel Address: {tuit.hotel.address}<br /></div>
                                        <div><img className="rounded-bottom-5 rounded-top-5" src={tuit.hotel.image} height='360' width='360' /></div>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Details