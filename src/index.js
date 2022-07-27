import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
// import HomePage from "./pages/HomePage";
import MyProfile from "./pages/MyProfile";
import EditProfile from "./pages/EditProfile";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <EditProfile />
    {/* <MyProfile /> */}
  </>
);
