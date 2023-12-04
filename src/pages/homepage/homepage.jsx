import React from "react";
import Library from "../../Components/Homepage/Resource Library/library";
import Navbar from "../../Components/Homepage/Navbar/navbar";
import Progress from "../../Components/Homepage/InProgress/progress";
import FromOurCommunity from "../../Components/Homepage/FromOurCommunity";
import Footer from "../../Components/Landingpage/Footer/footer";
import Recommended from "../../Components/Homepage/Recommended/recommended";
import Topcourses from "../../Components/Homepage/TopCourses/topCourses";
import Hero from "../../Components/Homepage/Carousel";


const Homepage = () => {
    return (
        <>
        <Navbar/>
        <Hero />
        <Progress/>
      <Recommended />
        <Library />
      <Topcourses />
        <FromOurCommunity />
        <Footer/>
        </>
    );
    }

export default Homepage;
