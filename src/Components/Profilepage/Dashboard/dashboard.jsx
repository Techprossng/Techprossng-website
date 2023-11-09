import React from "react";
import Navigation from "../Profilenavigation/navigation";
import Sidebar from "../Profilenavigation/sidebar";
import person from "../../../assets/icons/person.svg";
import book from "../../../assets/icons/book.svg";
import "../Profilenavigation/styles/style.css";
const Dashboard = () => {
  return (
    <section className="flex w-full">
      <Navigation />

      {/* path change */}

      {/* sidebar */}

      <div className="bg-[#fff] flex justify-end border border-r-1 w-1/6 h-screen mt-24">
        <Sidebar />
      </div>

      {/* main content */}

      <div className="flex grow mt-24 flex-col bg-[grey]">
        <div className="first-border-box">
          <h1>Dashboard</h1>
        </div>

        <div className="dashboard-box">
          <main className="dashboard-grid">
            <div className="columns one grid-col-span-2">
              <div className="title-border bg-[#fff] flex flex-col gap-y-6">
                <div className="flex gap-3">
                  <img src={person} alt="personal-info" />
                  <h1>Personal Information</h1>
                </div>
                <div className="flex gap-3">
                  <div className="social-icons">
                    <i className="fa-brands fa-discord"></i>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h5 className="font-semibold text-xl">Bukayo Saka</h5>
                    <p>
                      This area contains Bio. This area contains Bio. This area
                      contains Bio. This area contains Bio. This area contains
                      Bio. This area contains Bio. This area contains Bio. This
                      area contains Bio. This area contains Bio.
                    </p>
                    <div className="flex">
                      <div className="w-[50%]">
                        <h5>Phone Number</h5>
                      </div>
                      <div className="w-[50%]">
                        <h5>Email Address</h5>
                      </div>
                    </div>
                    <h5>Country</h5>
                    <h5>Date Joined</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="columns two bg-[red]">2</div>
            <div className="columns three">
              <div className="title-border bg-[#fff] flex flex-col gap-y-6">
                <div className="flex gap-3">
                  <img src={book} alt="courses" />
                  <h1>Courses</h1>
                </div>
                <div className="flex flex-col">
                  <div className="title-border bg-[#fff] flex justify-between items-center">
                    <div className="flex flex-col">
                      <h5>Ongoing</h5>
                      <figure>0</figure>
                    </div>
                    <figure className="text-4xl font-semibold">0</figure>
                  </div>
                  <div className="title-border bg-[#fff] flex justify-between items-center">
                    <div className="flex flex-col">
                      <h5>Completed</h5>
                      <figure>0</figure>
                    </div>
                    <figure className="text-4xl font-semibold">0</figure>
                  </div>
                  <div className="title-border bg-[#fff] flex justify-between items-center">
                    <div className="flex flex-col">
                      <h5>Attendance</h5>
                      <figure>Total-100%</figure>
                    </div>
                    <figure className="text-4xl font-semibold">0</figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="columns four">
            <div className="title-border bg-[#fff] flex flex-col gap-y-6">
                <div className="flex gap-3">
                  <img src={book} alt="courses" />
                  <h1>Courses</h1>
                </div>
                <div className="flex flex-col">
                  <div className="title-border bg-[#fff] flex justify-between items-center">
                    <div className="flex flex-col">
                      <h5>Ongoing</h5>
                      <figure>0</figure>
                    </div>
                    <figure className="text-4xl font-semibold">0</figure>
                  </div>
                  <div className="title-border bg-[#fff] flex justify-between items-center">
                    <div className="flex flex-col">
                      <h5>Completed</h5>
                      <figure>0</figure>
                    </div>
                    <figure className="text-4xl font-semibold">0</figure>
                  </div>
                  <div className="title-border bg-[#fff] flex justify-between items-center">
                    <div className="flex flex-col">
                      <h5>Attendance</h5>
                      <figure>Total-100%</figure>
                    </div>
                    <figure className="text-4xl font-semibold">0</figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="columns five bg-[red] ">5</div>
          </main>
        </div>
      </div>

      {/* footer */}
    </section>
  );
};

export default Dashboard;
