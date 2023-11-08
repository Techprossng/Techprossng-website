import React, { useState } from "react";

function WorkHistoryForm({ onSaveWorkHistory, onCancel }) {
  const [workHistoryData, setWorkHistoryData] = useState({
    jobTitle: "",
    company: "",
    // Add other fields for work history
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWorkHistoryData({ ...workHistoryData, [name]: value });
  };

  const handleSave = () => {
    onSaveWorkHistory(workHistoryData);
    setWorkHistoryData({
      jobTitle: "",
      company: "",
      // Reset other work history fields
    });
  };

  return (
    <div className="mb-4 p-4 border rounded-lg">
      <h2 className="text-lg mb-2">Add Work History</h2>
      <div className="mb-2">
        <label htmlFor="jobTitle">Job Title:</label>
        <input
          type="text"
          id="jobTitle"
          name="jobTitle"
          value={workHistoryData.jobTitle}
          onChange={handleInputChange}
          className="input"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="company">Company:</label>
        <input
          type="text"
          id="company"
          name="company"
          value={workHistoryData.company}
          onChange={handleInputChange}
          className="input"
        />
      </div>
      {/* Add other input fields for work history here */}
      <div className="flex items-center">
        <button onClick={onCancel} className="btn btn-secondary mr-2">
          Cancel
        </button>
        <button onClick={handleSave} className="btn btn-primary">
          Save Details
        </button>
      </div>
    </div>
  );
}

export default WorkHistoryForm;
