import React from "react";

function ProfileImageUpload({ userData, onSaveUserInfo }) {
  // Implement image upload logic and set the image in userData
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    // Handle the file upload and set the image in userData
    onSaveUserInfo({
      ...userData,
      profileImage: URL.createObjectURL(file),
    });
  };

  return (
    <div className="mb-4">
      <h2 className="text-lg mb-2">Profile Image</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="mb-2"
      />
      {userData.profileImage && (
        <img
          src={userData.profileImage}
          alt="Profile"
          className="w-24 h-24 rounded-full"
        />
      ) }
    </div>
  );
}

export default ProfileImageUpload;
