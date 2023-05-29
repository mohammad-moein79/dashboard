import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function BoxDataInMainDashboard({
  bgGradinet1,
  bgGradinet2,
  bgGradinet3,
  TiteleText,
  Price,
  up,
  down,
}) {
  return (
    <div
      className={`p-4
        ${bgGradinet1 ? "bgGradinet1" : ""} 
        ${bgGradinet2 ? "bgGradinet2" : ""}
        ${bgGradinet3 ? "bgGradinet3" : ""}
        rounded-[10px] flex items-center justify-center`}
    >
      <div className="flex items-center justify-center">
        <div className="text-white flex items-center justify-center  text-[18px]">
          <span>
            {TiteleText} {Price}
          </span>
        </div>
        <div>
          {up && (
            <span className="ml-3 text-green-500">
              <ArrowUpwardIcon style={{ fontSize: 32 }} />
            </span>
          )}
          {down && (
            <span className="ml-3 text-rose-500">
              <ArrowDownwardIcon style={{ fontSize: 32 }} />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default BoxDataInMainDashboard;
