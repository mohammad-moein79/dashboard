import React from "react";
import TittelBox from "../TitelBox/TitelBox";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

function TableInHome(caompletH) {
  const users = [1, 2, 3, 4, 6, 5, 7, 8, 9, 2];
  return (
    <div className="p-3">
      <TittelBox titel={`Users`}></TittelBox>
      <div
        className={`pl-6 hibech overflow-auto ${
          caompletH ? "" : "h-[200px] "
        } pr-4`}
      >
        <ul className="flex flex-col gap-3 justify-center">
          {users.map(() => (
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <li>
                  <img
                    src="https://s8.uupload.ir/files/m2frj5xjtxeh51qfsjekcdfowu6pt8u5ewfnzzw6puc_p2iu.png"
                    alt=""
                    className="w-[60px] rounded-[100%]"
                  />
                </li>
                <li className="text-[#222] dark:text-white">Mohammad meoin</li>
              </div>
              <div>
                <li className="text-[#222] dark:text-white cursor-pointer">
                  <VisibilityOutlinedIcon />
                </li>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TableInHome;
