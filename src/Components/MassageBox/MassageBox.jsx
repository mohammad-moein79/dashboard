import React from "react";

function MassageBox({ contentMassage, lengthCont }) {
  return (
    <div className="flex w-full h-full flex-col justify-center items-center">
      {!(lengthCont <= 0) &&
        contentMassage.map((content) => (
          <div className="w-full border-[#5c3cad] border-2 border-solid rounded-[7px] mb-[6px] p-2">
            <h1 className="text-blue-600 text-[16px] font-medium">
              {content.titel}
            </h1>
          </div>
        ))}
    </div>
  );
}

export default MassageBox;
