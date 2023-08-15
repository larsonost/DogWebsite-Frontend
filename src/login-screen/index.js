import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginThunk } from "../services/auth-thunks";

function LoginScreen() {
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = async () => {
    try {
      const res = await dispatch(loginThunk({ username, password }));
      if (res.error) {
        alert("Invalid login. User does not exist.");
      } else {
        navigate("/tuiter/profile");
      }
    } catch (e) {
      alert(e);
    }
  };
    return (
        <div className="row">
            <div className="col-8">
                <div className="container">
                    <div className="login-form border rounded p-4 bg-light">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input type="text" className="form-control" id="username" placeholder="Enter username" required value={username}
                 onChange={(event) => setUsername(event.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Enter password" required  value={password}
                                onChange={(event) => setPassword(event.target.value)}/>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={handleLogin}>Sign In</button>
                        </form>
                        <hr />
                        <p>Don't have an account? Please register!</p>
                        <Link to="/register" className="btn btn-secondary">Register</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginScreen;
