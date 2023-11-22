import React from 'react'
import "../Coursecatalog/Style/course-catalog.css";
import Consider from "../../assets/images/consideration-image.png"

function Consideration() {
  return (
     <div className="consideration mx-12">
          <div className="col">
               <div className="texts">
                    <h5 className='font-bold text-[38px] font-primary mb-5'>Have you been thinking about getting into tech?</h5>
                    <h6 className='font-normal text-[20px] font-primary mb-3'>TechProsNaija has you covered</h6>
                    <ul>
                         <li>
                              <p className='font-bold text[16px] font-secondary'><i className="fa-solid fa-check"></i>Designed in collaboration with industry experts, focusing on practical skills.</p>
                              <p className='font-bold text[16px] font-secondary'><i className="fa-solid fa-check"></i>Affordable courses and flexible payment options.</p>
                              <p className='font-bold text[16px] font-secondary'><i className="fa-solid fa-check"></i>Personalized learning paths and adaptive assessments.</p>
                              <p className='font-bold text[16px] font-secondary'><i className="fa-solid fa-check"></i>Frequently updated to align with industry standards and market demands.</p>
                              <p className='font-bold text[16px] font-secondary'><i className="fa-solid fa-check"></i>Support you need to succeed, not only academically but also personally and professionally.</p>
                         </li>
                    </ul>
                    </div>
               <div className="consider-photo">
                    <img src={Consider} alt="consideration image" />
               </div>
          </div>
     </div>
  )
}

export default Consideration;