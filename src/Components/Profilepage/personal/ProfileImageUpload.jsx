import React, { useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { ImPencil } from "react-icons/im";
import { FaTrash } from "react-icons/fa";
import "../personal/Styles/profileimage.css";


// ... (your imports)

function ProfileImageUpload({ userData, onSaveUserInfo }) {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [blurAmount, setBlurAmount] = useState(80);
  const [isEditing, setIsEditing] = useState(false);
  const [editedImage, setEditedImage] = useState(userData.profileImage);

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
      setIsEditing(false);
    };
    img.src = URL.createObjectURL(file);

    updateProgressAndBlur();
  };

  const handleEditImage = () => {
    setIsEditing(true);
  };

  const handleSaveEditedImage = () => {
    onSaveUserInfo({
      ...userData,
      profileImage: editedImage,
    });
    setIsEditing(false);
  };
  
 

  const handleDeleteImage = () => {
    onSaveUserInfo({
      ...userData,
      profileImage: null,
    });
    setBlurAmount(80); 
    setLoadingProgress(0); 
    setIsEditing(false); 
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
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
    <div className="image-upload-container flex ">
      <div
        style={{
          background: "#fff",
          border: " 2px solid rgba(230, 230, 230, 1) ",
          width:"180px",
          height: "200px",
          position: "relative",
          overflow: "hidden",
          borderRadius: "10px"
        }}
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="file-input"
          id="fileInput"
          disabled={isEditing}
        />
        <label
          className="upload-button"
          htmlFor="fileInput"
          disabled={isEditing}
        >
          <BiImageAdd size="50px" style={{ color: "black" , marginTop: "60px"}} />
        </label>
        <p className="text-center mt-5 font-bold">Click to upload</p>
        <div className="image-container">
          {userData.profileImage && (
            <div
              className="image-loading-overlay"
              style={{ opacity: loadingProgress / 10 }}
            >
              <div className="circular-progress-bar">
                <div className="border-circle">
                  <div
                    className="fill-circle"
                    style={{
                      transform: `rotate(${(loadingProgress / 100) * 360}deg)`,
                    }}
                  ></div>
                </div>
                <div className="loading-percentage">
                  {Math.floor(loadingProgress)}%
                </div>
              </div>
            </div>
          )}
          {isEditing ? (
            <div>
              <input
                type="text"
                value={editedImage}
      onChange={(e) => setEditedImage(e.target.value)}
              />
            </div>
          ) : (
            <div>
              <img
                src={userData.profileImage}
                className="image-view"
                alt="Profile"
                style={{ filter: `blur(${blurAmount}px)`, borderRadius: "5px" }}
              />
            </div>
          )}
        </div>
      </div>
      {userData.profileImage && !isEditing && (
        <div className="edit-delete-buttons flex-wrap ml-10 ">
          <ImPencil size="20px" onClick={handleEditImage} />
          <FaTrash size="20px" onClick={handleDeleteImage}  className="mt-40" color="red"/>
        </div>
      )}
      {isEditing && (
        <div className="edit-buttons">
          <button onClick={handleSaveEditedImage}>Save</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default ProfileImageUpload;
