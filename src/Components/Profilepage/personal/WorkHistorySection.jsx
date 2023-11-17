import React, { useState } from "react";
import { IoBagOutline } from "react-icons/io5";
import { BiPlus } from "react-icons/bi";
import WorkHistoryForm from "./WorkHistoryForm";
import "../personal/Styles/workinfo.css";

function WorkHistorySection({ userData, onSaveUserInfo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedIndex, setEditedIndex] = useState(-1);

  const handleEditWorkHistory = (index) => {
    setIsEditing(true);
    setEditedIndex(index);
  };

  const handleSaveWorkHistory = (workHistoryData) => {
    const updatedUserData = { ...userData };
    if (editedIndex === -1) {
      // Add a new work history entry
      updatedUserData.workHistory = [
        ...updatedUserData.workHistory,
        workHistoryData,
      ];
    } else {
      // Edit an existing work history entry
      updatedUserData.workHistory[editedIndex] = workHistoryData;
    }

    onSaveUserInfo(updatedUserData);
    setIsEditing(false);
    setEditedIndex(-1);
  };

  const handleDeleteWorkHistory = (index) => {
    const updatedUserData = { ...userData };
    updatedUserData.workHistory.splice(index, 1);
    onSaveUserInfo(updatedUserData);
  };

  return (
    <div className="mt-10 block  history-container p-5">
      <div className="flex">
        <IoBagOutline size={20} color="red"/>
        <h2 className="text-md mb-0 font-bold text-[#001975] ml-2">Work History</h2>
      </div>
      {userData.workHistory.length === 0 && !isEditing ? (
        <p className=" text-center font-bold mt-10" >
          You have not added any work history.<br/>Click the link below to add now.
        </p>
      ) : (
        userData.workHistory.map((work, index) => (
          <div key={index}>
            <p>
              <strong>Job Title:</strong> {work.jobTitle}
            </p>
            <p>
              <strong>Company:</strong> {work.company}
            </p>
            {/* Add other work history fields here */}
            <button
              onClick={() => handleEditWorkHistory(index)}
              className="btn "
            >
              Edit
            </button>
            <button
              onClick={() => handleDeleteWorkHistory(index)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        ))
      )}
      {isEditing ? (
        <WorkHistoryForm
          workHistoryData={
            editedIndex !== -1 ? userData.workHistory[editedIndex] : undefined
          }
          onSaveWorkHistory={handleSaveWorkHistory}
          onCancel={() => {
            setIsEditing(false);
            setEditedIndex(-1);
          }}
        />
      ) : (
        <div className="flex mt-20 ">
         
          <button
            onClick={() => handleEditWorkHistory(-1)}
            className="btn btn-secondary  flex flex-end"
          >
             <BiPlus size={18} className=" add-icon"/>
            Add A Work
          </button>
        </div>
      )}
    </div>
  );
}

export default WorkHistorySection;
