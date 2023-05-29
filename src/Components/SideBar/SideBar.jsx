import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FormGroup, FormControlLabel, Switch } from "@mui/material";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import Toggle from "../Toggle/Toggle";

function SideBar() {
  return (
    <div className="flex flex-col justify-around  w-[18%] gap-[15px] fixed  items-center math-h">
      <div className="dark:bg-[#272D35] bg-[#eaeef0] rounded-[10px] h-[60%] w-full pr-4">
        <div className="relative h-[80%] mt-8 flex flex-col justify-between items-start">
          <ul className="flex flex-col pl-6">
            <NavLink
              to="/"
              style={{
                color: "#686c71",
                fontSize: 16,
                marginBottom: 8,
                padding: 3,
                display: "flex",
                alignItems: "center",
              }}
              className={(link) =>
                link.isActive ? "activLinkLigh dark:activLinkDark " : ""
              }
            >
              <span>
                <SpaceDashboardOutlinedIcon></SpaceDashboardOutlinedIcon>
              </span>
              <span className="ml-4">dashboard</span>
            </NavLink>
            <NavLink
              to="/products"
              style={{
                color: "#686c71",
                fontSize: 16,
                marginBottom: 8,
                padding: 3,
                display: "flex",
                alignItems: "center",
              }}
              className={(link) =>
                link.isActive ? "activLinkLigh dark:activLinkDark " : ""
              }
            >
              <span>
                <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
              </span>
              <span className="ml-4">products</span>
            </NavLink>
            <NavLink
              to="/users"
              style={{
                color: "#686c71",
                fontSize: 16,
                marginBottom: 8,
                padding: 3,
                display: "flex",
                alignItems: "center",
              }}
              className={(link) =>
                link.isActive ? "activLinkLigh dark:activLinkDark " : ""
              }
            >
              <span>
                <PeopleAltOutlinedIcon></PeopleAltOutlinedIcon>
              </span>
              <span className="ml-4">users</span>
            </NavLink>
            {/* <NavLink
              to="/new-user"
              style={{
                color: "#686c71",
                fontSize: 16,
                marginBottom: 8,
                padding: 3,
                display: "flex",
                alignItems: "center",
              }}
              className={(link) =>
                link.isActive ? "activLinkLigh dark:activLinkDark " : ""
              }
            >
              <span>
                <PersonAddAltOutlinedIcon></PersonAddAltOutlinedIcon>
              </span>
              <span className="ml-4"> add user</span>
            </NavLink> */}
          </ul>
          <div className="w-[50%] h-[2px] rounded-md bg-[#5c3cad] absolute right-[3.5rem] top-[199px]"></div>
          <div className="flex flex-col justify-between items-start">
            <ul className="flex flex-col pl-6">
              <Toggle></Toggle>
            </ul>
          </div>
        </div>
      </div>
      <div className="dark:bg-[#272D35] bg-[#eaeef0] rounded-[10px] flex items-center justify-center p-4 h-[40%] w-full pr-4">
        <div className="flex justify-between flex-col items-center">
          <div className="flex justify-between flex-col items-center">
            <div className="flex justify-between flex-col items-center">
              <div
                className={`w-[80px] md:flex rounded-full hidden justify-center items-center border-[1px] border-[#5c3cad]  h-[80px]`}
              >
                <div className="overflow-hidden w-[70px]">
                  <div className="path-p">
                    <img
                      src="https://hippekinderspullen.nl/shop/wp-content/uploads/2021/01/cirkel-raket.jpg"
                      alt=""
                      className={"rotate-45"}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Link
                to="/go-pro"
                className="text-[#222] text-center dark:text-white font-medium text-[18px]"
              >
                upgrate to pro
              </Link>
              <p className="text-center mt-4 text-[#686c71] text-[14px]">
                check your magic <br /> on this pro dahsboard
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
