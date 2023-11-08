import React, { useState } from "react";
import EducationHistoryForm from "./EducationHistoryForm";

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
    <div className="mb-4">
      <h2 className="text-lg mb-2">Education History</h2>
      {userData.educationHistory.length === 0 && !isEditing ? (
        <p>You have not added any education history. Click the link below to add now.</p>
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
              <button onClick={() => handleEditEducation(index)} className="btn btn-secondary">
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
        <button onClick={() => setIsEditing(true)} className="btn btn-secondary">
          Add Education History
        </button>
      )}
    </div>
  );
}

export default EducationHistorySection;
