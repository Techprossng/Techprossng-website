import "../Footer/Styles/footer.css";
import Logo  from "../../../assets/images/Logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div
        className="main-container p-5 w-[87%] m-auto
        "
      >
        <div
          className="first-container
            "
        >
          <img src={Logo} />

          <div>
            <div className="social-icons">
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-discord"></i>
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
            About Us{" "}
            <div className="underline">
              <span></span>
            </div>
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
        <div className="col">
          <br />
          <br />
          <form action="#">
            <i className="fa-solid fa-globe"></i>
            <select id="lang">
              <option value="english">English</option>
              <option value="french">French</option>
              <option value="german">German</option>
              <option value="spanish">Spanish</option>
            </select>
          </form>
        </div>
      </div>
      <hr className="w-[85%] horizontal-line" />
      <div className="copyright flex justify-between p-5 w-[87%] m-auto">
        <span>&copy; 2023 TechPros Ng. All Rights Reserved </span>
        <a href="">Cookie Policy</a>
      </div>
    </footer>
  );
}

export default Footer;
