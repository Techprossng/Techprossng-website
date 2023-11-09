import  { useEffect } from 'react';
import './App.css'
import AosInitializer from './assets/aosInitializer';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing-page';
import Homepage from './pages/homepage/homepage';
import ProfilePage from './pages/Profilepage/profilepage';
import Pricing from './pages/Pricing/pricing';
import Catalog from './pages/Coursecatalog/course';
import Layout from './Components/layout';
import ResourcePage from './pages/Resource-Page/resource';



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
        <Route path="/course-catalog" element={<Layout><Catalog /></Layout>} />
        <Route path="/resource-page" element={<Layout><ResourcePage /></Layout>} />
      </Routes>
     </> 
  )
}

export default App;
