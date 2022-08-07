import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter, NavLink } from "react-router-dom";
import Navigation from "./component/Navigation/Navigation";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      {/* <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about-us">About us</NavLink>
      </div> */}
      <Navigation />
      <footer>Footer Component</footer>
    </BrowserRouter>
  );
}

export default App;
