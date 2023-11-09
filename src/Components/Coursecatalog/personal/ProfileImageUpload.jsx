import React, { useState } from "react";
import "../personal/Styles/profileimage.css"


function ProfileImageUpload({ userData, onSaveUserInfo }) {
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [blurAmount, setBlurAmount] = useState(80);
  
    const handleImageUpload = (e) => {
      const file = e.target.files[0];
      setLoadingProgress(0);
  
      const img = new Image();
      img.onload = () => {
        setLoadingProgress(100);
        setBlurAmount(0);
        onSaveUserInfo({
          ...userData,
          profileImage: URL.createObjectURL(file),
        });
      };
      img.src = URL.createObjectURL(file);
  
      updateProgressAndBlur();
    };
  
    const updateProgressAndBlur = () => {
      let startTimestamp = null;
  
      const animateProgressAndBlur = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / 1000, 1) * 100;
        const blur = Math.max(80 - progress, 0);
  
        setLoadingProgress(progress);
        setBlurAmount(blur);
  
        if (progress < 100) {
          requestAnimationFrame(animateProgressAndBlur);
        }
      };
  
      requestAnimationFrame(animateProgressAndBlur);
    };
  
    return (
      <div className="mb-4" 
      style={{ background:"#fff", width:"100%" , height:"300px"   , boxShadow:"10px 20px 20px grey" }}
      
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className=" p-20 "
          style={{ zIndex:"-1" }}
          
        />
        <div className="image-container"
        >
          {userData.profileImage && (
            <div className="image-loading-overlay" style={{ opacity: loadingProgress / 10 }}>
              <div className="circular-progress-bar">
                <div className="border-circle">
                  <div
                    className="fill-circle"
                    style={{ transform: `rotate(${(loadingProgress / 100) * 360}deg)` }}
                  ></div>
                </div>
                <div className="loading-percentage">
                  {Math.floor(loadingProgress)}%
                </div>
              </div>
            </div>
          )}
          <img
            src={userData.profileImage}
            className="image-view"
            alt="Profile"
            style={{ filter: `blur(${blurAmount}px)` , borderRadius:"25px" }}
          />
        </div>
      </div>
    );
  }
  
  export default ProfileImageUpload;

  
  
  
  
  
  