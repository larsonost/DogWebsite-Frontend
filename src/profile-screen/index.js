import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { profileThunk, logoutThunk, updateUserThunk }
  from "../services/auth-thunks";
function ProfileScreen() {
    const { currentUser } = useSelector((state) => state.user);
    const [ profile, setProfile ] = useState(currentUser);
    console.log("HERE")
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
    let username;

if (currentUser && currentUser.username) {
    username = currentUser.username;
} else if (currentUser && currentUser.data && currentUser.data.username) {
    username = currentUser.data.username;
} else {
    username = "Username not found";
}

console.log(username);

    ////console.log(profile.username)
    //console.log(currentUser.data)
  return (
    <>
    {username}
    <button className="m-2 btn btn-primary"
            onClick={() => {
              dispatch(logoutThunk());
              navigate("/../login");
            }}>                   Logout</button>
        <button className="m-2 btn btn-primary" onClick={save}>  Save  </button></>
  );
}
export default ProfileScreen;