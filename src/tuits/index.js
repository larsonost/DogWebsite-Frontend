import React from "react";
import TuitItem from "./tuit-item";
import { useSelector } from "react-redux";
import "./waterfall.css";

const TuitsList = () => {
  const { tuits, loading } = useSelector(state => state.tuits)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])

  return (
    <ul className="list-group">
      {loading &&
        <li className="list-group-item">
          Loading...
        </li>
      }

      <div className="waterfall">
        {tuits.map((tuit) => (
          <TuitItem key={tuit._id} tuit={tuit} />
        ))}
      </div>
    </ul>
  );
};

export default TuitsList;
