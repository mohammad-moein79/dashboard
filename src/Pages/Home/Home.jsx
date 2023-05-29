import React, { useEffect, useState } from "react";
import Chart from "../../Components/Chart/Chart";
import ChartDark from "../../Components/Chart Dark/ChartDark";
import { Link } from "react-router-dom";
import TitelBox from "../../Components/TitelBox/TitelBox";
import TableInHome from "../../Components/Table In Home/TableInHome";
import BoxDataInMainDashboard from "../../Components/BoxDataInMainDashBoard/BoxDataInMainDashboard";

function Home() {
  return (
    <div className=" flex flex-col gap-4 ">
      <div className="showGrid gap-[15px]">
        <BoxDataInMainDashboard
          TiteleText={"asset "}
          Price={"23,900$"}
          bgGradinet1={true}
          up={true}
        ></BoxDataInMainDashboard>
        <BoxDataInMainDashboard
          TiteleText={"The profit for this month"}
          Price={"-9,622K"}
          down={true}
          bgGradinet2={true}
        ></BoxDataInMainDashboard>
        <BoxDataInMainDashboard
          TiteleText={"New users"}
          Price={"2,000K"}
          bgGradinet2={true}
          up={true}
          bgGradinet3={true}
        ></BoxDataInMainDashboard>
      </div>
      <div className="flex gap-4">
        <div className="p-3 rounded-[10px] w-1/2 bg-[#eaeef0] dark:bg-[#272D35]">
          <TitelBox titel={`Monthly sales`}></TitelBox>
          <div className="h-[250px] text-black">
            <div className="dark:hidden block h-full">
              <Chart></Chart>
            </div>
            <div className="hidden dark:block h-full">
              <ChartDark></ChartDark>
            </div>
          </div>
        </div>
        <div className="relative  rounded-[10px] overflow-hidden w-1/2 bg-[url('https://s8.uupload.ir/files/190_250e759fd8732b29b5702c4650da903e_3ggu.jpg')] bg-cover bg-center bg-no-repeat ">
          <div className="absolute text-white flex flex-col items-center justify-around  bottom-[-5px]  pt-2 pb-2 right-0 h-[40%] text-center left-0 bg-[#69696a5b] backdrop-blur">
            <div className="mt-[-40px] bg-white w-[66px] h-[66px] rounded-[10px] overflow-hidden flex justify-center items-center">
              <img
                src="https://s8.uupload.ir/files/m2frj5xjtxeh51qfsjekcdfowu6pt8u5ewfnzzw6puc_p2iu.png"
                alt=""
                className="w-[60px] rounded-[10px]"
              />
            </div>
            <div className="text-white">
              <h2 className=" text-[25px]">city NFT</h2>
              <p className="text-[18px]">3000$</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#eaeef0] dark:bg-[#272D35] pt-6 pb-6 rounded-[10px]">
        <TableInHome></TableInHome>
      </div>
    </div>
  );
}

export default Home;
