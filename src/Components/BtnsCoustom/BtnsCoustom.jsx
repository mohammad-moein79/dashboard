import React from "react";

function BtnsCoustom({
  stateOfX,
  doClickMessagebtn,
  doClickNotifbtn,
  children,
}) {
  const clickHandler = () => {
    if (doClickMessagebtn) {
      doClickMessagebtn();
    } else {
      doClickNotifbtn();
    }
  };

  return (
    <button
      onClick={clickHandler}
      className="text-[#222] relative dark:bg-[#272D35] bg-[#eaeef0] rounded-[10px] p-[10px]"
    >
      {stateOfX.length > 0 && (
        <span className="absolute text-[12px] text-center top-1 text-white right-1 w-[17px] h-[18px] bg-[#5c3cad] z-30 rounded-full">
          {stateOfX.length}
        </span>
      )}
      <span className="relative z-1 text-[#222] dark:text-white">
        {children}
      </span>
    </button>
  );
}

export default BtnsCoustom;
