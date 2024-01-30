import React from 'react';
import "../Hero/Style/Hero.css";
import { FaRegCalendarCheck } from "react-icons/fa6";


function HeroBootcamp() {
     return (
          <div className='hero-bootcamp px-6 py-12'>
               <div className='mt-32  items-center text-[#fff]'>
                  <div className='flex justify-center w-full'>
                  <div className='date flex justify-center w-[400px] text-center h-[50px] p-[14px]'>
                         <FaRegCalendarCheck size={20}/>
                         <h5 className='font-primary text-[16px]  font-semibold '>STARTING: MONDAY, 4TH MARCH, 2024</h5>
                    </div>
                  </div>
                    <div>
                         <div className='hero-date  text-center'> 
                              <h4 className='text-[80px] text-center font-primary font-bold'> 2 WEEKS<span className='text-[80px] font-secondary font-normal'>BOOTCAMP</span> </h4> 
                         </div>
                         <div className='pt-8  text-center items-center hero-description gap-2'>
                              <p className='text-[24px]'> Come and invest in your future by getting into tech with our 2-weeks power<br className='line-break-3'/>
                              loaded bootcamp for every one inclusive </p>
                         </div>
                    </div>
                    <div className='flex justify-center'>
                    <button className='hero-register  w-[206px] h-[52px] px-5 py-3 mt-16'>
                         <a href="#">Register</a>
                    </button>
                    </div>
               </div>
          </div>
     )
}

export default HeroBootcamp