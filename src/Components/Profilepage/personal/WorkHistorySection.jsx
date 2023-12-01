import React, { useState } from "react";
import { IoBagOutline } from "react-icons/io5";
import { BiPlus } from "react-icons/bi";
import { ImPencil } from "react-icons/im";
import { FaTrash } from "react-icons/fa";
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
        <IoBagOutline size={20} color="red" className="mt-[3px]"/>
        <h2 className="text-lg mb-1 font-bold text-[#001975] ml-2 font-secondary">Work History</h2>
      </div>
      {userData.workHistory.length === 0 && !isEditing ? (
        <p className=" text-center font-bold mt-10" >
          You have not added any work history.<br/>Click the link below to add now.
        </p>
      ) : (
        userData.workHistory.map((work, index) => (
          <div key={index}  className="flex justify-between work-section p-5 mt-5">
            <div className="">
            <p className="text-[15px] font-bold ">
             {work.company}
            </p>
            <p className="text-[12px] font-bold">
             {work.jobTitle}
            </p>
            <p className="text-[11px] font-medium">
            {work.location}</p>
            <p className="text-[12px] font-bold">
             {work.jobTitle}
            </p>
            <p className="text-[11px] font-medium">
            {work.location}</p>
            </div>
            {/* Add other work history fields here */}
            <div style={{ cursor:"pointer"}}>
            <ImPencil
              onClick={() => handleEditWorkHistory(index)}
              className="btn "
              size="20px"
              color="rgba(0, 25, 117, 1)"
            />
            
            <FaTrash
              onClick={() => handleDeleteWorkHistory(index)}
              className="btn btn-danger mt-40"
              size="20px"
              color="red"
              
            />
            </div>
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
