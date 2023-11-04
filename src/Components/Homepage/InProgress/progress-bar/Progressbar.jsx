import React from "react";

const Progressbar = () => {
  return (
    <div className="mt-5 mb-5">
      <div className="progress-bar-container flex justify-between w-[100%] h-[3px] bg-[#E5E5E5] rounded-[12px]">
        <div className=" bg-[red] h-[2px] rounded-[12px] w-[35%]"></div>
      </div>
      <div className="percentage flex justify-between">
          <strong className="percentage-numbers thirty-five font-secondary font-bold text-xs text-[#272727]">
            35%
          </strong>
          <strong className="percentage-numbers one-hundred font-secondary font-bold text-xs text-[#272727]">
            100%
          </strong>
      </div>
    </div>
  );
};

export default Progressbar;
