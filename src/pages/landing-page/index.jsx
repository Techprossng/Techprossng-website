// import React from "react";
import Mission from "../../Components/Landingpage/Mission/mission-vision";
import Services from "../../Components/Landingpage/Services/services";
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
      <Identity />
      <Services />
      <WhyChooseUs />
      <Sponsor />
      <Mission />
      <Testimonial />
      <OurTeam />
      <Newsletter />
      <CTA />
      
    </>
  );
};

export default LandingPage;
