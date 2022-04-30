import React from "react";
import { BiWorld } from "react-icons/bi";
import AddIcon from "@mui/icons-material/Add";
import { AiOutlineLike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import {
  RiVideoAddFill,
  RiShareBoxFill,
  RiSendPlaneFill,
} from "react-icons/ri";
import { BsCalendar3, BsThreeDots, BsCardImage } from "react-icons/bs";

function FeedTemplate2({ compname, compimage, followers, posttext, tag1, tag2, tag3, tag4, tag5, linktitle, link, postimage, postlike, postcomment}) {
  return (
    <div className="bg-white rounded-lg border-[1px] mb-1">
      <div className="flex flex-col border-b-[0.5px] pt-2 ">
        {/* Post Author */}
        <div className="flex w-full justify-between items-start px-3 py-2">
          {/* Author */}
          <div className="flex items-center px-1">
            <img
              src={compimage}
              alt=""
              className="h-[50px] mr-2 cursor-pointer"
            />
            <div>
              <div>
                {/* Name */}
                <p className="font-semibold text-gray-600 text-[14px]  cursor-pointer ">
                  <span className="hover:underline decoration-blue-700 hover:text-blue-700">
                    {compname}
                  </span>{" "}
                  <span className="font-normal"></span>
                </p>
                {/* Title */}
                <div>
                  <p className="font-normal text-gray-600 text-[12px] cursor-pointer">
                    {followers}
                  </p>
                  <p className="font-normal text-gray-600 text-[12px] cursor-pointer">
                    Promoted
                  </p>
                </div>
                {/* Post date */}
              </div>
            </div>
          </div>
          {/* Follow + */}
          <div className="flex items-center ">
            {/* <div className="flex items-center hover:bg-blue-400/10 px-3 py-2 hover:rounded-[5px]">
              <AddIcon
                sx={{ fontSize: 20 }}
                className="text-blue-700 cursor-pointer"
              />
              <p className="font-semibold text-blue-700 text-[14px] cursor-pointer ">
                Follow
              </p>
            </div> */}
            <div>
              <BsThreeDots
                size={30}
                className="text-gray-500 mx-2 p-1 cursor-pointer hover:bg-gray-700/10 hover:rounded-[20px] hover:text-black"
              />
            </div>
          </div>
        </div>

        {/* Post Text */}
        <div className="flex w-full justify-between items-center px-4 py-3">
          <p className="text-[14px]">
            {posttext}
          </p>
        </div>

        {/* Post Image / video .... */}
        <div className="mx-[3px]">
          <img src={postimage} alt="" className="h-[] mr-2 cursor-pointer" />
        </div>

        {/* Promotion link */}
        <div className="flex w-full justify-between items-start px-3 py-2 bg-blue-100/70">
          <div className="flex items-center px-1">
            <div>
              <div>
                {/* Name */}
                <p className="font-semibold text-gray-600 text-[14px]  cursor-pointer ">
                  <span className="">
                    {linktitle}
                  </span>{" "}
                  <span className="font-normal"></span>
                </p>
                {/* Title */}
                <p className="font-normal text-gray-600 text-[12px] cursor-pointer">
                  {link}
                </p>
                {/* Post date */}
              </div>
            </div>
          </div>
          {/* Follow + */}
          <div className="flex items-center ">
            <div className="flex items-center bg-blue-100/70 outline outline-[1.5px] outline-blue-700 px-3 rounded-[20px]  hover:bg-blue-200 hover:outline-[2px] transition-all duration-100 ease-in-out">
              <p className="font-semibold text-blue-700  text-[14px] hover:scale-x-[1] cursor-pointer ">
                Learn more
              </p>
            </div>
          </div>
        </div>

        {/* Post likes, comments ... */}
        <div className="flex w-full justify-between items-center items-center px-4 pb-1 border-b-[0.5px] pb-2 pt-2">
          <div className="flex items-center">
            {/* Emojis */}
            <div className="bg-blue-200 rounded-[10px] p-[3px] mr-[-4px]">
              <img
                src="/Thumbup.png"
                alt=""
                className="h-[11px] cursor-pointer"
              />
            </div>
            <div className="bg-red-200 rounded-[10px] p-[3px] mr-[-4px]">
              <img
                src="/Heart.png"
                alt=""
                className="h-[11px] cursor-pointer"
              />
            </div>
            <div className="bg-green-200 rounded-[10px] p-[3px] mr-[-4px]">
              <img
                src="/ClappingHands.png"
                alt=""
                className="h-[11px] cursor-pointer"
              />
            </div>
            <p className="font-normal text-gray-600 text-[13px]  cursor-pointer hover:underline decoration-blue-700 hover:text-blue-700 ml-2">
              {postlike}
            </p>
          </div>
          <p className="font-normal text-gray-600 text-[13px] cursor-pointer hover:underline decoration-blue-700 hover:text-blue-700">
            {postcomment}
          </p>
        </div>

        {/* Like, Comment, Share */}
        <div className="flex items-center justify-around w-full">
          <div className="flex items-center cursor-pointer hover:bg-gray-700/10 hover:rounded-[7px] py-3 px-6 my-2">
            <AiOutlineLike
              size={25}
              className="text-gray-600 mr-1 scale-x-[-1]"
            />
            <p className="font-semibold text-gray-600 text-[14px]">Like</p>
          </div>
          <div className="flex items-center cursor-pointer hover:bg-gray-700/10 hover:rounded-[7px] py-3 px-4 my-2">
            <BiCommentDetail
              size={25}
              className="text-gray-600 mr-1 scale-x-[-1]"
            />
            <p className="font-semibold text-gray-600 text-[14px]">Comment</p>
          </div>
          <div className="flex items-center cursor-pointer hover:bg-gray-700/10 hover:rounded-[7px] py-3 px-6 my-2">
            <RiShareBoxFill size={25} className="text-gray-600 mr-1" />
            <p className="font-semibold text-gray-600 text-[14px]">Share</p>
          </div>
          <div className="flex items-center cursor-pointer hover:bg-gray-700/10 hover:rounded-[7px] py-3 px-6 my-2">
            <RiSendPlaneFill size={25} className="text-gray-600 mr-1" />
            <p className="font-semibold text-gray-600 text-[14px]">Send</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedTemplate2;
