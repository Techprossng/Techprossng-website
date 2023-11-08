import React, { useState } from "react";

function View ({ userData, onEditUserInfo }) {
  return (
    <div className="w-1/2 bg-gray-200 p-4 rounded-lg">
      <h1 className="text-2xl mb-4">Overview</h1>
      <div className="mb-4">
        <h2 className="text-lg">Profile Image</h2>
        {userData.profileImage && (
          <img
            src={userData.profileImage}
            alt="Profile"
            className="w-24 h-24 rounded-full"
          />
        )}
      </div>
      <div className="mb-4">
        <h2 className="text-lg">Full Name</h2>
        <p>{`${userData.firstName} ${userData.lastName}`}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-lg">Email Address</h2>
        <p>{userData.email}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-lg">Bio</h2>
        <p>{userData.bio}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-lg">Country Code</h2>
        <p>{userData.countryCode}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-lg">Phone Number</h2>
        <p>{userData.phoneNumber}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-lg">Work History</h2>
        {userData.workHistory.map((work, index) => (
          <div key={index}>
            <p>
              <strong>Job Title:</strong> {work.jobTitle}
            </p>
            <p>
              <strong>Company:</strong> {work.company}
            </p>
            {/* Add more work history fields here */}
          </div>
        ))}
      </div>
      <div className="mb-4">
        <h2 className="text-lg">Education History</h2>
        {userData.educationHistory.map((education, index) => (
          <div key={index}>
            <p>
              <strong>School Name:</strong> {education.schoolName}
            </p>
            <p>
              <strong>Degree:</strong> {education.degree}
            </p>
            {/* Add more education history fields here */}
          </div>
        ))}
      </div>
      <button onClick={() => onEditUserInfo()} className="btn btn-primary">
        Edit Information
      </button>
    </div>
  );
}

export default View;
