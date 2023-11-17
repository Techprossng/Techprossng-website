import  { useEffect } from 'react';
import './App.css'
import AosInitializer from './assets/aosInitializer';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing-page';
import Homepage from './pages/homepage/homepage';
import Layout from './Components/layout';
import Profilepage from './pages/Profilepage/profilepage/';
import Pricing from "./pages/Pricing/pricing";
import Catalog from './pages/Coursecatalog/course';
import Personal from './pages/Personalpage/personal';

function App() {

  useEffect(() => {
    AosInitializer();
  }, []);


  return (
     <>
      <Routes>
        <Route path="/" element={<Layout><LandingPage /></Layout>} />
        <Route path="/home" element={<Layout><Homepage /></Layout>} /> 
        <Route path="/profile" element={<Layout><Profilepage/></Layout>} />
        <Route path="/pricing" element={<Layout><Pricing /></Layout>} />
        <Route path="/course-catalog" element={<Layout><Catalog /></Layout>} />
        <Route path="/personal" element={<Layout><Personal /></Layout>} />
      </Routes>
     </> 
  )
}

export default App;
