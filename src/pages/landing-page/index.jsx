// import React from "react";
import Navbar from "../../Components/Landingpage/Navbar/navbar";
import Identity from "../../Components/Landingpage/WhoWeAre/identity";
import Sponsor from "../../Components/Landingpage/Sponsor/sponsor";
import Testimonial from "../../Components/Landingpage/Testimonial/testimonial";
import OurTeam from "../../Components/Landingpage/Our-team/ourTeam";
import CTA from "../../Components/Landingpage/CTA";
import WhyChooseUs from "../../Components/Landingpage/WhyChooseUs";
import Newsletter from "../../Components/Landingpage/Newsletter Section/newsletter";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Sponsor />
      <WhyChooseUs />
      <Testimonial />
      <Identity />
      <OurTeam />
      <Newsletter />
      <CTA />
      
    </>
  );
};

export default LandingPage;
