import React from "react";
import { useEffect } from "react";
import "./App.css";
import { LoadingProvider } from "./Components/BootCamp/Context/LoadingContext";
import AosInitializer from "./assets/aosInitializer";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page";
import Homepage from "./pages/homepage/homepage";
import ProfilePage from "./pages/Profilepage/profilepage";
import Pricing from "./pages/Pricing/pricing";
import Catalog from "./pages/Coursecatalog/course";
import Layout from "./Components/layout";
import ResourcePage from "./pages/Resource-Page/resource";
import AboutUsPage from "./pages/About-Us/about";
import SignInPage from "./pages/Sign-In/signin";
import SignUpPage from "./pages/Sign-Up/signup";
import ComingPage from "./pages/comesoon/coming";
import ComingSoonPage from "./pages/ComingSoon/soon";
import { ChakraProvider } from "@chakra-ui/react";
import BlogPage from "./pages/blog";
import ContactUs from "./pages/Contact-Us/contact";
import BootCamp from "./pages/Bootcamp/bootcamp";
import Registration from "./pages/Register/registration";
import Validate from "./pages/Validate/validate";


function App() {
  useEffect(() => {
    AosInitializer();
  }, []);

  return (
    <>
      <ChakraProvider>
        <LoadingProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/boot-camp" element={<BootCamp />} />
          <Route path="/register" element={<Registration/>} />
          <Route path="/validate" element={<Validate/>} />
          <Route path="/pricing" element={<Pricing />} />
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
        </LoadingProvider>
      </ChakraProvider>
    </>
  );
}

export default App;
