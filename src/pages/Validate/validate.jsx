import React from 'react'
import Navbar from '../../Components/Landingpage/Navbar/navbar';
import "../../Components/BootCamp/NewsLetterBootcamp/style/style.css";
import Footer from '../../Components/Landingpage/Footer/footer'
import Validated from '../../Components/BootCamp/Validate/validate';

function Validate() {
  return (
    <div>
     <Navbar/>
     <Validated/>
     <div
        className="mx-12 rounded-lg imgBackground"
        style={{ border: "1px solid #001975" }}
      >
    
      </div>
      <Footer/>


    </div>
  )
}
export default Validate
