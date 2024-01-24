import React from 'react';
import Navbar from '../../Components/Landingpage/Navbar/navbar';
import HeroBootcamp from '../../Components/BootCamp/Hero/Hero';
import AboutBootcamp from '../../Components/BootCamp/About/About';
import BenefitBootcamp from '../../Components/BootCamp/Benefits/Benefit';
import Pricing from '../../Components/BootCamp/Pricing/pricing';
import Footer from '../../Components/Landingpage/Footer/footer';

const BootCamp = () => {
  return (
    <>
    <Navbar />
    <HeroBootcamp />
    <AboutBootcamp />
    <BenefitBootcamp />
    <Pricing/>
    <Footer />
    </>
  )
}

export default BootCamp;