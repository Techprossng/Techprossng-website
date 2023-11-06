//array for the sidebar
import React from "react";
import dashboardicon from "../../../assets/icons/dashboardicon.png";
// import personal from "../../../assets/icons/profile-person.svg";
// import courses from "../../../assets/icons/profile-book.svg";
// import achievements from "../../../assets/icons/profile-hotel-class.svg";

const sidebar = [
  { icon: dashboardicon, title: "Dashboard" },
//   { icon: personal, title: "Personal" },
//   { icon: courses, title: "Courses" },
//   { icon: achievements, title: "Achievements" },
//   { icon: dashboardicon, title: "Settings" },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      {sidebar.map((item, index) => {
        return (
          <div
            key={index}
            className="sidebar-item flex flex-col items-center py-12 px-5"
          >
            <div className="sidebar-image">
                <i className="color-[red]">
                    <img src={item.icon} alt="icon" />
                </i>
            </div>
            <div className="text-[#001975]">
              <p>{item.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
