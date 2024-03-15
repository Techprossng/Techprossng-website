import React from 'react';
import "../Hero/Style/Hero.css";
import { FaRegCalendarCheck } from "react-icons/fa6";
import HeroImage from "../Hero/Image/hero1.svg"
import HeroImageBig from "../Hero/Image/HeroImgBig.svg"


function HeroBootcamp() {
     return (
          <div className='hero-bootcamp px-20 py-12'>
               <div className='mt-32 flex gap-5 items-center text-[#000] hero-bootcamp-inner'>
                    <div className='w-[50%] mb-[3%] hero-left'>
                         <div className='date flex  gap-[5px] w-[544px] h-[50px] p-[8px]'>
                              <FaRegCalendarCheck size={27} className='ml-2 mt-[2px] calender'/>
                              <h5 className='font-primary text-[23px] font-semibold  '>STARTING: MONDAY, 1ST APRIL, 2024</h5>
                         </div>
                         <div>
                              <div className='hero-header-date mt-4'> 
                                   <h4 className='text-[55px]  font-primary font-bold'> Tech Career <br className='break-25'/> Launchpad</h4>
                                   
                              </div>
                              <div className='mt-4  hero-description'>
                                   <p className='text-[24px]'> Come and invest in your future by getting into tech with  our 2-weeks power loaded bootcamp for every one inclusive </p>
                              </div>
                         </div>
                         <div className='mt-4'>
                              <button className='hero-register  w-[296px] h-[52px] px-5 py-3 mt-4'>
                              <a href="/register" className='text-[19px] font-medium' >Register</a>
                              </button>
                         </div>
                    </div> 
                    <div className='w-[50%] hero-right'>
                         <img src={HeroImage} alt="Hero image people learning"  className='hero-image-normal'/>
                         <img src={HeroImageBig} alt="Hero image people learning" className='hero-image-large' />
                    </div>                    
               </div>
          </div>
     )
}

export default HeroBootcamp