import React from "react";
import MassageBox from "../MassageBox/MassageBox";

function OpenMassageOrNotif({ name, lengthCont, contents }) {
  const doUserHaveHaveOrNo = () => {
    return lengthCont <= 0 ? (
      <span className="dark:text-gray-400">you dont have any {name}</span>
    ) : (
      <MassageBox contentMassage={contents} lengthCont={lengthCont} />
    );
  };

  return (
    <div className="absolute top-[50px] border-1  flex justify-center items-center dark:border-slate-700 border-slate-500 border-[1px] z-30 right-0 rounded-[10px] max-w-[250px] min-w-[250px] min-h-[300px] bg-[#eaeef0] dark:bg-[#272D35] p-4">
      <div className="w-full h-full flex justify-center items-center">
        {doUserHaveHaveOrNo()}
      </div>
    </div>
  );
}

export default OpenMassageOrNotif;
