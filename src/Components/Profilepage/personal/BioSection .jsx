import React from "react";
import countries from "./Data/Countries";
import countryCodes from "./Data/CountryCodes";
import { BiUser, BiDetail , BiEnvelope , BiCurrentLocation} from "react-icons/bi";
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

  const handleCountryChange = (selectedOption) => {
    const country = selectedOption.value;
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
      padding: "10px",
      border: "1px solid rgba(43, 63, 140, 1) ; ",
      borderRadius: "10px",
      boxShadow: "none",
      width: "100%",
      fontSize: "14px",
    }),
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
        <div className="mt-6 w-full bio-text-container">
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
        <div className="flex gap-2 mt-8">
          <div className="mt-5 w-45">
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
              className="select w-40"
              styles={customStyles} 
            />
          </div>
          <div className=" number-input w-[30%] p-5">
            <label htmlFor="phoneNumber" className="label-text">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={userData.phoneNumber}
              onChange={handlePhoneNumberChange}
              className="input"
            />
          </div>
          <div className=" number-input flex  w-[100%] p-5">
            <BiEnvelope size={20} className="mt-4" />
            <div className="ml-5 w-full">
            <label htmlFor="email" className=" label-text">Email</label>
            <input
              type="email"
              id="email"
              value={userData.email}
              onChange={handleEmailChange}
              className="input w-full"
            />
            </div>
          </div>
        </div>
        <div className="mt-8  flex number-input custom-location w-1/2 p-5">
          <BiCurrentLocation size={20} className="mt-4"/>
          <div className="w-full ml-5">
          <label htmlFor="country" className="label-text">Country</label>
          <Select
            id="country"
            name="country"
            value={{
              value:userData.country,
              label:userData.country,
            }}
            onChange={handleCountryChange}
            options={countries.map((country) => ({
              value: country.name,
              label: `${country.name} (${country.iso})`,
            }))}
            styles={countryStyles}
            className="select "
          />
          </div>
        </div>
      </form>
    </div>
  );
}

export default BioSection;
