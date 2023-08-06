import React from "react";
import TuitsList from "../tuits";
import { Link } from "react-router-dom";
import dog1 from "../images/dog1.jpg";
import dog2 from "../images/dog2.png";
import dog3 from "../images/dog3.jpg";
import dog4 from "../images/dog4.jpg";
import "./home.css";

function HomeScreen() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8 order-2 order-md-1">
          <div className="center-heading">
            <b>Welcome to Doggo Mingle!</b>
          </div>
          <div className="center-sub-heading">
            <p>
              <b>
                A marketplace for dog owners, merchants, and specialists to
                connect
              </b>
            </p>
          </div>

          <iframe
            className="embed-responsive-item"
            src="https://www.google.com/maps/embed?pb=..."
            allowFullScreen
            style={{ width: "100%", height: "400px" }}
            title="map"
          ></iframe>
          <br />
          <TuitsList />
        </div>
        <div className="col-md-4 order-1 order-md-2">
          {/* ensured that the 'Dog of the Day' image and 'Login or Register' button
          will appear at the top on small screens and return to the side on
          larger screens. */}
          <br></br>
          <p className="text-center">Need an account? Sign in or join below!</p>
          <div className="d-flex justify-content-center mb-3">
            <Link to="/login" className="btn btn-primary">
              Login or Register
            </Link>
          </div>
          <b className="d-flex justify-content-center dog-of-day-spacing dog-of-day-title">
            Dog of the Day !
          </b>

          <div className="d-flex justify-content-center mb-3 frame">
            <div className="image-container">
              <img
                src={dog1}
                alt="first dog"
                className="img-fluid"
                width={360}
                height={360}
              />
              <img
                src={dog2}
                alt="second dog"
                className="img-fluid"
                width={360}
                height={360}
              />
              <img
                src={dog3}
                alt="third dog"
                className="img-fluid"
                width={360}
                height={360}
              />
              <img
                src={dog4}
                alt="forth dog"
                className="img-fluid"
                width={360}
                height={360}
              />
              {/* ... other images ... */}
              <img
                src={dog1}
                alt="repeat first dog"
                className="img-fluid"
                width={360}
                height={360}
              />
              <img
                src={dog2}
                alt="repeat second dog"
                className="img-fluid"
                width={360}
                height={360}
              />
              <img
                src={dog3}
                alt="repeat third dog"
                className="img-fluid"
                width={360}
                height={360}
              />
              <img
                src={dog4}
                alt="repeat forth dog"
                className="img-fluid"
                width={360}
                height={360}
              />
              {/* ... duplicate other images ... */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
