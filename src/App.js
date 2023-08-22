import { BrowserRouter, HashRouter, useLocation } from "react-router-dom";
import HomeScreen from "./home-screen";
import CompetitionScreen from "./competition-screen";
import ProfileOthers from "./profile-screen/profile-others";
import ClientScreen from "./client-screen";
import userDetailReducer from "./reducers/find_user_details";
import RegisterScreen from "./register-screen";
import NavigationSidebar from "./navigation-sidebar";
import SearchResult from "./search result";
import { Routes, Route, Navigate } from "react-router";
import { Provider } from "react-redux";
import authReducer from "./reducers/auth-reducer";
import { configureStore } from "@reduxjs/toolkit";
import LoginScreen from "./login-screen";
import whoReducer from "./reducers/who-reducer";
import Profile from "./profile-screen";
import tuitsReducer from "./reducers/tuits-reducer";
import "./App.css";
import searchReducer from "./reducers/search-reducer";
import searchIdReducer from "./reducers/searchId-reducer";
import Details from "./details-screen"; // Import the App.css file
const store = configureStore({
  reducer: { who: whoReducer, tuits: tuitsReducer, user: authReducer,places: searchReducer,
    placesDetails: searchIdReducer, userDetails: userDetailReducer },
});
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="container">
          {/* "app-container" is not the Bootstrap container
          container fluid: no margin
          container: with margin */}
          <br></br>
          <div className="row">
            <div className="col-1 col-md-2 col-lg-2 d-flex justify-content-center">
            <div className="d-none d-md-block">
                <NavigationSidebar />
              </div>
            </div>
            <div className="col-11 col-md-10 col-lg-10">
              <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home/*" element={<HomeScreen />} />
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/register" element={<RegisterScreen />} />
                <Route path="/profile/*" element={<Profile />} />
                <Route path="profile/:userId" element={<ProfileOthers />} />
                <Route path="/details/*" element={<Details />} />
                <Route path="/search/*" element={<SearchResult />} />
                <Route path="/competition" element={<CompetitionScreen />} />
                <Route path="/client" element={<ClientScreen />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
