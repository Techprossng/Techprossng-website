import "../Newsletter Section/Styles/newsletter.css";

function Newsletter() {
  return (
    <div>
      <div className="news-box">
        <h1> Would you like to stay updated?</h1>
        <h4>Subscribe to our newsletter.</h4>
        <div className="email" data-aos="fade-right">
          <input
            type="email"
            placeholder="Enter your email address"
            data-aos="fade-down-left"
          />
          <i className="icon fa fa-envelope"></i>
          <button type="submit">Subscribe</button>
        </div>
        <div className="mobile-view">
          <p className="text-mobile">Enter your email address</p>
          <input type="email" placeholder="Email" data-aos="fade-down-left" className="
          border-2 rounded-[16px] w-[90%]
          " />
          <div className="mobile-button">
            <button type="submit">Subscribe</button>
          </div>
        </div>
        <p data-aos="fade-up">
          We are committed to your privacy. TechPros Ng uses the information you
          provide to us to contact you about our relevant content, products and
          services. You may unsubscribe from these communication at any time.
          For more information, check our <a href="#">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
}

export default Newsletter;
