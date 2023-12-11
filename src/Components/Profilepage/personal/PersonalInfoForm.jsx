import React from "react";
import ProfileImageUpload from "./ProfileImageUpload";
import BioSection from "./BioSection ";
import WorkHistorySection from "./WorkHistorySection";
import EducationHistorySection from "./EducationHistorySection";
import "../personal/Styles/personalinfo.css";

function PersonalInfoForm({ userData, onSaveUserInfo, onEditUserInfo, isEditing  }) {
  return (
    <div className={`p-0 w-full mr-4 ${isEditing ? "border-2 border-red-300" : ""}`}>
      <h1 className="text-5xl mb-12 text-[#001975] font-bold personal-heading">Personal Information </h1>
      <ProfileImageUpload userData={userData} onSaveUserInfo={onSaveUserInfo}  />
      <BioSection userData={userData} onSaveUserInfo={onSaveUserInfo} />
      <WorkHistorySection userData={userData} onSaveUserInfo={onSaveUserInfo} />
      <EducationHistorySection userData={userData} onSaveUserInfo={onSaveUserInfo} />
    </div>
  );
}

export default PersonalInfoForm;
