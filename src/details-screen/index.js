import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {findDetailThunk, findThunk} from "../services/search-thunk";
import {Link} from "react-router-dom";

const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
const USERS_URL = `${SERVER_API_URL}/users`;

function Details() {
    const { places, loading } = useSelector(state => state.places)
    const { placesDetails} = useSelector(state => state.placesDetails)
    const [users, setUsers] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findDetailThunk())
    }, [])
    console.log(places)
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(USERS_URL);
                if (!response.ok) {
                    throw new Error('Failed to fetch users');
                }
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error("There was an error fetching the users:", error);
            }
        };
        fetchUsers();
    }, []);
    return (
        <>
            <div className="row">
                <div className="col-2">
                    <h2>Details</h2>
                </div>
                <br/><br/>
                {<Link to="/search">Back to search</Link>}


                <div className="row">
                    <div className="col-6">
                        {
                            places.candidates?.map(tuit =>
                                <>
                                    <div><h1>{tuit.name}<br/></h1></div>
                                    <div><b>Address:</b> {tuit.formatted_address}<br/></div>
                                    <div><b>Rating:</b> {tuit.rating}<br/></div>
                                    <br/>
                                </>
                            )
                        }
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <h3>User Comments</h3>
                            {
                                placesDetails.map(
                                    (tuit => {
                                        return <div key={tuit._id}>
                                            {tuit.reviews.map((type, index) => {
                                                    const user = users.find(u => u.username === type.user);
                                                    return <span key={index}>
                                                        
                                                            <Link to={`/profile/${user._id}`}>@<b>{type.user}</b><br/> </Link>
                                                        {type.review}<br/><br/>
                                                            </span>
                                                }
                                            )
                                            }
                                        </div>
                                    }))}
                        </div>

                        <div className="col-6">
                            <h2>Amenities Nearby</h2>
                            {
                                placesDetails?.map(tuit =>
                                    <>
                                        <div>City: {tuit.city}<br/></div>
                                        <br/>
                                        <div>Hospital: {tuit.hospital.name}<br/></div>
                                        <div>Hospital Address: {tuit.hospital.address}<br/></div>
                                        <div><img className="rounded-bottom-5 rounded-top-5" src = {tuit.hospital.image} height='360' width='360'/></div>
                                        <br/>
                                        <div>Hotel: {tuit.hotel.name}<br/></div>
                                        <div>Hotel Address: {tuit.hotel.address}<br/></div>
                                        <div><img className="rounded-bottom-5 rounded-top-5" src = {tuit.hotel.image} height='360' width='360'/></div>
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