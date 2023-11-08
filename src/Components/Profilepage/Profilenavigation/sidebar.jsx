//array for the sidebar
import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { AiOutlineBook } from "react-icons/ai";
import { GrAchievement } from "react-icons/gr";
import { LuSettings } from "react-icons/lu";

// const dashboardicon = <FaBeer />;

const sidebar = [
  { icon: <MdOutlineDashboard />, title: "Dashboard" },
  { icon: <BsPerson />, title: "Personal" },
  { icon: <AiOutlineBook />, title: "Courses" },
  { icon: <GrAchievement />, title: "Achievements" },
  { icon: <LuSettings />, title: "Settings" },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      {sidebar.map((item, index) => {
        return (
          <div
            key={index}
            className="sidebar-item flex flex-col items-center py-10 px-3 space-y-2"
          >
            <div className="sidebar-image">
              <i
                style={{
                  color: "#001975",
                  fontSize: "20px",
                }}
              >
                {item.icon}
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
