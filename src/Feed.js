import React from "react";
import { RiVideoAddFill } from "react-icons/ri";
import { BsCalendar3, BsThreeDots, BsCardImage,  } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { GrTextAlignFull } from "react-icons/gr";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AddIcon from '@mui/icons-material/Add';



function Feed() {
  return (
    <div className="flex-[0.5] mx-[12px]">
      {/* Feed top */}
      <div className="bg-white rounded-lg border-[1px] mb-1">
        <div className="flex flex-col items-start border-b-[0.5px] pt-3 ">
          {/* Start a post */}
          <div className="flex w-full items-center px-5">
            <img
              src="/me.png"
              alt=""
              className="h-[48px] mr-2 cursor-pointer"
            />
            <div className="flex bg-white border-[1.7px] border-gray-500 flex-[1] rounded-[100px] py-3 px-4 hover:bg-gray-700/10 cursor-pointer transition-all duration-300">
              <p className="font-semibold text-gray-600 text-[14px]">
                Start a post
              </p>
            </div>
          </div>
          {/* Photo, Video .... */}
          <div className="flex items-center justify-around w-full">
            <div className="flex items-center cursor-pointer hover:bg-gray-700/10 hover:rounded-[7px] py-3 px-3 my-2">
              <BsCardImage size={20} className="text-red-500 mr-3" />
              <p className="font-semibold text-gray-600 text-[14px]">Photo</p>
            </div>
            <div className="flex items-center cursor-pointer hover:bg-gray-700/10 hover:rounded-[7px] py-3 px-3 my-2">
              <RiVideoAddFill size={20} className="text-green-500 mr-3" />
              <p className="font-semibold text-gray-600 text-[14px]">Video</p>
            </div>
            <div className="flex items-center cursor-pointer hover:bg-gray-700/10 hover:rounded-[7px] py-3 px-3 my-2">
              <BsCalendar3 size={20} className="text-yellow-500 mr-3" />
              <p className="font-semibold text-gray-600 text-[14px]">Event</p>
            </div>
            <div className="flex items-center cursor-pointer hover:bg-gray-700/10 hover:rounded-[7px] py-3 px-3 my-2">
              <GrTextAlignFull size={20} className="text-red-500 mr-3" />
              <p className="font-semibold text-gray-600 text-[14px]">
                Write article
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider, Sort by... */}
      <div className="flex items-center">
        <hr className="border-[0.px] border-gray-400 flex-1 mr-2" />
        <div className="flex ">
          <p className="text-[13px]">
            Sort by: <span className="font-semibold">Top</span>
          </p>
          <ArrowDropDownIcon className="" />
        </div>
      </div>

      {/* Feed body1 */}
      <div className="bg-white rounded-lg border-[1px] mb-1">
        <div className="flex flex-col items-start border-b-[0.5px] pt-2 ">
          {/* Post like*/}
          <div className="flex w-full  items-center px-3 pb-1 border-b-[0.5px]">
            <img
              src="/me.png"
              alt=""
              className="h-[24px] mr-2 cursor-pointer"
            />
            <div className="flex-1 flex justify-between items-center">
              <p className="font-semibold text-gray-600 text-[13px]  cursor-pointer ">
                <span className="hover:underline decoration-blue-700 hover:text-blue-700">Erhuvwu Kelvin Oghene</span> <span className="font-normal">likes this</span>
              </p>
              <BsThreeDots size={30} className="text-gray-500 mx-2 p-1 cursor-pointer hover:bg-gray-700/10 hover:rounded-[20px] hover:text-black"/>
            </div>
          </div>

          {/* Post Author */}
          <div className="flex w-full items-center px-3 py-3">
            <div className="flex">
              <img
                src="/me.png"
                alt=""
                className="h-[55px] mr-2 cursor-pointer"
              />
              <div>
              <div>
                {/* Name */}
                <p className="font-semibold text-gray-600 text-[14px]  cursor-pointer ">
                  <span className="hover:underline decoration-blue-700 hover:text-blue-700">Obadan Oluwaseun</span> <span className="font-normal">• 3rd+</span>
                </p>
                {/* Title */}
                <p className="font-normal text-gray-600 text-[12px] cursor-pointer">
                  Architect and Entrepreneur
                </p>
                {/* Post date */}
                <div className="flex items-center cursor-pointer">
                <p className="font-normal text-gray-600 text-[12px] ">
                  1w •
                </p>
                <BiWorld size={15} className="text-gray-500 ml-1"/>
              </div>
              </div>
              </div>
            </div>
          </div>

          {/* Photo, Video .... */}
          <div className="flex items-center justify-around w-full">
            <div className="flex items-center cursor-pointer hover:bg-gray-700/10 hover:rounded-[7px] py-3 px-3 my-2">
              <BsCardImage size={20} className="text-red-500 mr-3" />
              <p className="font-semibold text-gray-600 text-[14px]">Photo</p>
            </div>
            <div className="flex items-center cursor-pointer hover:bg-gray-700/10 hover:rounded-[7px] py-3 px-3 my-2">
              <RiVideoAddFill size={20} className="text-green-500 mr-3" />
              <p className="font-semibold text-gray-600 text-[14px]">Video</p>
            </div>
            <div className="flex items-center cursor-pointer hover:bg-gray-700/10 hover:rounded-[7px] py-3 px-3 my-2">
              <BsCalendar3 size={20} className="text-yellow-500 mr-3" />
              <p className="font-semibold text-gray-600 text-[14px]">Event</p>
            </div>
            <div className="flex items-center cursor-pointer hover:bg-gray-700/10 hover:rounded-[7px] py-3 px-3 my-2">
              <GrTextAlignFull size={20} className="text-red-500 mr-3" />
              <p className="font-semibold text-gray-600 text-[14px]">
                Write article
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
