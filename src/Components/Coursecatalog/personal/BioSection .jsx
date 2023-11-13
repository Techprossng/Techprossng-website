import React from "react";
import countries from "./Data/Countries";
import countryCodes from "./Data/CountryCodes";
import { BiUser, BiDetail } from "react-icons/bi";
import Select from "react-select";
import "../personal/Styles/biosection.css";

function BioSection({ userData, onSaveUserInfo }) {
  const handleBioChange = (e) => {
    const { name, value } = e.target;
    onSaveUserInfo({ ...userData, [name]: value });
  };

  const handleCountryCodeChange = (selectedOption) => {
    const countryCode = selectedOption.value;
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
  const handleEmailChange = (e) => {
    const email = e.target.value;
    onSaveUserInfo({ ...userData, email });
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      outline: "none",
      padding: "8px",
      // Add any other custom styles you want for the control
    }),
  };
  

  return (
    <div className="mt-10 w-full bio-container p-5">
      <form className="w-full block">
        <div className="flex">
          <BiUser size={25} style={{ color: "red" }} />
          <h2 className="text-lg mb-2 font-bold text-[#001975] ml-2">Bio</h2>
        </div>
        <div className="flex justify-between gap-4 mt-5">
          <div className="mb-2 flex w-full p-5 input-container">
            <BiUser size={20} className="mt-2" />
            <div className="name-input ml-5">
              <label htmlFor="firstName" className=" label-text">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Jane"
                value={userData.firstName}
                onChange={handleBioChange}
                className="input"
              />
            </div>
          </div>

          <div className="mb-2 flex w-full p-5 input-container">
            <BiUser size={20} className="mt-2" />
            <div className="name-input ml-5">
              <label htmlFor="lastName" className=" label-text">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Doe"
                value={userData.lastName}
                onChange={handleBioChange}
                className="input"
              />
            </div>
          </div>
        </div>
        <div className="mb-2 w-full bio-text-container">
          <div className=" flex p-5">
            <BiDetail size={20} className="mt-5" />
            <div className="ml-5 bio-text w-full">
              <label htmlFor="bio" className="label-text">
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                placeholder="Write a short introduction about yourself"
                value={userData.bio}
                onChange={handleBioChange}
                className="textarea w-full "
              />
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="mb-2 w-1/2">
            <Select
              id="countryCode"
              name="countryCode"
              value={{
                value: userData.countryCode,
                label: userData.countryCode,
              }}
              onChange={handleCountryCodeChange}
              options={countryCodes.map((country) => ({
                value: country.code,
                label: `${country.code} (${country.name})`,
              }))}
              className="select  w-1/2 "
              styles={customStyles} 
            />
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
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              value={userData.email}
              onChange={handleEmailChange}
              className="input"
            />
          </div>
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
      </form>
    </div>
  );
}

export default BioSection;
