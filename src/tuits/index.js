import React, { useEffect } from "react";
import TuitItem from "./tuit-items/tuit-item";
import OwnerTuit from './tuit-items/owner-item';
import MerchantTuit from './tuit-items/merchant-item';
import SpecialistTuit from './tuit-items/specialist-item';
import "./waterfall.css";
import { findTuitsThunk } from "../services/tuits-thunks";
import { useDispatch, useSelector } from "react-redux";

const TuitsList = () => {
  const { tuits, loading } = useSelector(state => state.tuits)
  const { currentUser } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk())
  }, [])

  // Filter tuits based on currentUser's role
  
  const filteredTuits = tuits.filter((tuit) => {
    if (!currentUser || !currentUser.data) return true;
    switch (currentUser.data.role) {
      case 'Owner':
        return ['Specialist', 'Merchant'].includes(tuit.role);
      case 'Specialist':
        return tuit.role === 'Owner';
      case 'Merchant':
        return tuit.role === 'Owner';
      default:
        return true;
    }
  });
  

  return (
    <ul className="list-group">
      {loading &&
        <li className="list-group-item">
          Loading...
        </li>
      }

      <div className="waterfall">
        {[...filteredTuits].reverse().map((tuit) => {
          switch (tuit.role) {
            case 'owner':
            case 'Owner':
              return <OwnerTuit key={tuit._id} tuit={tuit} />
            case 'merchant':
            case 'Merchant':
              return <MerchantTuit key={tuit._id} tuit={tuit} />
            case 'specialist':
            case 'Specialist':
              return <SpecialistTuit key={tuit._id} tuit={tuit} />
            default:
              return <TuitItem key={tuit._id} tuit={tuit} />
          }
        })}
      </div>
    </ul>
  );
};

export default TuitsList;
