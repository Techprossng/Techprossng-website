import "../Footer/Styles/footer.css";
import Logo from "../../../assets/images/Logo.png";

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
          <h4>
            Resources{" "}
            <div className="underline">
              <span></span>
            </div>
          </h4>
          <br />
          <ul>
            <li>
              <a href="">Help & Support</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Terms & Conditions</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <h4>
            <a href="/about-us">
              About Us{" "}
              <div className="underline">
                <span></span>
              </div>
            </a>
          </h4>
          <br />
          <ul>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Events</a>
            </li>
            <li>
              <a href="">Partners</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <h4>
            Library{" "}
            <div className="underline">
              <span></span>
            </div>
          </h4>
          <br />
          <ul>
            <li>
              <a href="">Videos</a>
            </li>
            <li>
              <a href="">Downloadables</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Tutorials</a>
            </li>
            <li>
              <a href="">Podcasts</a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="w-[85%] horizontal-line" />
      <div className="copyright flex flex-col justify-center items-center gap-5 justify-between p-5 w-[87%] m-auto">
        <span>&copy; 2023 TechPros Ng. All Rights Reserved </span>
        <a href="">Cookie Policy</a>
      </div>
    </footer>
  );
}

export default Footer;
