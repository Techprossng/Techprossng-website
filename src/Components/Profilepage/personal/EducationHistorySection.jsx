import React, { useState } from "react";
import { LuGraduationCap } from "react-icons/lu";
import { BiPlus } from "react-icons/bi";
import EducationHistoryForm from "./EducationHistoryForm";
import "../personal/Styles/education.css";

function EducationHistorySection({ userData, onSaveUserInfo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleEditEducation = (index) => {
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleSaveEducation = (educationData) => {
    const updatedUserData = { ...userData };

    if (editIndex !== null) {
      updatedUserData.educationHistory[editIndex] = educationData;
    } else {
      updatedUserData.educationHistory.push(educationData);
    }

    onSaveUserInfo(updatedUserData);
    setIsEditing(false);
    setEditIndex(null);
  };

  const handleDeleteEducationHistory = (index) => {
    const updatedUserData = { ...userData };
    updatedUserData.educationHistory.splice(index, 1);
    onSaveUserInfo(updatedUserData);
  };

  return (
    <div className="mt-10 block education-container p-5">
      <div className="flex">
      <LuGraduationCap size={25} color="red"/>
      <h2 className="text-md mb-0 font-bold text-[#001975] ml-2">Education History</h2>
      </div>
      {userData.educationHistory.length === 0 && !isEditing ? (
        <p className="text-center font-bold mt-10">You have not added any education history.<br/>Click the link below to add now.</p>
      ) : (
        userData.educationHistory.map((education, index) => (
          <div key={index}>
            <p>
              <strong>School Name:</strong> {education.schoolName}
            </p>
            <p>
              <strong>Degree:</strong> {education.degree}
            </p>
            {/* Add other education history fields here */}
            <div>
              <button onClick={() => handleEditEducation(index)} className="btn ">
                Edit
              </button>
              <button onClick={() => handleDeleteEducationHistory(index)} className="btn btn-danger">
                Delete
              </button>
            </div>
          </div>
        ))
      )}
      {isEditing ? (
        <EducationHistoryForm
          educationData={editIndex !== null ? userData.educationHistory[editIndex] : null}
          onSaveEducation={handleSaveEducation}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <div className="flex mt-20"> 
        <button onClick={() => setIsEditing(true)} className="btn edu-btn flex flex-end">
        <BiPlus size={18} className=" add-icon"/>  
          Add Education History
        </button>
        </div>
      )}
    </div>
  );
}

export default EducationHistorySection;
