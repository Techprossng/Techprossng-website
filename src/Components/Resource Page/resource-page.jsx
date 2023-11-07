import "../Resource Page/Style/resource.css";
const Resource = () => {
    return (
      <>
        <div className="resource">
          <div className="hero-header">
            <div className="hero-text">
              <h1>TechPros Support Center</h1>
              <h6>Welcome to TechProsNg! We are here to assist you in making the most of your learning experience. Whether you have questions about our courses, technical issues, or need guidance on using our platform, you'll find the help and support you need right here.</h6>
                <div className="search-box">
                  <input
                    type="email"
                      placeholder="Search"/>
                    <i className="fa-solid fa-magnifying-glass"></i>
                  <button type="submit">Join Waitlist</button>
                </div>
            </div>
            <div className="hero-image">
              <img src="../../../src/assets/images/Resource-Hero.png" />
            </div>
          </div>

          <div className="faq">
            <h1>Frequently Asked Questions</h1>
              <h6>Browse our FAQs to find quick answers to common questions related to:</h6>
                <div className="col1">
                  <div className="tab">
                    <h2>Courses</h2>
                      <h6>Explore information about course availability, prerequisites and more.</h6>
                  </div>
                  <div className="tab">
                    <h2>Subscription</h2>
                      <h6>Understand our pricing, subscription plans, and how to manage your subscription.</h6>
                  </div>
                  <div className="tab">
                    <h2>Technical Support</h2>
                      <h6>Get solutions for technical issues, including login problems, video playback, and account settings.</h6>
                  </div>
                </div>
                <div className="col2">
                <div className="tab">
                    <h2>Payment</h2>
                      <h6>Learn about accepted payment methods, billing cycles, and refund policies.</h6>
                  </div>
                  <div className="tab">
                    <h3>Account Management</h3>
                      <h5>Find guidance on changing your password, updating your profile, and managing your account.</h5>
                  </div>
                </div>
          </div>
        </div>
      </>
    );
  };
export default Resource;