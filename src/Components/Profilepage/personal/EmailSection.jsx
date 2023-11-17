import React from "react";

function EmailSection({ userData, onSaveUserInfo }) {
  const handleEmailChange = (e) => {
    const email = e.target.value;
    onSaveUserInfo({ ...userData, email });
  };

  return (
    <div className="mb-4">
      <h2 className="text-lg mb-2">Email</h2>
      <div className="mb-2">
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          value={userData.email}
          onChange={handleEmailChange}
          className="input"
        />
      </div>
      {/* Add other fields like country dropdown here */}
    </div>
  );
}

export default EmailSection;
