import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
// import HomePage from "./pages/HomePage";
import MyProfile from "./pages/MyProfile";
import {ButtonSmall} from "./components"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <MyProfile />
  </>
);
