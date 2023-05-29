import React from "react";

function TittelBox({ titel }) {
  return (
    <div className="dark:text-white text-[#222] font-semibold text-[18px] ml-12 mb-4 relative">
      <span className="absolute w-3 h-3 bg-[#5c3cad] top-[7px] left-[-36px] rounded-full"></span>
      <h1>{titel}</h1>
    </div>
  );
}

export default TittelBox;
