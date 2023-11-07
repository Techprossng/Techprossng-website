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
                <div className="faq-link">
                  <a href="#">Click here to visit the FAQ page.</a>
                </div>
          </div>
          <div className="contact-us">
            <h1>Contact Us</h1>
              <h6>If you can't find the answer you're looking for on our FAQ page, our dedicated support team is ready to assist you. You can reach us through any of the following channels:</h6>
                <div className="col3">
                  <div className="tab">
                    <h2>Email Support</h2>
                      <h6>Send an email to support@techprosng.com with your inquiry, and our team will respond promptly.</h6>
                  </div>
                  <div className="tab">
                    <h2>Live Chat</h2>
                      <h6>Our live chat support is available from 9am - 3pm, monday to friday to provide real-time assistance.</h6>
                  </div>
                  <div className="tab">
                    <h2>Phone Support</h2>
                      <h6>Call our support hotline at +2349017433227 if you prefer to speak with a representative directly.</h6>
                  </div>
                </div>
          </div>
          <div className="guide">
            <h1>User Guide and Resources</h1>
              <h6>Explore our library of user guides and resources to make the most of your learning journey:</h6>
                <div className="col4">
                  <div className="tab">
                    <h2>Getting Started Guide</h2>
                      <h6>New to Tech Pros Ng? Check our guide for a smooth start.</h6>
                  </div>
                  <div className="tab">
                    <h2>Technical Troubleshooting</h2>
                      <h6>Our live chat support is available from 9am - 3pm to provide real-time assistance.</h6>
                  </div>
                  <div className="tab">
                    <h2>Learning Process</h2>
                      <h6>Discover additional resources to enhance your understanding of the course material.</h6>
                  </div>
                </div>
                <div className="col5">
                <div className="tab">
                    <h2>Tips for Success</h2>
                      <h6>Get tips and strategies for successful online learning.</h6>
                  </div>
                </div>
          </div>
          <div className="bottom">
            <div className="feedback">
              <h1>Feedback and Suggestions</h1>
              <h6>We value your feedback. If you have suggestions, ideas, or if you've encountered any issues, please let us know. We are committed to continuous improvement, and your input is essential to our growth.</h6>
            </div>
            <div className="community-forum">
              <h1>Community Forum</h1>
              <h6>Connect with fellow learners, share experiences, and seek advice on our community forum. It's a great place to collaborate, discuss course topics, and find study partners.</h6>
            </div>
          </div>
          <div className="closing">
            <h2>Thank you for choosing TechPros Ng as your learning partner. We're here to support you every step of the way on your educational journey.</h2>
          </div>
        </div>
      </>
    );
  };
export default Resource;