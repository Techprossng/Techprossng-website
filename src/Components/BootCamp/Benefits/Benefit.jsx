import React from 'react';
import "../Benefits/Style/Benefit.css";
import { MdPeopleAlt, MdGroups2 } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";

function BenefitBootcamp() {
     return (
          <div className='bg-[#001975]'>
               <div className='text-[#fff] flex flex-col items-center p-5 gap-9'>
                    <div className='benefit-title text-center flex gap-2'>
                         <h5 className='text-5xl font-secondary font-normal'>Bootcamp</h5> 
                         <h5 className='text-5xl font-primary font-bold'>Benefits.</h5>
                    </div>
                    <div>
                         <p className='text-sm text-center font-secondary font-normal'>Unlock boundless opportunities for professional 
                              growth and success by enrolling in the upcoming <br/> TechProsNaija 
                              Bootcamp, where immersive learning, expert mentorship, 
                              and hands-on experience<br/>converge to propel your career in 
                              the dynamic world of technology</p>
                    </div>
                    <div className='benefit-card-holder flex gap-5 px-3'>
                         <div className='benefit-card-tray flex gap-5'>
                              <div className='benefit-card text-[#000] flex flex-col gap-3'>
                                   <MdPeopleAlt className='text-3xl'/>
                                   <h5 className='text-base font-primary font-bold'>Best Tutors</h5>
                                   <p className='text-sm font-secondary font-normal'>Experience unparalleled learning with the 
                                   best tutors at your disposal throughout the upcoming TechProsNaija Bootcamp, ensuring 
                                   personalized guidance and expertise to maximize your educational journey.</p>
                              </div>
                              <div className='benefit-card text-[#000] flex flex-col gap-3'>
                                   <MdGroups2 className='text-3xl'/>
                                   <h5 className='text-base font-primary font-bold'>Networking</h5>
                                   <p className='text-sm font-secondary font-normal'>Amplify your professional network through 
                                        interactive and collaborative opportunities at the upcoming 
                                        TechProsNaija Bootcamp, where networking is an integral part of your 
                                        transformative learning experience.</p>
                              </div>
                         </div>
                         <div className='benefit-card-tray flex gap-5'>
                              <div className='benefit-card text-[#000] flex flex-col gap-3'>
                                   <FaBookReader className='text-3xl'/>
                                   <h5 className='text-base font-primary font-bold'>Study Materials</h5>
                                   <p className='text-sm font-secondary font-normal'>Equip yourself for success with comprehensive and industry-relevant study 
                                        materials provided at the upcoming TechProsNaija Bootcamp, ensuring a 
                                        robust foundation for your learning journey.</p>
                              </div>
                              <div className='benefit-card text-[#000] flex flex-col gap-3'>
                                   <PiCertificateFill className='text-3xl'/>
                                   <h5 className='text-base font-primary font-bold'>Bootcamp Certificate</h5>
                                   <p className='text-sm font-secondary font-normal'>Upon successful completion of the TechProsNaija Bootcamp, you will be 
                                        awarded a prestigious certificate, validating your mastery of 
                                        cutting-edge skills for impactful contributions 
                                        in the tech industry.</p>
                              </div>
                         </div>
                         
                    </div>
               </div>
          </div>
     )
}

export default BenefitBootcamp;