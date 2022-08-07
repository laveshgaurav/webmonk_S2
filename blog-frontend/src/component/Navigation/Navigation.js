import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter, NavLink } from "react-router-dom";
import AboutUs from "../../pages/AboutUs";
import Home from "../../pages/Home";
function Navigation() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Suspense>
  );
}

export default Navigation;
