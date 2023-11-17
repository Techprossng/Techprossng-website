import React, { useState } from "react";
import PersonalInfoForm from "../../Components/Profilepage/personal/PersonalInfoForm";
import View from "../../Components/Profilepage/personal/View";

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
    <div className="flex p-40 justify-between">
      <div className="w-full">
        <PersonalInfoForm
          userData={userData}
          onSaveUserInfo={handleSaveUserInfo}
          onEditUserInfo={handleEditUserInfo}
          isEditing={isEditing} // Pass the isEditing state
        />
      </div>
      <div className="w-1/2 ml-5">
        <View userData={userData} onEditUserInfo={handleEditUserInfo} />
      </div>
    </div>
  );
}

export default Personal;
