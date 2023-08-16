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
  const [dogname, setDogName] = useState("");
  const [dogbreed, setDogBreed] = useState("");
  const [service, setSpecialty] = useState("");
  const [productname, setProductName] = useState("");
  const [productprice, setProductPrice] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleRoleChange = (e) => {
    setRole(e.target.value);
  }

  const handleRegister = async () => {
    try {
      await dispatch(registerThunk({ username, password, lastName, firstName, role, dogname, dogbreed, service, productname, productprice }));
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
                {/* Add any additional fields required for Sellers here */}
                <label htmlFor="dogname" className="form-label">Shop Name</label>
                <input type="text" className="form-control" id="dogname" placeholder="Enter shop name" value={dogname}
                  onChange={(e) => setDogName(e.target.value)} />

                <label htmlFor="dogbreed" className="form-label">Shop Name</label>
                <input type="text" className="form-control" id="dogbreed" placeholder="Enter shop name"  value={dogbreed}
                  onChange={(e) => setDogBreed(e.target.value)} />
              </div>
              )}
              {role === "Seller" && (
                <div className="mb-3">
                  {/* Add any additional fields required for Sellers here */}
                  <label htmlFor="productname" className="form-label">Shop Name</label>
                  <input type="text" className="form-control" id="productname" placeholder="Enter shop name" value={productname}
                    onChange={(e) => setProductName(e.target.value)} />

                  <label htmlFor="productprice" className="form-label">Shop Name</label>
                  <input type="text" className="form-control" id="productprice" placeholder="Enter shop name"  value={productprice}
                    onChange={(e) => setProductPrice(e.target.value)} />
                </div>
              )}
              {role === "Specialist" && (
                <div className="mb-3">
                  {/* Add any additional fields required for Specialists here */}
                  <label htmlFor="service" className="form-label">Service</label>
                  <input type="text" className="form-control" id="service" placeholder="Enter service" value={service}
                    onChange={(e) => setSpecialty(e.target.value)} />
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