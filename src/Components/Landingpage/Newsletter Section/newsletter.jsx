import React from 'react'
import '../Newsletter Section/Styles/newsletter.css'

function Newsletter() {
  return (
        <div>
        <div class="news-box" data-aos="zoom-in-up">
        <h1> Would you like to stay updated?</h1> 
        <h4>Subscribe to our newsletter.</h4>
        <div class="email">
            <input type="email" placeholder="Enter your email address"/>
            <i class="icon fa fa-envelope"></i>
            <button type="submit">Subscribe</button> 
        </div>
        <p>We are committed to your privacy. TechPros Ng uses the information you provide to us to contact you about our relevant content, products and services. You may unsubscribe from these communication at any time. For more information, check our <a href="#">Privacy Policy</a></p>
    </div>
    </div>
  )
}

export default Newsletter