// import React from "react";
import Navbar from "../../Components/Landingpage/Navbar/navbar";
import Sponsor from "../../Components/Landingpage/Sponsor/sponsor";
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
      <Sponsor />
      <WhyChooseUs />
      <Testimonial />
      <OurTeam />
      <Newsletter />
      <CTA />
      <Footer />
    </>
  );
};

export default LandingPage;
