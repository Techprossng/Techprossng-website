import React from 'react';
import "../Benefits/Style/Benefit.css";
import { MdPeopleAlt } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaBookReader } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";

function BenefitBootcamp() {
     return (
          <div className='bg-[#001975]'>
               <div className='text-[#fff] flex flex-col items-center p-5'>
                    <div className='flex gap-2'>
                         <h5>Bootcamp</h5> 
                         <h5>Benefits.</h5>
                    </div>
                    <div>
                         <p>Unlock boundless opportunities for professional growth 
                              and success by enrolling in the upcoming <br />TechProsNaija 
                              Bootcamp, where immersive learning, expert mentorship, 
                              and hands-on experience <br /> converge to propel your career in 
                              the dynamic world of technology</p>
                    </div>
                    <div className='flex gap-6 px-4'>
                         <div className='benefit-card text-[#000]'>
                              <MdPeopleAlt />
                              <h5>Best Tutors</h5>
                              <p>Experience unparalleled learning with the best tutors at your 
                                   disposal throughout the upcoming TechProsNaija Bootcamp, ensuring 
                                   personalized guidance and expertise to maximize your educational journey.</p>
                         </div>
                         <div className='benefit-card text-[#000]'>
                              <FaPeopleGroup />
                              <h5>Networking</h5>
                              <p>Forge invaluable connections and amplify your professional network through 
                                   interactive sessions and collaborative opportunities at the upcoming 
                                   TechProsNaija Bootcamp, where networking becomes an integral part of your 
                                   transformative learning experience.</p>
                         </div>
                         <div className='benefit-card text-[#000]'>
                              <FaBookReader />
                              <h5>Study Materials</h5>
                              <p>Equip yourself for success with comprehensive and industry-relevant study 
                                   materials provided at the upcoming TechProsNaija Bootcamp, ensuring a 
                                   robust foundation for your learning journey.</p>
                         </div>
                         <div className='benefit-card text-[#000]'>
                              <PiCertificateFill />
                              <h5>Bootcamp Certificate</h5>
                              <p>Upon successful completion of the TechProsNaija Bootcamp, you will be 
                                   awarded a prestigious certificate, validating your mastery of 
                                   cutting-edge skills and signaling your readiness for impactful contributions 
                                   in the tech industry.</p>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default BenefitBootcamp;