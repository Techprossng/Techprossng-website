import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import "../Validate/Style/validate.css"; 

const Validated = () => {
  const [rrrInput, setRrrInput] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchTransaction = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://techprosnaija.com/api/v1/payments/transactions/${rrrInput}`
      );
      const data = await response.json();

      setResult(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setResult({
        message: "Not Found",
        remitaMessage: "Failed to retrieve information. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="w-full h-full">
      <div className="w-full h-[460px] register-header-container">
        <div className=" register-inner px-12 py-40">
          <div className="text-center register-header">
            <h1 className="text-[90px] font-bold text-white">
              Payment Overview
            </h1>
          </div>
        </div>
      </div>

      <div className="p-10 validate-form-container">
        <div className="flex justify-around p-10 validate-form">
          <div className=" validate-form-left">
            <BiSearch size={25} className="relative top-[41%] left-[3%] BiSearch" />
            <input
              type="text"
              value={rrrInput}
              onChange={(e) => setRrrInput(e.target.value)}
            
              placeholder="Search for transaction"
              className="w-[570px] p-4 validate-input "
            />
          </div>
          <div className="p-6 validate-form-right">
          <button className="w-[301px] h-[56px] validate-button" onClick={searchTransaction}>Continue</button>

          </div>
          
        </div>

        {loading && (
          <div className="flex items-center justify-center">
            <div className="text-[30px] spinner"></div>
          </div>
        )}

        <div className="flex justify-around validation-display">
          <div className=" payment-header">
            <h6 className="font-bold">Status</h6>
          </div>

          <div className=" payment-mode-header">
            <h6 className="font-bold">Payment Status</h6>
          </div>
        </div>

        {result && (
          <div className="flex justify-around validation-result">
            <div className=" validate-result-left">
              <div
                className={`w-[100%] h-[35px] p-1.5 relative left-[16%]  ${
                  result.message === "Request successful"
                    ? "successful"
                    : "error"
                }`}
              >
                {result.message}
              </div>
            </div>

            <div className=" validate-result-right">
              <p>{result.remitaMessage}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Validated;
