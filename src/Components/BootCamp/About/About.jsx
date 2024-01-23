import React from 'react'; 
import "../About/Style/About.css";
import AboutOne from "../About/Image/about1.svg"
import AboutTwo from "../About/Image/about2.svg"

function AboutBootcamp() {
  return (
     <div className='px-6 py-12 md:px-12 mt-24'>
          <div className='flex pt-[64px] pl-[80px]'>
               <div className='w-[461px] h-[236.44px]'>
                    <h4 className='text-5xl text-[#000] font-primary font-bold'>
                         About The
                    </h4>
                    <h4 className='text-5xl text-[#000] font-secondary font-normal'>
                         BOOTCAMP
                    </h4>
               </div>
               <div className='flex justify-between gap-3'>
                    <div className=''>
                         <img src={AboutOne} alt="Tutor Photo" />
                    </div>
                    <div className='flex flex-col gap-4'>
                         <div className='mt-16'>
                              <p className='pl-7 font-secondary text-xs font-medium'>
                              TechProsNaija is gearing up for an extraordinary upcoming <br />bootcamp, promising 
                              an immersive learning experience with a <br />diverse array of over 10 cutting-edge courses. 
                              This educational <br />extravaganza is set to be a game-changer, providing participants 
                              with in-depth insights and hands-on skills in various tech domains.
                              </p>
                         </div>
                         <div className=''>
                              <img src={AboutTwo} alt="Classroom photo" />
                         </div>
                    </div>
               </div>    
          </div>
     </div>
  )
}

export default AboutBootcamp;