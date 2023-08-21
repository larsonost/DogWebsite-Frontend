import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { findUserById } from "../services/auth-service";

function ProfileOthers() {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const [followers, setFollowers] = useState([]);

  const fetchUser = async () => {
    const user = await findUserById(userId);
    setUser(user);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
        {user.username}
    </div>
  );
}

export default ProfileOthers;