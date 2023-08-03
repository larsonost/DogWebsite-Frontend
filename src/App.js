import { HashRouter, useLocation } from "react-router-dom";
import HomeScreen from "./home-screen";
import RegisterScreen from "./register-screen";
import NavigationSidebar from "./navigation-sidebar";
import { Routes, Route, Navigate } from "react-router";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import LoginScreen from "./login-screen";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
// import './App.css'; // Import the App.css file
const store = configureStore({
  reducer: { who: whoReducer, tuits: tuitsReducer },
});
function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <br></br>

        <div className="container">
          {/* "app-container" is not the Bootstrap container
          container fluid: no margin
          container: with margin */}
          <div className="row">
            <div className="col-1 col-md-2 col-lg-2 d-flex justify-content-center">
              <NavigationSidebar />
            </div>
            <div className="col-11 col-md-10 col-lg-10">
              <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home/*" element={<HomeScreen />} />
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/register" element={<RegisterScreen />} />
              </Routes>
            </div>
          </div>
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
