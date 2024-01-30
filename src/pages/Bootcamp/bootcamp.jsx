import React from "react";
import Navbar from "../../Components/Landingpage/Navbar/navbar";
import HeroBootcamp from "../../Components/BootCamp/Hero/Hero";
import AboutBootcamp from "../../Components/BootCamp/About/About";
import BenefitBootcamp from "../../Components/BootCamp/Benefits/Benefit";
import Pricing from "../../Components/BootCamp/Pricing/pricing";
import Footer from "../../Components/Landingpage/Footer/footer";
import FaqBootcamp from "../../Components/BootCamp/FAQ/faq";
import Attend from "../../Components/BootCamp/Attend/attend";
import Tutors from "../../Components/BootCamp/Tutors/tutors";
import "../../Components/BootCamp/NewsLetterBootcamp/style/style.css";
import "../../pages/Bootcamp/Style/boot.css";
import NewsLetterBootcamp from "../../Components/BootCamp/NewsLetterBootcamp/newsLetterBootcamp";

const BootCamp = () => {
  return (
    <>
      <Navbar />
      <HeroBootcamp />
      <AboutBootcamp />
      <BenefitBootcamp />
      <div className="background">
        <Pricing />
        <Attend />
      </div>
      <Tutors />
      <div className="mb-32">
        <FaqBootcamp />
      </div>
      <div
        className="mx-12 rounded-lg imgBackground"
        style={{ border: "1px solid #001975" }}
      >
        <NewsLetterBootcamp />
      </div>
      <Footer />
    </>
  );
};

export default BootCamp;
