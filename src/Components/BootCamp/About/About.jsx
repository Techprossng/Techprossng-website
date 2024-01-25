import React from 'react'; 
import "../About/Style/About.css";
import AboutOne from "../About/Image/about1.svg"
import AboutTwo from "../About/Image/about2.svg"

function AboutBootcamp() {
  return (
     <div className='px-6 py-12 md:px-12 mt-24'>
          <div className='bootcamp-about-main flex pt-[64px] pl-[80px]'>
               <div>
                    <h4 className='text-5xl text-[#000] font-primary font-bold'>
                         About The
                    </h4>
                    <h4 className='text-5xl text-[#000] font-secondary font-normal'>
                         BOOTCAMP
                    </h4>
                    {/* <div className='mobile-tutor-photo'>
                         <img src={AboutOne} alt="Tutor Photo" />
                    </div> */}
               </div>
               
               <div className='about-second-section flex justify-between gap-3'>
                    <div className='tutor-photo'>
                         <img src={AboutOne} alt="Tutor Photo" />
                    </div>
                    <div className='flex flex-col gap-4'>
                         <div className='mt-16'>
                              <p className='bootcamp-about-text pl-7 font-secondary text-xs font-medium text-justify '>
                              TechProsNaija is gearing up for an extraordinary upcoming bootcamp, promising 
                              an immersive learning experience with a diverse array of over 10 cutting-edge courses. 
                              This educational extravaganza is set to be a game-changer, providing participants 
                              with in-depth insights and hands-on skills in various tech domains.
                              </p>
                         </div>
                         <div className='bootcamp-classroom-photo'>
                              <img src={AboutTwo} alt="Classroom photo" />
                         </div>
                    </div>
               </div>    
          </div>
     </div>
  )
}

export default AboutBootcamp;