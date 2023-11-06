import React from 'react'
import "../Resource Library/Styles/library.css"

function Library() {
  return (
    <div className="library-container">
        <h1 className="heading">Resource Library <div class="resourse-link"><a href="#">View Resource Library</a></div></h1> 
        <div className="box-container">
            <div className="box">
                <img src="../../../src/assets/images/image-library-1.png" alt=""/>
                <h3>Videos</h3>
                <a href="#" class="btn">Explore Now</a>
            </div>
            <div className="box">
                <img src="../../../src/assets/images/image-library-4.png" alt="" />
                <h3>E-Books</h3>
                <a href="#" class="btn">Explore Now</a>
            </div>
            <div className="box">
                <img src="../../../src/assets/images/image-library-5.png" alt=""/>
                <h3>Projects</h3>
                <a href="#" class="btn">Explore Now</a>
            </div>
            <div className="box">
                <img src="../../../src/assets/images/image-library-6.png" alt=""/>
                <h3>Tutorials</h3>
                <a href="#" class="btn">Explore Now</a>
            </div>
        </div>
    </div>
  )
}

export default Library