import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginThunk, registerThunk } from "../services/auth-thunks";
import { Link } from 'react-router-dom';

function RegisterScreen() {
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = async () => {
    try {
      await dispatch(registerThunk({ username, password, lastName, firstName }));
      navigate("/tuiter/profile");
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
                                <input type="text" className="form-control" id="username" placeholder="Enter username" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Enter password" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Role</label>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="role" id="owner" value="Owner" />
                                    <label className="form-check-label" htmlFor="owner">Owner</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="role" id="seller" value="Seller" />
                                    <label className="form-check-label" htmlFor="seller">Seller</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="role" id="specialist" value="Specialist" />
                                    <label className="form-check-label" htmlFor="specialist">Specialist</label>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Register</button>
                        </form>
                        <hr />
                        <p>Already have an account? Please sign in!</p>
                        <Link to="/login" className="btn btn-secondary">Sign In</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterScreen;
