import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  profile,
  findUserById,
  getFollowerUsers,
  userFollowsAnotherUser,
} from "../services/auth-service";
import OwnerTuit from "../tuits/tuit-items/owner-item";
import MerchantTuit from "../tuits/tuit-items/merchant-item";
import SpecialistTuit from "../tuits/tuit-items/specialist-item";
import TuitItem from "../tuits/tuit-items/tuit-item";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog, faBoxOpen, faWrench } from "@fortawesome/free-solid-svg-icons";

const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
const USERS_URL = `${SERVER_API_URL}/users`;

function ProfileOthers() {
  const [currentUserId, setCurrentUserId] = useState(null);
  const [isFollowed, setIsFollowed] = useState(false);
  const [followers, setFollowers] = useState([]);
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const [allUsers, setAllUsers] = useState([]);
  const { tuits, loading } = useSelector((state) => state.tuits);

  useEffect(() => {
    async function fetchData() {
      // Fetch user profile
      const fetchedProfile = await findUserById(userId);
      setUser(fetchedProfile);

      // Fetch all users (for fetching names based on IDs)
      try {
        const response = await fetch(USERS_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setAllUsers(data);
      } catch (error) {
        console.error("There was an error fetching the users:", error);
      }

      // Fetch current user's ID
      try {
        const response = await profile();
        if (response && response.data) {
          setCurrentUserId(response.data._id);
        }
      } catch (error) {
        console.error("Error fetching current user's ID:", error);
      }

      // Fetch followers
      const fetchedFollowers = await getFollowerUsers(userId);
      setFollowers(fetchedFollowers);
      setIsFollowed(
        fetchedFollowers.some((follower) => follower._id === currentUserId)
      );
    }
    fetchData();
  }, [userId, currentUserId]);

  const followUser = async () => {
    const action = isFollowed ? "unfollow" : "follow";
    await userFollowsAnotherUser(userId, action);
    setIsFollowed(!isFollowed);
  };

  const fetchUserNameById = (id) => {
    const foundUser = allUsers.find((user) => user._id === id);
    return foundUser ? foundUser.firstName + " " + foundUser.lastName : null;
  };

  const renderOwnerDetails = () => (
    <div>
      <h5>
        <FontAwesomeIcon icon={faDog} /> Dogs Owned
      </h5>
      <ul className="list-group">
        {user.dogs.map((dog) => (
          <li className="list-group-item" key={dog._id}>
            {dog.name} - {dog.breed}
          </li>
        ))}
      </ul>
    </div>
  );

  const renderMerchantDetails = () => (
    <div>
      <h5>
        <FontAwesomeIcon icon={faBoxOpen} /> Products
      </h5>
      <ul className="list-group">
        {user.products.map((product) => (
          <li className="list-group-item" key={product._id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );

  const renderSpecialistDetails = () => (
    <div>
      <h5>
        <FontAwesomeIcon icon={faWrench} /> Service
      </h5>
      <p>{user.service}</p>
    </div>
  );
  const relevantTuits = tuits
    .filter((tuit) => tuit.username === user.username)
    .reverse();
  return (
    <div className="container">
      <h2>
        {user.firstName} {user.lastName}
      </h2>
      <h5>@{user.username}</h5>

      <div>
        <h1>
          <button onClick={followUser} className="float-end">
            {isFollowed ? "Followed" : "Follow"}
          </button>
        </h1>
      </div>
      <div className="mb-3">
        <div>
          <strong>Followers:</strong>
          {user.followers && user.followers.length > 0 ? (
            <ul>
              {user.followers.map((id, index) => (
                <li key={index}>
                  <Link to={`/profile/${id}`}>{fetchUserNameById(id)}</Link>
                </li>
              ))}
            </ul>
          ) : (
            0
          )}
        </div>
        <div className="ml-4">
          <strong>Following:</strong>
          {user.following && user.following.length > 0 ? (
            <ul>
              {user.following.map((id, index) => (
                <li key={index}>
                  <Link to={`/profile/${id}`}>{fetchUserNameById(id)}</Link>
                </li>
              ))}
            </ul>
          ) : (
            0
          )}
        </div>
      </div>

      {user.role === "Owner" && renderOwnerDetails()}
      {user.role === "Merchant" && renderMerchantDetails()}
      {user.role === "Specialist" && renderSpecialistDetails()}

      <h4 className="mt-4">Tuits</h4>
      <div className="waterfall">
        {relevantTuits.map((tuit) => {
          switch (tuit.role) {
            case "Owner":
              return <OwnerTuit key={tuit._id} tuit={tuit} />;
            case "Merchant":
              return <MerchantTuit key={tuit._id} tuit={tuit} />;
            case "Specialist":
              return <SpecialistTuit key={tuit._id} tuit={tuit} />;
            default:
              return <TuitItem key={tuit._id} tuit={tuit} />;
          }
        })}
      </div>
    </div>
  );
}

export default ProfileOthers;
