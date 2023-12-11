import React, { useState } from "react";
import { LuGraduationCap } from "react-icons/lu";
import { BiPlus } from "react-icons/bi";
import { ImPencil } from "react-icons/im";
import { FaTrash } from "react-icons/fa";
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
      <div className="flex justify-between">
      <div className="flex edu-history-header">
      <LuGraduationCap size={25} color="red"/>
      <h2 className="text-md mb-0 font-bold text-[#001975] font-secondary ml-2">Education History</h2>
      </div>
      <div className="edu-icon-mobile">
        <button onClick={() => setIsEditing(true)}><BiPlus size={30} color="#fff" style={{ backgroundColor:"#fe0000" , borderRadius:"4px", padding:"3px"}}/></button>  
      </div>
      </div>
      {userData.educationHistory.length === 0 && !isEditing ? (
        <div className="edu-notice">
        <p className="text-center font-bold mt-10">You have not added any education history.<br/>Click the link below to add now.</p>
        </div>
      ) : (

        userData.educationHistory.map((education, index) => (
          <div key={index} className="flex justify-between work-section p-5 mt-5">
            <div className="">
            <p className="text-[15px] font-bold">
            {education.schoolName}
            </p>
            <p className="text-[15px] font-bold">
            {education.degree}
            </p>
            </div>
            {/* Add other education history fields here */}
            <div style={{ cursor:"pointer"}}>
            <ImPencil
              onClick={() => handleEditEducation(index)}
              className="btn "
              size="20px"
              color="rgba(0, 25, 117, 1)"
            />
            
            <FaTrash
              onClick={() => handleDeleteEducationHistory(index)}
              className="btn btn-danger mt-40"
              size="20px"
              color="red"
              
            />
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
        <div className="flex mt-20 Add-edu-button"> 
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
