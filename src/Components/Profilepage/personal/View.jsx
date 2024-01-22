import React, { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import "../personal/Styles/view.css";

function View({ userData, onEditUserInfo }) {
  const [showDetails, setShowDetails] = useState(true);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const renderSection = (sectionTitle, content) => {
    return showDetails && (
      <div className="mt-8">
        <h2 className="text-lg">{sectionTitle}</h2>
        {content}
      </div>
    );
  };

  return (
    <div className="w-full bg-white block p-4 sm:p-4 view-container">
      <div className="flex gap-2 view-eye" style={{cursor:"pointer"}}>
        {showDetails ? (
          <IoEyeOutline onClick={toggleDetails} size={25} color="red" className="mt-1"/>
        ) : (
          <IoEyeOffOutline onClick={toggleDetails} size={25} color="red" className="mt-1" />
        )}

        <h1 className="text-md mt-1 font-bold text-[#001975] view-header">Overview</h1>
      </div>
      
      {renderSection( (
        userData.profileImage && (
          <div className="flex items-center justify-center view-image">
          <img
            src={userData.profileImage}
            alt="Profile"
            className="w-24 h-24 rounded-full "
          />
          </div>
        )
      ))}
       
     <div className="view-contents">
      {renderSection( (
        <p className="text-center">{`${userData.firstName} ${userData.lastName}`}</p>
      ))}

      {renderSection( (
        <p className="text-center">{userData.email}</p>
      ))}

      {renderSection("Bio", (
        <p>{userData.bio}</p>
      ))}

      {renderSection("Work History", (
        userData.workHistory.map((work) => (
          <div key={work.id}>
            <p>
              <strong>Job Title:</strong> {work.jobTitle}
            </p>
            <p>
              <strong>Company:</strong> {work.company}
            </p>
            {/* Add more work history fields here */}
          </div>
        ))
      ))}

      {renderSection("Education History", (
        userData.educationHistory.map((education) => (
          <div key={education.id}>
            <p>
              <strong>School Name:</strong> {education.schoolName}
            </p>
            <p>
              <strong>Degree:</strong> {education.degree}
            </p>
            {/* Add more education history fields here */}
          </div>
        ))
      ))}

      <button onClick={onEditUserInfo} className="btn btn-primary">
        Edit Information
      </button>
      </div>
    </div>
  );
}

export default View;
