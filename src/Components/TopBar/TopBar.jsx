import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import BtnsCoustom from "../BtnsCoustom/BtnsCoustom";
import { massages } from "../../Data";
import useLogSearch from "../Coustom use/CoustomUse";
import OpenMassageOrNotif from "../openMassageOrNotif/OpenMassageOrNotif";

function TopBar() {
  const [stateMassage, setStateMassage] = React.useState(massages);
  const [stateNotif, setStateNotif] = React.useState([]);
  const [openMassage, setOpenMassage] = React.useState(false);
  const [openNotif, setOpenNotif] = React.useState(false);
  const [valueSearch, setValueSearch] = React.useState("");

  const useSearch = useLogSearch(valueSearch);

  const doClickMessage = () => {
    if (openNotif) {
      setOpenNotif(false);
    }
    setOpenMassage(!openMassage);
  };
  const doClickNotif = () => {
    if (openMassage) {
      setOpenMassage(false);
    }
    setOpenNotif(!openNotif);
  };

  return (
    <div className="flex items-center gap-[15px]">
      <div className="relative w-[65%]">
        <button
          type="submit"
          className="absolute top-[7px] left-[11px] dark:text-white text-[#222] "
        >
          <SearchOutlinedIcon fontSize="large" />
        </button>
        <form action="#">
          <input
            value={valueSearch}
            onChange={(e) => setValueSearch(e.target.value)}
            type="text"
            name="search"
            autoComplete="off"
            className="dark:bg-[#272D35] w-[100%] dark:text-white text-[#222] outline-none lowercase  focus:outline-[#5c3cad] p-3 pl-[60px]  rounded-[10px] bg-[#eaeef0]"
            placeholder="top to search here ..."
          />
        </form>
      </div>
      <div className="w-[35%] flex items-center gap-[15px] ">
        <div className="flex items-center gap-[15px]">
          <div className="relative">
            <BtnsCoustom
              stateOfX={stateMassage}
              doClickMessagebtn={doClickMessage}
            >
              <MailOutlineIcon />
            </BtnsCoustom>
            {openMassage && (
              <OpenMassageOrNotif
                contents={stateMassage}
                lengthCont={stateMassage.length}
                name="Massage"
              />
            )}
          </div>
          <div className="relative">
            <BtnsCoustom stateOfX={stateNotif} doClickNotifbtn={doClickNotif}>
              <NotificationsNoneIcon />
            </BtnsCoustom>
            {openNotif && (
              <OpenMassageOrNotif
                contents={stateNotif}
                lengthCont={stateNotif.length}
                name="Notif"
              />
            )}
          </div>
        </div>
        <div className="flex items-center w-[65%] justify-between gap-[15px]">
          <div className="text-[#222] dark:text-white flex justify-center items-center dark:bg-[#272D35] max-h-full bg-[#eaeef0] text-[15px] rounded-[10px] ">
            <span className="p-4 text-center">mohammad moein</span>
          </div>
          <div className="">
            <div className="flex justify-center flex-col items-center">
              <div
                className={`w-[61px] md:flex rounded-full hidden justify-center items-center border-[1px] border-[#5c3cad]  h-[50px]`}
              >
                <div className="overflow-hidden w-[80px]">
                  <div className="path-p">
                    <img
                      src="https://s8.uupload.ir/files/img_20230317_073836_451_53l.jpg"
                      alt=""
                      className={"w-[65px] h-[75px]"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(TopBar);
