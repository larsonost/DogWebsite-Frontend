import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { loginThunk, registerThunk } from "../services/auth-thunks";
function RegisterScreen() {
  const [role, setRole] = useState("");  // new state for role
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleRoleChange = (e) => {
    setRole(e.target.value);
  }

  const handleRegister = async () => {
    try {
      await dispatch(registerThunk({ username, password, lastName, firstName }));
      navigate("/../profile");
    } catch (e) {
      alert(e);
    }
  };
  return (
    <div className="row">
      <div className="col-8">
        <div className="container">
          <div className="login-form border rounded p-4 bg-light">
            {/* You don't necessarily need the <form> tag if you're handling submission yourself */}
            <form>
              <div className="mb-3">
                <label htmlFor="firstname" className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstname"
                  placeholder="Enter first name"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastname" className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  placeholder="Enter last name"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Enter username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Role</label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="role"
                    id="owner"
                    value="Owner"
                    onChange={handleRoleChange}
                  />
                  <label className="form-check-label" htmlFor="owner">Owner</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="role"
                    id="seller"
                    value="Seller"
                    onChange={handleRoleChange}
                  />
                  <label className="form-check-label" htmlFor="seller">Seller</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="role"
                    id="specialist"
                    value="Specialist"
                    onChange={handleRoleChange}
                  />
                  <label className="form-check-label" htmlFor="specialist">Specialist</label>
                </div>
              </div>

              {/* Conditional Fields based on role */}
              {role === "Owner" && (
                <div className="mb-3">
                  {/* Add any additional fields required for Owners here */}
                  <label htmlFor="ownerProperty" className="form-label">Property Owned</label>
                  <input type="text" className="form-control" id="ownerProperty" placeholder="Enter property details" />
                </div>
              )}
              {role === "Seller" && (
                <div className="mb-3">
                  {/* Add any additional fields required for Sellers here */}
                  <label htmlFor="shopName" className="form-label">Shop Name</label>
                  <input type="text" className="form-control" id="shopName" placeholder="Enter shop name" />
                </div>
              )}
              {role === "Specialist" && (
                <div className="mb-3">
                  {/* Add any additional fields required for Specialists here */}
                  <label htmlFor="specialty" className="form-label">Specialty</label>
                  <input type="text" className="form-control" id="specialty" placeholder="Enter specialty" />
                </div>
              )}
              <button type="button" className="btn btn-primary" onClick={handleRegister}>Register</button>
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