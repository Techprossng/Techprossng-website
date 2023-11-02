import  { useEffect } from 'react';
import './App.css'
import AosInitializer from './assets/aosInitializer';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing-page';
import Homepage from './pages/homepage/homepage';
<<<<<<< HEAD
import ProfilePage from './pages/Profilepage/profilepage';
import Pricing from './pages/Pricing/pricing';
import Catalog from './pages/Coursecatalog/course';
import Layout from './Components/layout';


=======
import Layout from './Components/layout';
>>>>>>> 641268f (home page completed)

function App() {

  useEffect(() => {
    AosInitializer();
  }, []);


  return (
     <>
      <Routes>
        <Route path="/" element={<Layout><LandingPage /></Layout>} />
        <Route path="/home" element={<Layout><Homepage /></Layout>} /> 
<<<<<<< HEAD
        <Route path="/profile" element={<Layout><ProfilePage/></Layout>} />
        <Route path="/pricing" element={<Layout><Pricing /></Layout>} />
        <Route path="/course-catalog" element={<Layout><Catalog /></Layout>} />
=======
>>>>>>> 641268f (home page completed)
      </Routes>
     </> 
  )
}

export default App;
