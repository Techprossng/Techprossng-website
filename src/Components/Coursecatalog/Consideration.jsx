import React from 'react'
import "../Coursecatalog/Style/course-catalog.css";

function Consideration() {
  return (
     <div className="consideration">
          <div className="col">
               <div className="texts">
                    <h1>Have you been thinking about getting into tech?</h1>
                    <h4>Tech Pros Ng has you covered</h4>
                    <ul>
                         <li>
                              <p><i class="fa-solid fa-check"></i>Designed in collaboration with industry experts, focusing on practical skills.</p>
                              <p><i class="fa-solid fa-check"></i>Affordable courses and flexible payment options.</p>
                              <p><i class="fa-solid fa-check"></i>Personalized learning paths and adaptive assessments.</p>
                              <p><i class="fa-solid fa-check"></i>Frequently updated to align with industry standards and market demands.</p>
                              <p><i class="fa-solid fa-check"></i>Support you need to succeed, not only academically but also personally and professionally.</p>
                         </li>
                    </ul>
                    </div>
               <div className="photo">
                    <img src="../../../src/assets/images/consideration-image.png" />
               </div>
          </div>
     </div>
  )
}

export default Consideration;