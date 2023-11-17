import React, { useState } from "react";

function EducationHistoryForm({ onSaveEducation, onCancel }) {
  const [educationData, setEducationData] = useState({
    schoolName: "",
    degree: "",
    // Add other fields for education history
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEducationData({ ...educationData, [name]: value });
  };

  const handleSave = () => {
    onSaveEducation(educationData);
    setEducationData({
      schoolName: "",
      degree: "",
      // Reset other education history fields
    });
  };

  return (
    <div className="mb-4 p-4 border rounded-lg">
      <h2 className="text-lg mb-2">Add Education History</h2>
      <div className="mb-2">
        <label htmlFor="schoolName">School Name:</label>
        <input
          type="text"
          id="schoolName"
          name="schoolName"
          value={educationData.schoolName}
          onChange={handleInputChange}
          className="input"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="degree">Degree:</label>
        <input
          type="text"
          id="degree"
          name="degree"
          value={educationData.degree}
          onChange={handleInputChange}
          className="input"
        />
      </div>
      {/* Add other input fields for education history here */}
      <div className="flex items-center">
        <button onClick={onCancel} className="btn  mr-2">
          Cancel
        </button>
        <button onClick={handleSave} className="btn btn-primary">
          Save Details
        </button>
      </div>
    </div>
  );
}

export default EducationHistoryForm;
