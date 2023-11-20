// import React from "react";
import Navbar from "../../Components/Landingpage/Navbar/navbar";
import Hero from "../../Components/Landingpage/Hero section/hero";
import Services from "../../Components/Landingpage/Services/services";
import Identity from "../../Components/Landingpage/WhoWeAre/identity";
import Sponsor from "../../Components/Landingpage/Sponsor/sponsor";
import Values from "../../Components/Landingpage/Our-values/Values";
import Testimonial from "../../Components/Landingpage/Testimonial/testimonial";
import CTA from "../../Components/Landingpage/CTA";
import WhyChooseUs from "../../Components/Landingpage/WhyChooseUs";
import Footer from "../../Components/Landingpage/Footer/footer";
import Newsletter from "../../Components/Landingpage/Newsletter Section/newsletter";
import StatsImpactVideo from "../../Components/Landingpage/Stats-ImpactVideo/s-iv";



const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Identity />
      <Services />
      <WhyChooseUs />
      <Values />
      <Sponsor />
      <Testimonial />
      <StatsImpactVideo />
      <Newsletter />
      <CTA />
      <Footer />
    </>
  );
};

export default LandingPage;
