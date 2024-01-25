import React from "react";
import Newsletter from "../../Landingpage/Newsletter Section/newsletter";
import img1 from "../../BootCamp/NewsLetterBootcamp/image/img1.svg";
import img2 from "../../BootCamp/NewsLetterBootcamp/image/img2.svg";

const NewsLetterBootcamp = () => {
  return (
    <div className="px-6 py-12 md:px-12 mt-24 ">
      <div className="flex justify-between items-center ">
        <div className="flex w-3/6">
          <img src={img1} alt="img1" />
          <img src={img2} alt="img2" />
        </div>
        <div className="w-3/6">
          <Newsletter />
        </div>
      </div>
    </div>
  );
};

export default NewsLetterBootcamp;
