import {Routes, Route}
    from "react-router";
    import React, { useState, useEffect } from "react";
    import { useSelector, useDispatch } from "react-redux";
    import { useNavigate } from "react-router";
    import { profileThunk, logoutThunk, updateUserThunk }
      from "../services/auth-thunks";
import ProfileNavigation from "./profile navigations";
import DailyShowOff from "./profile navigations/daily-show-off";
import Recommendations from "./profile navigations/recommendations";
import Review from "./profile navigations/reviews";
import JoinedEvents from "./profile navigations/joined-events";
import PersonalDetail from "./profile navigations/personal-detail";


function Profile() {
    const { currentUser } = useSelector((state) => state.user);
  const [ profile, setProfile ] = useState(currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const save = () => {
    dispatch(updateUserThunk(profile));
  };
// Function reworked by Github Copilot
  useEffect(() => {
    async function fetchProfile() {
      const { payload } = await dispatch(profileThunk());
      setProfile(payload);
    }

    fetchProfile();
  }, [dispatch]);
    return (
        <div>
            <div className="row">
                <div className="col-1">
                    <img className="rounded-circle" height="48px" src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=1380&t=st=1690920542~exp=1690921142~hmac=f177b21ddc44442c0e8a0ea60542d57025e03b7ddaeade9e8f6b1fc5a1dc1910"/>
                </div>
                <div className="col-11">
                    <h2>UserName/Detail</h2>
                    <ul className="nav nav-pills mb-2 mt-2">
                        <li className="nav-item">
                            <a className="nav-link">Followers</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Following</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Edit Profile</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <ProfileNavigation/>
                </div>
                <div className="col-9">
                    <Routes>
                        <Route path="dailyshowoff" element={<DailyShowOff/>} />
                        <Route path="recommendations" element={<Recommendations/>} />
                        <Route path="reviews" element={<Review/>} />
                        <Route path="joinedevents" element={<JoinedEvents/>} />
                        <Route path="personaldetail" element={<PersonalDetail/>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default Profile