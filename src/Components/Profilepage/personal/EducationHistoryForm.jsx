import React, { useState } from "react";
import countries from "./Data/Countries";
import { MdOutlineCalendarToday } from "react-icons/md";
import Select from "react-select";
import "../personal/Styles/eduform.css";
import { LuGraduationCap , LuBook } from "react-icons/lu";

function EducationHistoryForm({ onSaveEducation, onCancel }) {
  const [educationData, setEducationData] = useState({
    schoolName: "",
    degree: "",
   
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
    <>
     <form className="mb-4 mt-5 p-4 border rounded-lg edu-form-desktop">
      <div className="flex">
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
    </form>
    <form className="mb-4 mt-5 p-2 edu-form-mobile">
      <div className="flex">
        <h2 className="text-md mb-0 font-bold text-[#001975] font-secondary">Add Education History</h2>
      </div>
      <div className="mt-5">
      <div className="">
      <label htmlFor="schoolName" className=" edu-text font-secondary">Name Of Institution</label>
      <div className=" mt-1 flex w-full p-2 form-container">
     <LuGraduationCap size={22} color="black" className="mt-2 ml-1" />
     <div className=" form-input ml-5 mb-2">
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
      <div className="container mt-2 mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-1 pl-0">
      <label htmlFor="degree" className="edu-text font-secondary ">Field Of Study</label>
      <div className=" mt-1 flex w-full p-2 form-container">
        <LuBook size={20} color="black" className="mt-2 ml-1" />
        <div className="form-input ml-5 mb-2 ">
        <input
          type="text"
          id="degree"
          name="degree"
          value={educationData.degree}
          onChange={handleInputChange}
          className="input-area  w-full mt-1  font-secondary"
        />
      </div>
      </div>
      <label htmlFor="country" className="edu-text font-secondary">Degree</label>
      <div className="mt-1  flex number-input w-full p-2">
      <LuBook  size={22} color="black" className="mt-3 ml-1"/>
          <div className="w-full ml-5 mb-2">
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
        <label htmlFor="country" className="edu-text font-secondary">Start Month</label>
        <div className="mt-1  flex number-input w-full p-2">
      <MdOutlineCalendarToday  size={20} color="black" className="mt-3 ml-1"/>
          <div className="w-full ml-5 mb-2">
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
        <label htmlFor="country" className="edu-text font-secondary">Start Year</label>
        <div className="mt-1  flex number-input w-full p-2">
      <MdOutlineCalendarToday size={20} color="black" className="mt-3 ml-1"/>
          <div className="w-full ml-5 mb-2">
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
        <label htmlFor="country" className="edu-text font-secondary">End Month / Expected Graduation Month</label>
        <div className="mt-1  flex number-input w-full p-2">
      <MdOutlineCalendarToday size={20} color="black" className="mt-3 ml-1"/>
          <div className="w-full ml-5 mb-2">
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
        <label htmlFor="country" className="edu-text font-secondary">End Year / Expected Graduation Year </label>
        <div className="mt-1 flex number-input w-full p-2">
      <MdOutlineCalendarToday size={20} color="black" className="mt-3 ml-1"/>
          <div className="w-full ml-5 mb-2">
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
      <div className="flex items-center justify-between mt-5">
        <p className="font-secondary font-bold text-[12px]">I currently study here</p>
        <input type="checkbox"
        
        />
      </div>
      <div className=" items-center mt-8 edu-form">
        <button onClick={onCancel} className="btn w-full mr-2 font-secondary cancel-button">
          Cancel
        </button>
        <button onClick={handleSave} className="btn w-full mt-4 font-secondary btn-primary save-button">
          Save Details
        </button>
      </div>
    </form>
    </>
   
  );
}

export default EducationHistoryForm;
