import React from "react";
import Navigation from "../Profilenavigation/navigation";
import Sidebar from "../Profilenavigation/sidebar";
import person from "../../../assets/icons/person.svg";
import book from "../../../assets/icons/book.svg";
import achievement from "../../../assets/icons/hotel-class.png";
import star from "../../../assets/icons/star_border.svg";
import events from "../../../assets/icons/event.svg";
import "../Profilenavigation/styles/style.css";
const Dashboard = () => {
  return (
    <section className="flex">
      <Navigation />
      {/* sidebar */}
      <div
        className="sidebar bg-[#fff] flex justify-end border border-r-1 w-1/6 h-screen mt-24 xs: w-auto  md: w-auto
      "
      >
        <Sidebar />
      </div>
      {/* main content */}
      <div className="flex grow mt-24 flex-col bg-[#F6F6F6] overflow-y-auto">
        <div className="first-border-box">
          <h1 className="font-bold text-2xl font-primary text-[#00114E]">
            Overview
          </h1>
        </div>
        <div className="dashboard-box">
          <main className="dashboard-grid">
            <div className="columns grid-col-span-2">
              <div className="parent-border bg-[#fff] flex flex-col gap-y-6">
                <div className="flex gap-3">
                  <img src={person} alt="personal-info" />
                  <h1 className="text-[#2B3F8C] text-base font-bold font-secondary">
                    Personal Information
                  </h1>
                </div>
                <div className="flex gap-3">
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-3 social-icon">
                      <i className="fa-brands fa-discord"></i>
                      <h5 className="text-[#000] text-base font-bold font-secondary">
                        Bukayo Saka
                      </h5>
                    </div>
                    <p className="text-[#656565] text-base font-medium">
                      This area contains Bio. This area contains Bio. This area
                      contains Bio. This area contains Bio. This area contains
                      Bio. This area contains Bio. This area contains Bio. This
                      area contains Bio. This area contains Bio.
                    </p>
                    <div className="flex info-mobile-dashboard">
                      <div className="w-[50%] text-[#000] font-semibold font-medium font-secondary">
                        <h5>Phone Number</h5>
                      </div>
                      <div className="w-[50%] text-[#000] font-semibold font-medium font-secondary">
                        <h5>Email Address</h5>
                      </div>
                    </div>
                    <h5 className="text-[#000] font-semibold font-secondary">
                      Country
                    </h5>
                    <h5>Date Joined</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="columns two bg-[red]">2</div>
            <div className="columns">
              <div className="parent-border three bg-[#fff] flex flex-col gap-y-6">
                <div className="flex gap-3">
                  <img src={book} alt="courses" />
                  <h1 className="text-[#2B3F8C] text-base font-bold font-secondary">
                    Courses
                  </h1>
                </div>
                <div className="flex flex-col gap-y-4">
                  <div className="parent-border bg-[#fff] flex justify-between items-center">
                    <div className="flex flex-col">
                      <h5 className="text-[#000] text-xs font-medium font-secondary">
                        Ongoing
                      </h5>
                      <figure className="text-[#000] font-bold text-base font-secondary">
                        0
                      </figure>
                    </div>
                    <figure className="text-4xl font-semibold font-primary text-[#2B3F8C]">
                      0
                    </figure>
                  </div>
                  <div className="parent-border bg-[#fff] flex justify-between items-center">
                    <div className="flex flex-col">
                      <h5 className="text-[#000] text-xs font-medium font-secondary">
                        Completed
                      </h5>
                      <figure className="text-[#000] font-bold text-base font-secondary">
                        0
                      </figure>
                    </div>
                    <figure className="text-4xl font-semibold font-primary text-[#2B3F8C]">
                      0
                    </figure>
                  </div>
                  <div className="parent-border bg-[#fff] flex justify-between items-center">
                    <div className="flex flex-col">
                      <h5 className="text-[#000] text-xs font-medium font-secondary">
                        Attendance
                      </h5>
                      <figure className="text-[#000] font-bold text-base">
                        Total-100%
                      </figure>
                    </div>
                    <figure className="text-4xl font-semibold font-primary text-[#2B3F8C]">
                      0
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="parent-border four bg-[#fff] flex flex-col gap-y-6">
                <div className="flex gap-3">
                  <img src={achievement} alt="achievement-icon" />
                  <h1 className="text-[#2B3F8C] text-base font-bold font-secondary">
                    Achievements
                  </h1>
                </div>
                <div className="flex flex-col gap-y-4">
                  <div className="parent-border bg-[#fff] flex justify-between items-center">
                    <div className="flex flex-col">
                      <h5 className="text-[#000] text-xs font-medium font-secondary">
                        Total learning hours
                      </h5>
                      <figure className="text-[#000] font-bold text-base font-secondary">
                        0 hours
                      </figure>
                    </div>
                    <img src={star} alt="star" />
                  </div>
                  <div className="parent-border bg-[#fff] flex justify-between items-center">
                    <div className="flex flex-col">
                      <h5 className="text-[#000] text-xs font-medium font-secondary">
                        Certificates completed
                      </h5>
                      <figure className="text-[#000] font-bold text-base font-secondary">
                        0
                      </figure>
                    </div>
                    <img src={star} alt="star" />
                  </div>
                  <div className="parent-border bg-[#fff] flex justify-between items-center">
                    <div className="flex flex-col">
                      <h5 className="text-[#000] text-xs font-medium font-secondary">
                        Courses completed
                      </h5>
                      <figure className="text-[#000] font-bold text-base font-secondary">
                        0
                      </figure>
                    </div>
                    <img src={star} alt="star" />
                  </div>
                </div>
              </div>
            </div>
            <div className="columns parent-border bg-[#fff] sm: bg-[blue] grid-col-span-2 ">
              <div className="flex gap-3">
                <img src={events} alt="events" />
                <h1 className="text-[#2B3F8C] text-base font-bold font-secondary">
                  Events
                </h1>
              </div>
              <div className="flex justify-center items-center mx-0 inner-border-margin">
                <h5 className="text-[#000] font-bold text-base font-secondary">
                  You have no events coming up
                </h5>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* footer */}
    </section>
  );
};

export default Dashboard;
