import {Routes, Route}
    from "react-router";
import ProfileContent from "./profile-element";

function Profile() {
    return (
        <div>
            <Routes>
                <Route path="profile"
                       element={<ProfileContent/>}/>
            </Routes>
        </div>
    );
}

export default Profile