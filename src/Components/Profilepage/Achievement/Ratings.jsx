import React from "react"

const StarRating = () => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <svg
      key={index}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="h-8 w-8 text-yellow-500 font-bold inline-block"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 2l1.297 4.093L17 9.327l-3.82 2.77L12 14.69l-1.18-2.213L6 9.328l3.703-3.235L12 2z"
      />
    </svg>
  ));

  return <div className="inline-block">{stars}</div>;
};

export default StarRating;
