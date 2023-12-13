import { useEffect } from "react";
import "./App.css";
import AosInitializer from "./assets/aosInitializer";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page";
import Homepage from "./pages/homepage/homepage";
import ProfilePage from "./pages/Profilepage/profilepage";
import Pricingpage from "./pages/Pricing/pricing";
import Catalog from "./pages/Coursecatalog/course";
import Layout from "./Components/layout";
import ResourcePage from "./pages/Resource-Page/resource";
import AboutUsPage from "./pages/About-Us/about";
import SignInPage from "./pages/Sign-In/signin";
import SignUpPage from "./pages/Sign-Up/signup";
import ComingPage from "./pages/comesoon/coming";
import ComingSoonPage from "./pages/ComingSoon/soon";
import BlogPage from "./pages/blog";
import ContactUs from "./pages/Contact-Us/contact"
import React from 'react';


function App() {
  useEffect(() => {
    AosInitializer();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Homepage />} /> 
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/pricing" element={<Pricingpage />} />
        <Route path="/course-catalogue" element={<Catalog />} />
        <Route path="/resource-page" element={<ResourcePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/coming" element={<ComingSoonPage />} />
        <Route path="/coming-soon" element={<ComingPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
       </Routes>
     </> 
  )
}

export default App;
