import React, { useEffect } from 'react';
import './App.css'
import AosInitializer from './assets/aosInitializer';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing-page';
import Homepage from './pages/homepage/homepage';

function App() {

  useEffect(() => {
    AosInitializer();
  }, []);


  return (
     <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Homepage />} />
      </Routes>
     </> 
     
  )
}

export default App;
