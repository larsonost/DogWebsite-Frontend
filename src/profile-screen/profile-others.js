import { useState, useEffect } from "react";
import { useParams } from "react-router";
import * as service from "../services/service.js"

function ProfileOthers() {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const [followers, setFollowers] = useState([]);

  const fetchUser = async () => {
    const user = await service.getUserById(userId);
    setUser(user);
  };
  console.log("NEW USER")
console.log(user)
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <h1>
          {user.username}
      </h1>
    </div>
  );
}

export default ProfileOthers;