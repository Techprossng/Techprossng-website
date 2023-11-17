import { useEffect } from "react";
import "./App.css";
import AosInitializer from "./assets/aosInitializer";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page";
import Homepage from "./pages/homepage/homepage";
import ProfilePage from "./pages/Profilepage/profilepage";
import Pricing from "./pages/Pricing/pricing";
import Personal from './pages/Personalpage/personal';
import Catalog from "./pages/Coursecatalog/course";
import Layout from "./Components/layout";
import ResourcePage from "./pages/Resource-Page/resource";
import AboutUsPage from "./pages/About-Us/about";
import SignInPage from "./pages/Sign-In/signin";
import SignUpPage from "./pages/Sign-Up/signup";

function App() {
  useEffect(() => {
    AosInitializer();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout><LandingPage /></Layout>} />
        <Route path="/home" element={<Layout><Homepage /></Layout>} /> 
        <Route path="/profile" element={<Layout><ProfilePage/></Layout>} />
        <Route path="/pricing" element={<Layout><Pricing /></Layout>} />
        <Route path="/personal" element={<Layout><Personal /></Layout>} />
        <Route path="/course-catalogue" element={<Layout><Catalog /></Layout>} />
        <Route path="/resource-page" element={<Layout><ResourcePage /></Layout>} />
        <Route path="/about-us" element={<Layout><AboutUsPage /></Layout>} />
        <Route path="/sign-in" element={<Layout><SignInPage /></Layout>} />
        <Route path="/sign-up" element={<Layout><SignUpPage /></Layout>} />
       </Routes>
     </> 
  )
}

export default App;
