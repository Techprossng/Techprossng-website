import React from 'react'
import '../Footer/Styles/footer.css'
function Footer() {
  return (
    <div class="footer">
        <div class="row">
            <div class="col">
            <img src='../../../src/assets/images/Logo.png' class='Logo'/>
            </div>
            <div class="col">
                
            </div>
            <div class="col">
                
            </div>
            <div class="col">
                <div class="social-icons">
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-discord"></i>
                </div>
            </div>
        </div> 
        <hr/>
        <div class="row">
            <div class="col"> 
               <h4>Resources <div class="underline"><span></span></div></h4>
               <br/>
               <ul>
                <li><a href="">Help & Support</a></li>
                <li><a href="">FAQ</a></li>
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Terms & Conditions</a></li>
               </ul>
            </div>
            <div class="col">
                <h4>About Us <div class="underline"><span></span></div></h4>
                <br/>
                <ul>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Events</a></li>
                    <li><a href="">Partners</a></li>
                    <li><a href="">Contact Us</a></li>
                   </ul>
            </div>
            <div class="col">
                <h4>Library <div class="underline"><span></span></div></h4>
                <br/>
                <ul>
                    <li><a href="">Videos</a></li>
                    <li><a href="">Downloadables</a></li>
                    <li><a href="">Articles</a></li>
                    <li><a href="">Tutorials</a></li>
                    <li><a href="">Podcasts</a></li>
                </ul>
            </div>
            <div class="col">
                <br/>
                <br/>
                <form action="#">
                    <i class="fa-solid fa-globe"></i>
                    <select id="lang">
                        <option value="english">English</option>
                        <option value="french">French</option>
                        <option value="german">German</option>
                        <option value="spanish">Spanish</option>
                    </select>
                </form>
            </div> 
        </div>
        <hr/>
        <p class="copyright">&copy; 2023 TechPros Ng. All Rights Reserved   <a href="">Cookie Policy</a></p>
    </div>
  )
}

export default Footer