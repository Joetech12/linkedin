import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import WidgetsIcon from '@mui/icons-material/Widgets';

function Header() {
  return (
    <div className="w-full h-[55px] bg-white border-b-[0.3px] py-[20px] sticky top-0 z-[99]">
      {/* Header container */}
      <div
        className="max-w-[1124px] mx-auto px-[12px] h-full flex justify-between  items-center
      "
      >
        {/* left side header */}
        <div className="flex">
          {/* Logo */}
          <img
            src="/linkedin.svg"
            alt="linkedin-logo"
            className="h-[34px] mr-2 cursor-pointer"
          />
          {/* Searchbox */}
          <div className="bg-[#eef3f8] max-w-[280px] w-[280px] rounded-[5px] px-3 flex items-center">
            <SearchIcon sx={{ fontSize: 20 }} className="text-gray-500 mr-1" />
            <input
              type="text"
              placeholder="Search for jobs, skills, companies..."
              className="outline-none bg-transparent max-w-[280px] w-[280px] text-sm text-black h-[34px]"
            />
          </div>
        </div>
        {/* right side header */}
        <div className="flex">
          <HeaderOption Icon={HomeIcon} title="Home" />
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
          <HeaderOption Icon={ChatIcon} title="Messaging" />
          <HeaderOption Icon={NotificationsIcon} title="Notifications" />
          {/* me */}
          <div className="flex flex-col items-center justify-center mx-[10px] text-gray-500 cursor-pointer hover:text-black">
            <img src="/me.png" alt="" className="h-[23px]"/>
            <div className="flex items-center">
              <h3 className="text-[12px]">Me</h3>
              <div className="h-2 flex items-center">
                <ArrowDropDownIcon className="ml-[-3px]"/>
              </div>
            </div>
          </div>
          {/* Work */}
          <div className="flex flex-col items-center justify-center mx-[10px] p text-gray-500 cursor-pointer border-l pl-5 hover:text-black">
            
            <WidgetsIcon />
            <div className="flex items-center">
              <h3 className="text-[12px]">Work</h3>
              <div className="h-2 flex items-center">
              <ArrowDropDownIcon className="ml-[-3px]"/>
              </div>
            </div>
          </div>
          {/* Get hired */}
          <div className="flex flex-col items-center justify-center text-amber-900 cursor-pointer hover:underline">
            <p className="text-[12px]">Get Hired Faster,</p>
            <p className="text-[12px]">Try Premium Free</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
