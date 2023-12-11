import React, { useState } from "react";
import countries from "./Data/Countries";
import { MdOutlineCalendarToday } from "react-icons/md";
import Select from "react-select";
import "../personal/Styles/workform.css";
import { LuGraduationCap , LuBook } from "react-icons/lu";

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
  const handleCountryChange = (selectedOption) => {
    const country = selectedOption.value;
    onSaveUserInfo({ ...educationData, country });
  };
  const handleSave = () => {
    onSaveEducation(educationData);
    setEducationData({
      schoolName: "",
      degree: "",
      // Reset other education history fields
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
    <div className="mb-4 mt-5 p-4 border rounded-lg">
      <div className="flex">
        <LuGraduationCap size={25} color="red" />
        <h2 className="text-md mb-0 font-bold text-[#001975] ml-2 font-secondary">Add Education History</h2>
      </div>
      <div className="mt-5">
      <div className="">
      <div className="mb-2 flex w-full p-5 form-container">
     <LuGraduationCap size={20} color="black" />
     <div className=" form-input ml-5 mb-2">
        <label htmlFor="schoolName" className=" form-text font-secondary">Name Of Institution</label>
        <input
          type="text"
          id="schoolName"
          name="schoolName"
          placeholder="Ex. ABC University"
          value={educationData.schoolName}
          onChange={handleInputChange}
          className="input-area textarea w-full font-secondary"
        />
      </div>
      </div>
      </div>
      <div className="container mt-5 mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 pl-0">
      
      <div className=" mt-8 flex w-full p-5 form-container">
        <LuBook size={20} color="black" className="mt-2" />
        <div className="form-input ml-5 mb-2">
        <label htmlFor="degree" className=" form-text font-secondary">Field Of Study</label>
        <input
          type="text"
          id="degree"
          name="degree"
          value={educationData.degree}
          onChange={handleInputChange}
          className="input-area font-secondary"
        />
      </div>
      </div>
      <div className="mt-8  flex number-input w-full p-5">
      <LuBook  size={20} color="black" className="mt-4"/>
          <div className="w-full ml-5">
          <label htmlFor="country" className="form-text font-secondary">Degree</label>
          <Select
            id="country"
            name="country"
            value={{
              value:educationData.country,
              label:educationData.country,
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
      <MdOutlineCalendarToday  size={20} color="black" className="mt-4"/>
          <div className="w-full ml-5">
          <label htmlFor="country" className="form-text font-secondary">Start Month</label>
          <Select
            id="country"
            name="country"
            value={{
              value:educationData.country,
              label:educationData.country,
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
      <MdOutlineCalendarToday size={20} color="black" className="mt-4"/>
          <div className="w-full ml-5">
          <label htmlFor="country" className="form-text font-secondary">Start Year</label>
          <Select
            id="country"
            name="country"
            value={{
              value:educationData.country,
              label:educationData.country,
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
      <MdOutlineCalendarToday size={20} color="black" className="mt-4"/>
          <div className="w-full ml-5">
          <label htmlFor="country" className="form-text font-secondary">End Month / Expected Graduation Month</label>
          <Select
            id="country"
            name="country"
            value={{
              value:educationData.country,
              label:educationData.country,
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
      <MdOutlineCalendarToday size={20} color="black" className="mt-4"/>
          <div className="w-full ml-5">
          <label htmlFor="country" className="form-text font-secondary">End Year / Expected Graduation Year </label>
          <Select
            id="country"
            name="country"
            value={{
              value:educationData.country,
              label:educationData.country,
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
      </div>
      {/* Add other input fields for education history here */}
      <div className="flex items-center justify-between mt-8">
        <p className="font-secondary font-bold text-[12px]">I currently study here</p>
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

export default EducationHistoryForm;
