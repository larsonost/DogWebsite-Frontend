import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
  profileThunk,
  logoutThunk,
  updateUserThunk
} from "../services/auth-thunks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog, faBoxOpen, faWrench } from "@fortawesome/free-solid-svg-icons";
import OwnerTuit from "../tuits/tuit-items/owner-item";
import MerchantTuit from "../tuits/tuit-items/merchant-item";
import SpecialistTuit from "../tuits/tuit-items/specialist-item";
import TuitItem from "../tuits/tuit-items/tuit-item";

function ProfileScreen() {
  const { currentUser } = useSelector((state) => state.user);
  const { tuits } = useSelector(state => state.tuits);
  const [profile, setProfile] = useState(currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProfile() {
      const { payload } = await dispatch(profileThunk());
      setProfile(payload);
    }

    fetchProfile();
  }, [dispatch]);
  const save = () => {
    dispatch(updateUserThunk(profile));
  };

  const getValue = (mainObj, backupObj, key) => {
    if (mainObj && mainObj[key] !== undefined) {
      return mainObj[key];
    } else if (backupObj && backupObj[key] !== undefined) {
      return backupObj[key];
    }
    return null;
  };
  

  const user = {
    firstName: currentUser ? getValue(currentUser.data, currentUser, 'firstName') : null,
    lastName: currentUser ? getValue(currentUser.data, currentUser, 'lastName') : null,
    ID: currentUser ? getValue(currentUser.data, currentUser, '_id') : null,
    password: currentUser ? getValue(currentUser.data, currentUser, 'password') : null,
    username: currentUser ? getValue(currentUser.data, currentUser, 'username') : null,
    role: currentUser ? getValue(currentUser.data, currentUser, 'role') : null,
    dogs: currentUser ? getValue(currentUser.data, currentUser, 'dogs') : [],
    products: currentUser ? getValue(currentUser.data, currentUser, 'products') : [],
    service: currentUser ? getValue(currentUser.data, currentUser, 'service') : null,
    followers: currentUser ? getValue(currentUser.data, currentUser, 'followers') : [],
    following: currentUser ? getValue(currentUser.data, currentUser, 'following') : [],
};

const renderPrivateDetails = () => (
  <div className="card mb-4">
    <div className="card-header">Private Information</div>
    <div className="card-body">
      <p><strong>First Name:</strong> {user.firstName}</p>
      <p><strong>Last Name:</strong> {user.lastName}</p>
      <p><strong>Website ID:</strong> {user.ID}</p>
      <p><strong>Password:</strong> {user.password}</p>
    </div>
  </div>
);
  const renderOwnerDetails = () => (
    <div>
      <h5><FontAwesomeIcon icon={faDog} /> Dogs Owned</h5>
      <ul className="list-group">
        {user.dogs.map(dog => (
          <li className="list-group-item" key={dog._id}>
            {dog.name} - {dog.breed}
          </li>
        ))}
      </ul>
    </div>
  );

  const renderMerchantDetails = () => (
    <div>
      <h5><FontAwesomeIcon icon={faBoxOpen} /> Products</h5>
      <ul className="list-group">
        {user.products.map(product => (
          <li className="list-group-item" key={product._id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );

  const renderSpecialistDetails = () => (
    <div>
      <h5><FontAwesomeIcon icon={faWrench} /> Service</h5>
      <p>{user.service}</p>
    </div>
  );

  const relevantTuits = tuits.filter(tuit => tuit.username === user.username).reverse();

  return (
    <div className="container">
        <div className="row">
            {/* Left column for main content */}
            <div className="col-md-8">
                <h2>{user.firstName} {user.lastName}</h2>
                <h5>@{user.username}</h5>
                
                <div className="mb-3">
                    <span><strong>Followers:</strong> {user.followers ? user.followers.length : 0}</span>
                    <span className="ml-4"><strong>Following:</strong> {user.following ? user.following.length : 0}</span>
                </div>

                {user.role === 'Owner' && renderOwnerDetails()}
                {user.role === 'Merchant' && renderMerchantDetails()}
                {user.role === 'Specialist' && renderSpecialistDetails()}

                <h4 className="mt-4">Tuits</h4>
                <div className="waterfall">
                    {relevantTuits.map((tuit) => {
                        switch (tuit.role) {
                            case 'Owner':
                                return <OwnerTuit key={tuit._id} tuit={tuit} />
                            case 'Merchant':
                                return <MerchantTuit key={tuit._id} tuit={tuit} />
                            case 'Specialist':
                                return <SpecialistTuit key={tuit._id} tuit={tuit} />
                            default:
                                return <TuitItem key={tuit._id} tuit={tuit} />
                        }
                    })}
                </div>

                <button className="m-2 btn btn-primary"
                    onClick={() => {
                        dispatch(logoutThunk());
                        navigate("/../login");
                    }}>
                    Logout
                </button>
                <button className="m-2 btn btn-primary" onClick={() => dispatch(updateUserThunk(profile))}>
                    Save
                </button>
                <div>
                    <label>First Name</label>
                    <input type="text" value={user.firstName}
                        onChange={(event) => {
                            const newProfile = {
                                ...profile, firstName: event.target.value,
                            };
                            setProfile(newProfile);
                        }}/>
                </div>
            </div>

            {/* Right column for private details */}
            <div className="col-md-4">
                {renderPrivateDetails()}
            </div>
        </div>
    </div>
);
}

export default ProfileScreen;
