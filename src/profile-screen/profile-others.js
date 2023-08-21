import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { findUserById } from "../services/auth-service";
import OwnerTuit from "../tuits/tuit-items/owner-item";
import MerchantTuit from "../tuits/tuit-items/merchant-item";
import SpecialistTuit from "../tuits/tuit-items/specialist-item";
import TuitItem from "../tuits/tuit-items/tuit-item";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog, faBoxOpen, faWrench } from "@fortawesome/free-solid-svg-icons";

function ProfileOthers() {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const { tuits, loading } = useSelector(state => state.tuits)

  const fetchUser = async () => {
    const fetchedUser = await findUserById(userId);
    setUser(fetchedUser);
  };

  useEffect(() => {
    fetchUser();
  }, []);


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
    </div>
  );
}

export default ProfileOthers;
