// import React from "react";
import Navbar from "../../Components/Landingpage/Navbar/navbar";
import Hero from "../../Components/Landingpage/Hero section/hero";
import Mission from "../../Components/Landingpage/Mission/mission-vision";
import Services from "../../Components/Landingpage/Services/services";
import Identity from "../../Components/Landingpage/WhoWeAre/identity";
import Sponsor from "../../Components/Landingpage/Sponsor/sponsor";
import Values from "../../Components/Landingpage/Our-values/Values";
import Testimonial from "../../Components/Landingpage/Testimonial/testimonial";
import OurTeam from "../../Components/Landingpage/Our-team/ourTeam";
import CTA from "../../Components/Landingpage/CTA";
import WhyChooseUs from "../../Components/Landingpage/WhyChooseUs";
import Footer from "../../Components/Landingpage/Footer/footer";
import Newsletter from "../../Components/Landingpage/Newsletter Section/newsletter";



const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Identity />
      <Services />
      <WhyChooseUs />
      <Sponsor />
      <Mission />
      <Values />
      <Testimonial />
      <OurTeam />
      <Newsletter />
      <CTA />
      <Footer />
    </>
  );
};

export default LandingPage;
