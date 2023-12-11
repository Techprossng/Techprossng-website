import React, { useState } from "react";
import PersonalInfoForm from "../../Components/Profilepage/personal/PersonalInfoForm";
import View from "../../Components/Profilepage/personal/View";
import "../Personalpage/styles/personalform.css";

function Personal() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    bio: "",
    email: "",
    workHistory: [],
    educationHistory: [],
    profileImage: null,
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSaveUserInfo = (data) => {
    setUserData(data);
    setIsEditing(false);
  };

  const handleEditUserInfo = () => {
    setIsEditing(true);
  };

  return (
    <div className="flex p-2 sm:p-40 justify-between personal-container">
      <div className="w-full info-container">
        <PersonalInfoForm
          userData={userData}
          onSaveUserInfo={handleSaveUserInfo}
          onEditUserInfo={handleEditUserInfo}
          isEditing={isEditing} 
        />
      </div>
      <div className="w-1/2 ml-5 viewer-container">
        <View userData={userData} onEditUserInfo={handleEditUserInfo} />
      </div>
    </div>
  );
}

export default Personal;
