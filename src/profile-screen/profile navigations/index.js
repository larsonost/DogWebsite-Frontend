import React from "react";
import { Link } from "react-router-dom";


const ProfileNavigation = () => {

    return (
        <div className="list-group">
            <Link to={"/profile/dailyshowoff"} className={`list-group-item`}>&nbsp;Daily Show Off</Link>
            <Link to={"/profile/recommendations"} className={`list-group-item`}>&nbsp;&nbsp;Recommendations</Link>
            <Link to={"/profile/reviews"} className={`list-group-item`}>&nbsp;&nbsp;Reviews</Link>
            <Link to={"/profile/joinedevents"} className={`list-group-item`}>&nbsp;&nbsp;Joined Events</Link>
            <Link to={"/profile/personaldetail"} className={`list-group-item`}>&nbsp;&nbsp;Personal Detail</Link>
        </div>

    );
};
export default ProfileNavigation;