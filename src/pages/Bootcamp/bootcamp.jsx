import React from 'react';
import Navbar from '../../Components/Landingpage/Navbar/navbar';
import AboutBootcamp from '../../Components/BootCamp/About/About';
import Pricing from '../../Components/BootCamp/Pricing/pricing';
import Footer from '../../Components/Landingpage/Footer/footer';
import Attend from '../../Components/BootCamp/Attend/attend';

const BootCamp = () => {
  return (
    <>
    <Navbar />
    <AboutBootcamp />
    <Pricing/>
    <Attend/>
    <Footer />
    </>
  )
}

export default BootCamp;