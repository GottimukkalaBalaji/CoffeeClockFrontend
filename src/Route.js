import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import AboutUs from "./pages/AboutUs";
import BlogPost from "./pages/BlogPost";
import ContactUs from "./pages/ContactUs";
import OurProducts from "./pages/OurProducts";
import Footer from "./pages/Footer";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/our-products" element={<OurProducts />} />
      <Route path="/our-Blog" element={<BlogPost />} />
      <Route path="/contact-us" element={<ContactUs />}  />
      <Route path="/footer" element={<Footer />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
