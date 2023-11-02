import  { useEffect } from 'react';
import './App.css'
import AosInitializer from './assets/aosInitializer';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing-page';
import Homepage from './pages/homepage/homepage';
import Profilepage from './pages/Profilepage/profilepage/';

function App() {

  useEffect(() => {
    AosInitializer();
  }, []);


  return (
     <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Homepage />} /> 
        <Route path="/profile" element={<Profilepage />} />
        <Route path="/pricing" element-={<Pricing />} />
        <Route path="/course-catalog" element-={<Catalog />} />
      </Routes>
     </> 
     
  )
}

export default App;
