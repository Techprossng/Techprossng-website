import React, { useEffect } from 'react';
import './App.css'
import AosInitializer from './assets/aosInitializer';
import LandingPage from './pages/landing-page';

function App() {

  useEffect(() => {
    AosInitializer();
  }, []);


  return (
     <>
      <LandingPage/>
     </> 
     
  )
}

export default App;
