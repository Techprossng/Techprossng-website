import React from 'react'
import Navbar from '../../Components/Landingpage/Navbar/navbar'
import "../../Components/BootCamp/NewsLetterBootcamp/style/style.css";
import Register from '../../Components/BootCamp/Register/register';
import NewsLetterBootcamp from '../../Components/BootCamp/NewsLetterBootcamp/newsLetterBootcamp'
import Footer from '../../Components/Landingpage/Footer/footer'

function Registration() {
  return (
    <div>
     <Navbar/>
     <Register/>
     <div
        className="mx-12 rounded-lg imgBackground"
        style={{ border: "1px solid #001975" }}
      >
        <NewsLetterBootcamp />
      </div>
      <Footer/>


    </div>
  )
}

export default Registration