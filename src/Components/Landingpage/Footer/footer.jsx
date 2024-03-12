import React from 'react';
import "../Footer/Styles/footer.css";
import Logo from "../../../assets/images/Logo.png";
import { FaSquarePhone, FaEnvelopeCircleCheck } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div className="main-container p-5 w-[87%] m-auto">
        <div className="first-container">
          <img src={Logo} />

          <div>
            <div className="social-icons">
              <a href="https://x.com/TechProsNaija?t=u38kmZuIB5X2ogELOWCk1A&s=09"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="https://www.facebook.com/profile.php?id=61551049632184&mibextid=ZbWKwL"><i className="fa-brands fa-facebook"></i></a>
              <a href="https://instagram.com/techprosnaija?igshid=OGQ5ZDc2ODk2ZA"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://www.linkedin.com/company/techpros-ng/"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div> 
      <hr className="w-[85%] horizontal-line" />
      <div className="row">
        <div className="col">
          <h4 className="font-primary">
          <a href="/resource-page">
            Resources{" "}
            <div className="underline">
              <span></span>
            </div>
            </a>
          </h4>
          <br />
          <ul className="font-secondary">
            <li>
              <a href="/coming-soon">Help & Support</a>
            </li>
            <li>
              <a href="/coming-soon">FAQ</a>
            </li>
            <li>
              <a href="/coming-soon">Privacy Policy</a>
            </li>
            <li>
              <a href="/coming-soon">Terms & Conditions</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <h4 className="font-primary">
            <a href="/about-us">
              About Us{" "}
              <div className="underline">
                <span></span>
              </div>
            </a>
          </h4>
          <br />
          <ul  className="font-secondary">
            <li>
              <a href="/coming-soon">Careers</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/coming-soon">Events</a>
            </li>
            <li>
              <a href="/coming-soon">Partners</a>
            </li>
            <li>
              <a href="/contact-us">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <h4 className="font-primary">
            <a href="/coming-soon">
            Library{" "}
            <div className="underline">
              <span></span>
            </div>
            </a>
          </h4>
          <br />
          <ul className="font-secondary">
            <li>
              <a href="/coming-soon">Videos</a>
            </li>
            <li>
              <a href="/coming-soon">Downloadables</a>
            </li>
            <li>
              <a href="/coming-soon">Articles</a>
            </li>
            <li>
              <a href="/coming-soon">Tutorials</a>
            </li>
            <li>
              <a href="/coming-soon">Podcasts</a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="w-[85%] horizontal-line" />
      <div className="copyright font-secondary flex flex-col justify-center items-center mb-5 gap-5 p-5 w-[87%] m-auto">
        <a href="mailto:hello@techprosnaija.com" className="flex gap-2 items-center">
          <FaEnvelopeCircleCheck className="footer-top-icons text-[#fff] w-5 h-5"/>
          <p>support@techprosnaija.com</p>
        </a>
        <a href="tel:+2348033225912" className="flex gap-2 items-center">
          <FaSquarePhone className="footer-top-icons text-[#fff] w-5 h-5"/>
          <p>08072024626, 09017433227</p>
        </a>
        <span>&copy; 2023 TechProsNaija. All Rights Reserved </span>
        <a href="" className=''>Cookie Policy</a> 
      </div>
    </footer>
  );
}

export default Footer;
