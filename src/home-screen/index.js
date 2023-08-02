import React from 'react';
import TuitsList from "../tuits";
import { Link } from 'react-router-dom';
import dogOfTheDay from '../dogOfTheDay.jpg';
import './index.css';

function HomeScreen() {
  return (
    <div className="row">
      <div className="col-md-7">
      <div class="center-heading"><b>Welcome to Doggo Mingle!</b></div>
      <div class="center-sub-heading"><p><b>A marketplace for dog owners, merchants, and specialists to connect</b></p></div>

        <iframe
          className="embed-responsive-item"
          src="https://www.google.com/maps/embed?pb=..."
          allowFullScreen
          style={{ width: '100%', height: '400px' }}
        ></iframe>
        <br/>
        <TuitsList/>
      </div>
      <div className="col-md-3">
        <br></br>
      <p className="text-center">Need an account? Sign in or join below!</p>
        <div className="d-flex justify-content-center mb-3">
          <Link to="/login" className="btn btn-primary">Login or Register</Link>
        </div>
        <b className="d-flex justify-content-center dog-of-day-spacing dog-of-day-title">Dog of the Day !</b>
        <div className="d-flex justify-content-center mb-3">
          <img
            src={dogOfTheDay}
            className="img-fluid"
            width={250}
          />
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
