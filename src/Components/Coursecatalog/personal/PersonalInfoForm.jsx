import React from "react";
import ProfileImageUpload from "./ProfileImageUpload";
import BioSection from "./BioSection ";
import EmailSection from "./EmailSection";
import WorkHistorySection from "./WorkHistorySection";
import EducationHistorySection from "./EducationHistorySection";

function PersonalInfoForm({ userData, onSaveUserInfo, onEditUserInfo, isEditing  }) {
  return (
    <div className={`p-4 w-1/2 mr-4 ${isEditing ? "border-2 border-red-300" : ""}`}>
      <h1 className="text-2xl mb-4">Personal Information Form</h1>
      <ProfileImageUpload userData={userData} onSaveUserInfo={onSaveUserInfo} />
      <BioSection userData={userData} onSaveUserInfo={onSaveUserInfo} />
      <EmailSection userData={userData} onSaveUserInfo={onSaveUserInfo} />
      <WorkHistorySection userData={userData} onSaveUserInfo={onSaveUserInfo} />
      <EducationHistorySection userData={userData} onSaveUserInfo={onSaveUserInfo} />
    </div>
  );
}

export default PersonalInfoForm;
