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
        </div>
      </>
    );
  };
export default AboutUs;