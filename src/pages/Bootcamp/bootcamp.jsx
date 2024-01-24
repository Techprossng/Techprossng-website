import React from "react";
import Navbar from "../../Components/Landingpage/Navbar/navbar";
import AboutBootcamp from "../../Components/BootCamp/About/About";
import Pricing from "../../Components/BootCamp/Pricing/pricing";
import Footer from "../../Components/Landingpage/Footer/footer";
import FaqBootcamp from "../../Components/BootCamp/FAQ/faq";
import Attend from "../../Components/BootCamp/Attend/attend";

const BootCamp = () => {
  return (
    <>
      <Navbar />
      <AboutBootcamp />
      <Pricing />
      <Attend />
      <FaqBootcamp />
      <Footer />
    </>
  );
};

export default BootCamp;
