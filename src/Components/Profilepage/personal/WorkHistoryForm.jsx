import React, { useState } from "react";
import { IoBagOutline } from "react-icons/io5";
import { BiCurrentLocation } from "react-icons/bi";
import countries from "./Data/Countries";
import Select from "react-select";
import "../personal/Styles/workform.css";

function WorkHistoryForm({ onSaveWorkHistory, onCancel }) {
  const [workHistoryData, setWorkHistoryData] = useState({
    jobTitle: "",
    company: "",
    location: ""
    // Add other fields for work history
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWorkHistoryData({ ...workHistoryData, [name]: value });
  };
  const handleCountryChange = (selectedOption) => {
    const country = selectedOption.value;
    onSaveUserInfo({ ...workHistoryData, country });
  };

  const handleSave = () => {
    onSaveWorkHistory(workHistoryData);
    setWorkHistoryData({
      jobTitle: "",
      company: "",
      location:"",
      // Reset other work history fields
    });
  };
  
  const countryStyles = {
    control: (provided) => ({
      ...provided,
      outline: "none",
      border: "none",
      borderRadius: "10px",
      boxShadow: "none",
   
    }),
  };
  

  return (
    <div className="mb-4 p-4 border rounded-lg" >
      <div className="flex">
      <IoBagOutline size={20} color="red"/>
      <h2 className="text-md mb-0 font-bold text-[#001975] ml-2 font-secondary">Add Work History</h2>
      </div>
         {/* Add container div to the inputs  */}
        <div className="container mt-5 mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 pl-0 ">
      <div className="mb-2 flex w-full p-5 form-container">
      <IoBagOutline size={20} color="black" className="mt-2" />
      <div className="form-input ml-5">
        <label htmlFor="jobTitle"className=" form-text font-secondary" >Job Title</label>
        <input
          type="text"
          id="jobTitle"
          name="jobTitle"
          placeholder=" Ex. Product Designer"
          value={workHistoryData.jobTitle}
          onChange={handleInputChange}
          className="input-area font-secondary"
        />
      </div>
      </div>
      <div className="mb-2 flex w-full p-5 form-container">
      <IoBagOutline size={20} color="black" className="mt-2" />
      <div className=" form-input ml-5 mb-2">
        <label htmlFor="company" className=" form-text font-secondary">Company Name</label>
        <input
          type="text"
          id="company"
          name="company"
          placeholder="Ex. ABC PLC"
          value={workHistoryData.company}
          onChange={handleInputChange}
          className="input-area font-secondary"
        />
      </div>
      </div>
      <div className="mt-8 flex w-full p-5 form-container">
      <BiCurrentLocation size={20} className="mt-2"/> 
      <div className="form-input ml-5">
        <label htmlFor="location"className=" form-text font-secondary">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="Ex. Lagos, Nigeria"
          value={workHistoryData.location}
          onChange={handleInputChange}
          className="input-area font-secondary"
        />
      </div>
      </div>     
      <div className="mt-8  flex number-input w-full p-5">
          <BiCurrentLocation size={20} className="mt-4"/>
          <div className="w-full ml-5">
          <label htmlFor="country" className="form-text font-secondary">Employment Type</label>
          <Select
            id="country"
            name="country"
            value={{
              value:workHistoryData.country,
              label:workHistoryData.country,
            }}
            onChange={handleCountryChange}
            options={countries.map((country) => ({
              value: country.name,
              label: `${country.name} (${country.iso})`,
            }))}
            styles={countryStyles}
            className="select font-secondary"
          />
          </div>
        </div>
        <div className="mt-8  flex number-input  w-full p-5">
          <BiCurrentLocation size={20} className="mt-4"/>
          <div className="w-full ml-5">
          <label htmlFor="country" className="form-text font-secondary">Start Month</label>
          <Select
            id="country"
            name="country"
            value={{
              value:workHistoryData.country,
              label:workHistoryData.country,
            }}
            onChange={handleCountryChange}
            options={countries.map((country) => ({
              value: country.name,
              label: `${country.name} (${country.iso})`,
            }))}
            styles={countryStyles}
            className="select font-secondary"
          />
          </div>
        </div>
        <div className="mt-8  flex number-input  w-full p-5">
          <BiCurrentLocation size={20} className="mt-4"/>
          <div className="w-full ml-5">
          <label htmlFor="country" className="form-text font-secondary">Start Year</label>
          <Select
            id="country"
            name="country"
            value={{
              value:workHistoryData.country,
              label:workHistoryData.country,
            }}
            onChange={handleCountryChange}
            options={countries.map((country) => ({
              value: country.name,
              label: `${country.name} (${country.iso})`,
            }))}
            styles={countryStyles}
            className="select font-secondary"
          />
          </div>
        </div>
        <div className="mt-8  flex number-input w-full p-5">
          <BiCurrentLocation size={20} className="mt-4"/>
          <div className="w-full ml-5">
          <label htmlFor="country" className="form-text font-secondary">End Month</label>
          <Select
            id="country"
            name="country"
            value={{
              value:workHistoryData.country,
              label:workHistoryData.country,
            }}
            onChange={handleCountryChange}
            options={countries.map((country) => ({
              value: country.name,
              label: `${country.name} (${country.iso})`,
            }))}
            styles={countryStyles}
            className="select font-secondary"
          />
          </div>
        </div>
        <div className="mt-8  flex number-input w-full p-5">
          <BiCurrentLocation size={20} className="mt-4"/>
          <div className="w-full ml-5">
          <label htmlFor="country" className="form-text font-secondary">End Year</label>
          <Select
            id="country"
            name="country"
            value={{
              value:workHistoryData.country,
              label:workHistoryData.country,
            }}
            onChange={handleCountryChange}
            options={countries.map((country) => ({
              value: country.name,
              label: `${country.name} (${country.iso})`,
            }))}
            styles={countryStyles}
            className="select font-secondary"
          />
          </div>
        </div>
      </div>
      {/* Add other input fields for work history here */}
      <div className="flex items-center justify-between mt-8">
        <p className="font-secondary font-bold text-[12px]">I currently work here</p>
        <input type="checkbox"
        
        />
      </div>
      <div className="flex items-center justify-between mt-8 work-form">
        <button onClick={onCancel} className="btn w-[30%]  mr-2 font-secondary cancel-button">
          Cancel
        </button>
        <button onClick={handleSave} className="btn w-[30%]  font-secondary btn-primary save-button">
          Save Details
        </button>
      </div>
    </div>
  );
}

export default WorkHistoryForm;
