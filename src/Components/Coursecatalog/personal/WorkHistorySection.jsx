import React, { useState } from "react";
import WorkHistoryForm from "./WorkHistoryForm";

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
      updatedUserData.workHistory = [...updatedUserData.workHistory, workHistoryData];
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
    <div className="mb-4">
      <h2 className="text-lg mb-2">Work History</h2>
      {userData.workHistory.length === 0 && !isEditing ? (
        <p>You have not added any work history. Click the link below to add now.</p>
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
            <button onClick={() => handleEditWorkHistory(index)} className="btn btn-secondary">
              Edit
            </button>
            <button onClick={() => handleDeleteWorkHistory(index)} className="btn btn-danger">
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
        <div>
          <button onClick={() => handleEditWorkHistory(-1)} className="btn btn-secondary">
            Add Work History
          </button>
        </div>
      )}
    </div>
  );
}

export default WorkHistorySection;
