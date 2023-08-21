import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {createThunk, findThunk, findDetailThunk} from "../services/search-thunk";
import { Link } from "react-router-dom";
import axios from "axios";


function SearchResult() {
    const [searchContent, setSearchContent] = useState("");

    const { places, loading } = useSelector(state => state.places)
    const placeFound = {
        'formatted_address':places.candidates?.[0].formatted_address,
        'name':places.candidates?.[0].name,
        'status': places.status,
        'place_id': places.candidates?.[0].place_id
    }
    console.log(placeFound)


    const dispatch = useDispatch();


    const handleSearch = async () => {
        try {
            await dispatch(findThunk({searchContent}));
        } catch (e) {
            alert(e);
        }
        setSearchContent("");
    };



    const handleDetail = async () => {
        try {
            await  dispatch(createThunk({placeFound}));
            await dispatch(findDetailThunk());
            // await  dispatch(findDetailThunk());
        } catch (e) {
            alert(e);
        }
        setSearchContent("");
    };



    return (
        <>
            <div className="row">
                <div className="col-8">
                    <div className="row">
                        <div className="col-9">
                            <input placeholder="Search "
                                   className="form-control rounded-pill pl-5" value={searchContent}
                                   onChange={(event) => setSearchContent(event.target.value)}/>
                        </div>
                        <div className="col-2"><Link to={`/search/${searchContent}`}>
                            <button className="btn btn-primary mt-2"
                                    onClick={handleSearch}> Search</button> </Link>
                        </div>
                    </div>
                    <div className="list-group">
                        {loading &&
                            <li className="list-group-item">
                                Loading...
                            </li>
                        }
                        {
                            places.candidates?.map(tuit =>{

                                    return (<>

                                        <div className="text-primary "><h1>{tuit.name}</h1></div>
                                        <div className="text-secondary "><h3>{tuit.formatted_address}</h3></div>
                                        <div className="text-secondary "><h3>Rating: {tuit.rating}</h3></div>
                                        <div>
                                            <img className="rounded-bottom-5 rounded-top-5"
                                                  src={`/place/photo?maxwidth=400&photo_reference=${tuit.photos?.[0].photo_reference}&key=AIzaSyAdq_1MT2PfwTJ3sXELKfEX0Pt2_W0AFpk`}/>
                                        </div>
                                        <br/>
                                        <div><Link to={`/details/${placeFound.place_id}`}><button className="btn btn-primary mt-2"
                                                                                                  onClick={handleDetail}> Details</button></Link></div>
                                    </>)
                                }
                            )

                        }

                    </div>

                </div>
            </div>
        </>
    );
}

export default SearchResult