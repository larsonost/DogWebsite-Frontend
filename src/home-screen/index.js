import React from "react";
import { useSelector } from "react-redux";
import OwnerPosts from "./posts/owner-posts";
import GuestPosts from "./posts/guest-posts";
import MerchantPosts from "./posts/merchant-posts";
import SpecialistPosts from "./posts/specialist-posts";
import TuitsList from "../tuits";
import { Link } from "react-router-dom";
import dog1 from "../images/dog1.jpg";
import dog2 from "../images/dog2.png";
import dog3 from "../images/dog3.jpg";
import dog4 from "../images/dog4.jpg";
import "./home.css";
import "./corgi.css";

function HomeScreen() {
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser)
  const handleButtonClick2 = () => {
    console.log(currentUser.data.role);
  };
  const printCurrentUserDogs = () => {
    console.log(currentUser.data.dogs.length);
  };
  let UserSpecificPosts;

  if (!currentUser) {
    UserSpecificPosts = <GuestPosts />;
} else {
    let userRole = currentUser.data.role.toLowerCase();
    if (userRole === "owner") {
        UserSpecificPosts = <OwnerPosts />;
    } else if (userRole === "merchant") {
        UserSpecificPosts = <MerchantPosts />;
    } else if (userRole === "specialist") {
        UserSpecificPosts = <SpecialistPosts />;
    } else {
        UserSpecificPosts = null;  // or a default content if needed
    }
}
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8 order-2 order-md-1">
          <div className="heading-container">
            <div className="center-heading">
              <b>Welcome to Doggo Mingle!</b>
            </div>
            <div className="center-sub-heading">
              <p>
                <b>For dog owners, merchants, and specialists to connect</b>
              </p>
              {/* Changed the wording of the sub-heading */}
            </div>
            <div>
      <button onClick={printCurrentUserDogs}>Print Current User's Dogs</button>
    </div>
            <div>
            </div>
          </div>
          <hr />
          <br />
          {UserSpecificPosts}
          <br />
          <TuitsList />
        </div>
        <div className="col-md-4 order-1 order-md-2">
          {/* ensured that the 'Dog of the Day' image and 'Login or Register' button
          will appear at the top on small screens and return to the side on
          larger screens. */}

          {/* corgi*/}
          <div className="corgi-container">
            <div className="wrapper">
              <div className="wave"></div>
            </div>
            <div className="corgi-wrapper mt-4 d-flex justify-content-center">
              {/* corgi icon */}
              <br /> <br />
              <div className="corgi">
                <div className="head">
                  <div className="ear ear--r"></div>
                  <div className="ear ear--l"></div>

                  <div className="eye eye--left"></div>
                  <div className="eye eye--right"></div>

                  <div className="face">
                    <div className="face__white">
                      <div className=" face__orange face__orange--l"></div>
                      <div className=" face__orange face__orange--r"></div>
                    </div>
                  </div>

                  <div className="face__curve"></div>

                  <div className="mouth">
                    <div className="nose"></div>
                    <div className="mouth__left">
                      <div className="mouth__left--round"></div>
                      <div className="mouth__left--sharp"></div>
                    </div>

                    <div className="lowerjaw">
                      <div className="lips"></div>
                      <div className="tongue test"></div>
                    </div>

                    <div className="snout"></div>
                  </div>
                </div>

                <div className="neck__back"></div>
                <div className="neck__front"></div>

                <div className="body">
                  <div className="body__chest"></div>
                </div>

                <div className="foot foot__left foot__front foot__1"></div>
                <div className="foot foot__right foot__front foot__2"></div>
                <div className="foot foot__left foot__back foot__3"></div>
                <div className="foot foot__right foot__back foot__4"></div>

                <div className="tail test"></div>
              </div>
            </div>
            <div className="surfboard-button-container mb-3">
                <Link to="/login" className="surfboard-button">
                  <i className="fas fa-paw"></i> Login or Register <i className="fas fa-paw"></i>
                </Link>
              </div>
          </div>
          {/* coggi icon */}

          {/* <p className="text-center">Need an account? Sign in or join below!</p> */}

          <div className="d-flex justify-content-center dog-of-day-title">
            Dog of the Day !
          </div>
          <div className="d-flex justify-content-center">
            <div className="mb-3 frame">
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
    </div>
  );
}

export default HomeScreen;
