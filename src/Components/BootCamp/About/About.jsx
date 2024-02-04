import React from 'react'; 
import "../About/Style/About.css";
import AboutOne from "../About/Image/about1.svg"
import AboutTwo from "../About/Image/about2.svg"

function AboutBootcamp() {
  return (
     <div className=' w-full h-[100%] px-12 py-12  main-about-us '>
      <div className=' px-20 mt-10 flex gap-[2%] main-about-container '>
     <div className='w-[50%] flex space-x-[-40%] '>
          <div className=' main-about-header'>
          <h1 className=' text-[60px] font-bold'>About The Bootcamp</h1>

          </div>
          <div className=' mb-[30%]'>
          <img src={AboutOne} className='About-one-image'/>

          </div>
         

     </div>
     <div className='w-[50%]'>
     <div className=' about-right-content'>
       <p className='about-span font-medium '>TechProsNaija is gearing up for an extraordinary upcoming bootcamp, promising an immersive learning experience with a diverse array of over 10 cutting-edge courses. This educational extravaganza is set to be a game-changer, providing participants with in-depth insights and hands-on skills in various tech domains.</p>
       <div className=''>
         <img src={AboutTwo} className=' About-two-image '/>
       </div>

     </div>
     </div>
     </div>
         
     </div>
  )
}

export default AboutBootcamp;