// import React from "react";
import Navbar from "../../Components/Landingpage/Navbar/navbar";
import Sponsor from "../../Components/Landingpage/Sponsor/sponsor";
import Testimonial from "../../Components/Landingpage/Testimonial/testimonial";
import OurTeam from "../../Components/Landingpage/Our-team/ourTeam";
import CTA from "../../Components/Landingpage/CTA";
import WhyChooseUs from "../../Components/Landingpage/WhyChooseUs";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Sponsor/>
      <Testimonial />
      <OurTeam />
      <CTA />
      <WhyChooseUs />
      
    </>
  );
};

export default LandingPage;
