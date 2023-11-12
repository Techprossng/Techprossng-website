import React from "react";
import countries from "./Data/Countries";
import countryCodes from "./Data/CountryCodes";
import { BiUser } from "react-icons/bi";
import "../personal/Styles/biosection.css";

function BioSection({ userData, onSaveUserInfo }) {
  const handleBioChange = (e) => {
    const { name, value } = e.target;
    onSaveUserInfo({ ...userData, [name]: value });
  };

  const handleCountryCodeChange = (e) => {
    const countryCode = e.target.value;
    onSaveUserInfo({ ...userData, countryCode });
  };

  const handlePhoneNumberChange = (e) => {
    const phoneNumber = e.target.value;
    onSaveUserInfo({ ...userData, phoneNumber });
  };

  const handleCountryChange = (e) => {
    const country = e.target.value;
    onSaveUserInfo({ ...userData, country });
  };

  return (
    <div className="mt-10 w-full bio-container p-5">
      <div className="flex">
      <BiUser size={25} style={{ color:"red"}}/>
      <h2 className="text-lg mb-2 font-bold text-[#001975] ml-2">Bio</h2>
      </div>
       <div className="flex justify-between mt-5">
      <div className="mb-2 flex w-full p-5 input-container">
      <BiUser size={20} className="mt-2"/>
       <div className="name-input ml-5">
        <label htmlFor="firstName" className=" label-text">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={userData.firstName}
          onChange={handleBioChange}
          className="input"
        />
        </div>
      </div>
      
      <div className="mb-2 flex w-full p-5 input-container">
      <BiUser size={20}  className="mt-2"/>
      <div className="name-input ml-5">
        <label htmlFor="lastName" className=" label-text">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={userData.lastName}
          onChange={handleBioChange}
          className="input"
        />
       </div> 
    
      </div>
      </div>
      <div className="mb-2">
        <label htmlFor="bio">Bio:</label>
        <textarea
          id="bio"
          name="bio"
          value={userData.bio}
          onChange={handleBioChange}
          className="textarea"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="countryCode">Country Code:</label>
        <select
          id="countryCode"
          name="countryCode"
          value={userData.countryCode}
          onChange={handleCountryCodeChange}
          className="select"
        >
         {countryCodes.map((country, index) => (
            <option key={index} value={country.code}>
              {`${country.code} (${country.name})`}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-2">
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={userData.phoneNumber}
          onChange={handlePhoneNumberChange}
          className="input"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="country">Country:</label>
        <select
          id="country"
          name="country"
          value={userData.country}
          onChange={handleCountryChange}
          className="select"
        >
         {countries.map((country, index) => (
            <option key={index} value={country.code}>
               {`${country.name} (${country.iso})`}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default BioSection;
