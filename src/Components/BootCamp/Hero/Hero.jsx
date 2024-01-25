import React from 'react';
import "../Hero/Style/Hero.css";
import { FaRegCalendarCheck } from "react-icons/fa6";


function HeroBootcamp() {
     return (
          <div className='hero-bootcamp px-6 py-12'>
               <div className='mt-32 flex gap-8 flex-col items-center text-[#fff]'>
                    <div className='date flex gap-2 items-center'>
                         <FaRegCalendarCheck />
                         <h5 className='font-primary font-semibold text-sm'>STARTING: MONDAY, 4TH MARCH, 2024</h5>
                    </div>
                    <div>
                         <div className='hero-date flex justify-center gap-2'> 
                              <h4 className='text-5xl font-primary font-bold'> 2 WEEKS </h4> 
                              <h4 className='text-5xl font-secondary font-normal'> BOOTCAMP</h4> 
                         </div>
                         <div className='pt-8 flex flex-col items-center gap-2'>
                              <p> Come and invest in your future by getting into tech with our 2-weeks power
                              loaded bootcamp for every on einclusive </p>
                         </div>
                    </div>
                    <div className='hero-register mt-16'>
                         <a href="#">Register</a>
                    </div>
               </div>
          </div>
     )
}

export default HeroBootcamp