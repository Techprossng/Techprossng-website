import "../About Us/Style/about-us.css";
const AboutUs = () => {
    return (
      <>
        <div className="about-us">
          <div className="hero-text">
            <h1>
              ABOUT US
            </h1>
              <h2>
                How we started...
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit consequuntur. <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit consequuntur.
                  </p>
              </h2>
          </div>
          <div className="hero-image">
          <img src="../../../src/assets/images/about-hero-image.png" alt="" />
          </div>
          <div className="mission">
            <h1>
              Where we are headed
            </h1>
            <span>
              <h2>Our Mission</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit consequuntur. <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit consequuntur.
                </p>
                <h2>Our Vision</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit consequuntur. <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit consequuntur.
                </p>
            </span>
          </div>
          <div className="founder">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, aliquid. Velit. <br />
            Lorem ipsum dolor sit amet. <br />
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, aliquid. Velit. <br />
            Lorem ipsum dolor sit amet. <br />
            <br />
            <div className="founder-frame">
              <img src="../../../src/assets/images/founder-frame.png" alt="" />
            </div>
          </div>
          <div className="why-us">
            <div className="impact-video">
              <h2>Why Us?</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Soluta doloribus repellendus qui itaque, eum voluptatem, 
                placeat culpa quasi beatae consectetur maxime.</p>
                <img src="../../../src/assets/images/impact-video.png" alt="" />
            </div>
            <div className="merit">
            <ul>
              <li><img src="../../../src/assets/images/merit-frame.png" alt="" /><h2>Lorem Ipsum <p>Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. <br /> 
              Incidunt eos, doloremque voluptatibus reprehenderit 
              reiciendis labore corporis.</p></h2></li>
              <li><img src="../../../src/assets/images/merit-frame.png" alt="" /><h2>Lorem Ipsum <p>Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. <br /> 
              Incidunt eos, doloremque voluptatibus reprehenderit 
              reiciendis labore corporis.</p></h2></li>
              <li><img src="../../../src/assets/images/merit-frame.png" alt="" /><h2>Lorem Ipsum <p>Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. <br /> 
              Incidunt eos, doloremque voluptatibus reprehenderit 
              reiciendis labore corporis.</p></h2></li>
              <li><img src="../../../src/assets/images/merit-frame.png" alt="" /><h2>Lorem Ipsum <p>Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. <br /> 
              Incidunt eos, doloremque voluptatibus reprehenderit 
              reiciendis labore corporis.</p></h2></li>
            </ul>
            </div>
          </div>
          <div className="our-team">
            <h1>Our Team</h1>
            <div className="team-image">
              <img src="../../../src/assets/images/team-frame.png" alt="" />
            </div>
          </div>
          <div className="blog">
            <h1>Blog</h1>
            <div className="blog-cards">
            <div className="blog-card">
              <div className="blog-photo">
                <img src="../../../src/assets/images/blog-frame.png" alt="" />
              </div>
              <div className="blog-topic">
                <h4>Technology</h4>
              </div>
              <div className="blog-text">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est!</p>
              </div>
              <div className="author">
                <div className="name">
                  <h6>Eze Chiemele</h6>
                </div>
                <div className="date">
                  <h6>October 25, 2023</h6>
                </div>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-photo">
                <img src="../../../src/assets/images/blog-frame.png" alt="" />
              </div>
              <div className="blog-topic">
                <h4>Technology</h4>
              </div>
              <div className="blog-text">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est!</p>
              </div>
              <div className="author">
                <div className="name">
                  <h6>Eze Chiemele</h6>
                </div>
                <div className="date">
                  <h6>October 25, 2023</h6>
                </div>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-photo">
                <img src="../../../src/assets/images/blog-frame.png" alt="" />
              </div>
              <div className="blog-topic">
                <h4>Technology</h4>
              </div>
              <div className="blog-text">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est!</p>
              </div>
              <div className="author">
                <div className="name">
                  <h6>Eze Chiemele</h6>
                </div>
                <div className="date">
                  <h6>October 25, 2023</h6>
                </div>
              </div>
            </div>
            </div>
            <div className="blog-link">
              <a href="#">Go To Blog <i class="fa-solid fa-arrow-right-long"></i></a>
            </div>
          </div>
          <div className="bts">
            <h1>Behind The Scene</h1>
            <div className="bts-image">
              <img src="../../../src/assets/images/behind-the-scene.png" alt="" />
            </div>
          </div>
          <div className="careers">
            <div className="careers-text">
              <h1>Careers</h1>
              <h4>Lorem ipsum dolor sit <br />amet consectetur adipisicing <br />elit. Ad.</h4>
              <p>Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. <br /> 
              Incidunt eos, doloremque voluptatibus reprehenderit 
              reiciendis labore corporis. <br />
              adipisicing elit Incidunt eos, doloremque</p>
              <a href="#">See Openings <i class="fa-solid fa-arrow-right-long"></i></a>
            </div>
            <div className="careers-image">
              <img src="../../../src/assets/images/careers.png" alt="" />
            </div>
          </div>
          <div className="contact-us">
            <h1>Contact Us</h1>
            <h4>Please fill out the form below, and our team will get back to you as soon as possible. </h4>
            <form className="contact-us">
              <div className="name">
                <div className="firstname">
                  <h4>First Name</h4>
                  <input type="name" />
                </div>
                <div className="lastname">
                  <h4>Last Name</h4>
                  <input type="name" />
                </div>
              </div>
              <form action="#">
                <select id="faq">
                  <option value="english">English</option>
                  <option value="french">French</option>
                  <option value="german">German</option>
                  <option value="spanish">Spanish</option>
                </select>
              </form>
            </form>
          </div>
        </div>
      </>
    );
  };
export default AboutUs;