import React from 'react';
import { Link } from 'react-router-dom';

function LoginScreen() {
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
                            <button type="submit" className="btn btn-primary">Sign In</button>
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
