import React from "react";
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AddIcon from '@mui/icons-material/Add';

function Sidebar() {
  return (
    <div className="flex-[0.2] mx-[12px] ">
      {/* Sidebar top */}
      <div className="bg-white rounded-lg border-[1px] mb-2">
        {/* profile */}
        <div className="flex flex-col items-center border-b-[0.5px] pb-5">
            <div className="w-full h-[60px] overflow-hidden mb-[-40px] rounded-t-lg">
              <img src="/gradient.jpg" alt="" className=" h-[100px] w-full"/>
              </div>
          <div className="cursor-pointer">
            <img src="/me.png" alt="" className="h-[72px] mb-4" />
          </div>
          <p className="text-center font-semibold mb-2 cursor-pointer hover:underline decoration-blue-700 px-4">Ifeanyi Umeh</p>
          <p className="text-center text-[13px] text-gray-700 px-4">
            Front-end Developer | UI Designer
          </p>
        </div>
        {/* Stats */}
        <div className="flex flex-col items-start border-b-[0.5px] py-5 ">
          <div className="flex justify-between w-full hover:bg-gray-700/10 cursor-pointer py-1">
            <p className="text-left text-[12px] text-gray-700 font-semibold pl-4">Who viewed your profile</p>
            <p className="text-left font-semibold text-[12px] text-blue-700 pr-4">9</p>
          </div>
          <div className="flex justify-between w-full hover:bg-gray-700/10 cursor-pointer py-1">
            <p className="text-left text-[12px] text-gray-700 font-semibold pl-4">Impressions of your post</p>
            <p className="text-left font-semibold text-[12px] text-blue-700 pr-4">62</p>
          </div>
        </div>
        {/* Access tools */}
        <div className="flex flex-col items-start border-b-[0.5px] py-5 px-4 hover:bg-gray-700/10 cursor-pointer">
            <p className="text-left text-[12px] mb-1">Access exclusive tools & insights</p>
          <div className="flex justify-around w-full ">
              <WorkHistoryIcon sx={{ fontSize: 20 }} className="text-gray-500 mr-1"/>
            <p className="text-left font-semibold text-[12px]">Get Hired Faster, Try Premium Free</p>
          </div>
        </div>
        {/* My items */}
        <div className="flex flex-col items-start border-b-[0.5px] py-5 px-4 hover:bg-gray-700/10 cursor-pointer">
          <div className="flex justify-start items-center w-full ">
              <BookmarkIcon sx={{ fontSize: 20 }} className="text-gray-500 mr-1"/>
            <p className="text-left font-semibold text-[12px]">My items</p>
          </div>
        </div>
      </div>

      {/* Sidebar bottom */}
      <div className="bg-white rounded-lg border-[1px]">
       
        <div className="flex flex-col items-start border-b-[0.5px] py-5 ">
           {/* Recent */}
          <div className="flex justify-between w-full py-1">
            <p className="text-left text-[12px] text-gray-700  pl-4">Recent</p>
          </div>
          {/* Groups */}
          <div className="flex justify-between w-full items-center py-1">
            <p className="text-left font-semibold text-[12px] text-blue-700 pl-4 hover:underline decoration-blue-700 cursor-pointer">Groups</p>
            <AddIcon sx={{ fontSize: 30 }} className="text-gray-500 mx-2 p-1 cursor-pointer hover:bg-gray-700/10 hover:rounded-[20px] hover:text-black"/>
          </div>
          {/* Events */}
          <div className="flex justify-between w-full items-center py-1 mb-1">
            <p className="text-left font-semibold text-[12px] text-blue-700 pl-4 hover:underline decoration-blue-700 cursor-pointer">Events</p>
            <AddIcon sx={{ fontSize: 30 }} className="text-gray-500 mx-2 p-1 cursor-pointer hover:bg-gray-700/10 hover:rounded-[20px] hover:text-black"/>
          </div>
          {/* Followed tags */}
          <div className="flex justify-between w-full items-center py-1">
            <p className="text-left font-semibold text-[12px] text-blue-700 pl-4 hover:underline decoration-blue-700 cursor-pointer">Followed tags</p>
          </div>
        </div>
        {/* Discover more */}
        <div className="flex flex-col items-start border-b-[0.5px] py-4 px-4 hover:bg-gray-700/10 cursor-pointer">
          <div className="flex justify-center items-center w-full ">
            <p className="text-left font-semibold text-[13px]">Discover more</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
