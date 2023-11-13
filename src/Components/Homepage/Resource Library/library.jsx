import React from 'react'
import "../Resource Library/Style/library.css";
import image1 from "../../../assets/images/image1.png";
import image4 from "../../../assets/images/image4.png";
import image5 from "../../../assets/images/image5.png";
import image6 from "../../../assets/images/image6.png"


function Library() {
  return (
    <div className="libraries">
        <h1 className="heading">Resource Library <div class="resourse-link"><a href="#">View Resource Library</a> <i class="fa-solid fa-arrow-right-long"></i></div></h1> 
        <div className="box-container">
            <div className="box">
                <img src={image1} alt=""/>
                <h3>Videos</h3>
                <a href="#" class="btn">Explore Now</a>
            </div>
            <div className="box">
                <img src={image4}alt="" />
                <h3>E-Books</h3>
                <a href="#" class="btn">Explore Now</a>
            </div>
            <div className="box">
                <img src={image5} alt=""/>
                <h3>Projects</h3>
                <a href="#" class="btn">Explore Now</a>
            </div>
            <div className="box">
                <img src={image6} alt=""/>
                <h3>Tutorials</h3>
                <a href="#" class="btn">Explore Now</a>
            </div>
        </div>
        <div class="mobile-resourse-link"><a href="#">View Resource Library</a> <i class="fa-solid fa-arrow-right-long"></i></div>
    </div>
  )
}

export default Library;