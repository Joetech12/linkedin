import React from 'react'
import { BiWorld } from "react-icons/bi";
import AddIcon from "@mui/icons-material/Add";
import { AiOutlineLike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { RiVideoAddFill, RiShareBoxFill, RiSendPlaneFill } from "react-icons/ri";
import { BsCalendar3, BsThreeDots, BsCardImage } from "react-icons/bs";

function Feed1() {
  return (
    <div className="bg-white rounded-lg border-[1px] mb-1">
        <div className="flex flex-col items-start border-b-[0.5px] pt-2 ">
          {/* Post like*/}
          <div className="flex w-full  items-center px-3 pb-1 border-b-[0.5px]">
            <img
              src="/raymond.png"
              alt=""
              className="h-[24px] mr-2 cursor-pointer"
            />
            <div className="flex-1 flex justify-between items-center">
              <p className="font-semibold text-gray-600 text-[13px]  cursor-pointer ">
                <span className="hover:underline decoration-blue-700 hover:text-blue-700">
                  Raymond Edesiri Oghene
                </span>{" "}
                <span className="font-normal">likes this</span>
              </p>
              <BsThreeDots
                size={30}
                className="text-gray-500 mx-2 p-1 cursor-pointer hover:bg-gray-700/10 hover:rounded-[20px] hover:text-black"
              />
            </div>
          </div>

          {/* Post Author */}
          <div className="flex w-full justify-between items-center px-3 py-2">
            <div className="flex">
              <img
                src="/okon.png"
                alt=""
                className="h-[55px] mr-2 cursor-pointer"
              />
              <div>
                <div>
                  {/* Name */}
                  <p className="font-semibold text-gray-600 text-[14px]  cursor-pointer ">
                    <span className="hover:underline decoration-blue-700 hover:text-blue-700">
                      Obadan Oluwaseun
                    </span>{" "}
                    <span className="font-normal">• 3rd+</span>
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
                    <BiWorld size={15} className="text-gray-500 ml-1" />
                  </div>
                </div>
              </div>
            </div>
            {/* Follow + */}
            <div className="flex items-center hover:bg-blue-400/10 px-3 py-2 hover:rounded-[5px]">
              <AddIcon
                sx={{ fontSize: 20 }}
                className="text-blue-700 cursor-pointer"
              />
              <p className="font-semibold text-blue-700 text-[14px] cursor-pointer ">
                Follow
              </p>
            </div>
          </div>

          {/* Post Text */}
          <div className="flex w-full justify-between items-center px-3 py-3">
            <p className="text-[14px]">
              2 months ago, I traveled alone to San Francisco.
              <br />
              <br /> I’ve never been to the US. No in-real life friends. No
              business context. No real connections. Just a designer,
              entrepreneur with an open heart and mind - here to fundraise for
              <span className="text-blue-700 hover:underline decoration-blue-700 hover:text-blue-700 ml-1 cursor-pointer">
                adplist.org
              </span>
              's future. And a bit more energy. Last week, we organized our{" "}
              <span className="text-blue-700 hover:underline decoration-blue-700 hover:text-blue-700 cursor-pointer">
                adplist.org
              </span>{" "}
              community meet in San Francisco - a historic moment to celebrate
              this global mission. A lot can happen in a year. <br />
              <br />
              So many things change drastically. But one constant is the people
              who are in together for the same ideals, who care and show up. I
              wouldn’t change it for the world. Thank you to the adplist.org
              community. Here’s to many more. <br />{" "}
              <span className="text-blue-700 hover:underline decoration-blue-700 hover:text-blue-700 mr-1 cursor-pointer">
                #careers
              </span>
              <span className="text-blue-700 hover:underline decoration-blue-700 hover:text-blue-700 mr-1 cursor-pointer">
                #education
              </span>
              <span className="text-blue-700 hover:underline decoration-blue-700 hover:text-blue-700 mr-1 cursor-pointer">
                #startups
              </span>
              <span className="text-blue-700 hover:underline decoration-blue-700 hover:text-blue-700 mr-1 cursor-pointer">
                #jobs
              </span>
              <span className="text-blue-700 hover:underline decoration-blue-700 hover:text-blue-700 mr-1 cursor-pointer">
                #design
              </span>
            </p>
          </div>

          {/* Post Image / video .... */}

          <div className="mx-[3px]">
            <img src="/feed1.jpg" alt="" className="h-[] mr-2 cursor-pointer" />
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
                Henry Kosiso and 57 others
              </p>
            </div>
            <p className="font-normal text-gray-600 text-[13px] cursor-pointer hover:underline decoration-blue-700 hover:text-blue-700">
              11 comments
            </p>
          </div>

          {/* Like, Comment, Share */}
          <div className="flex items-center justify-around w-full">
          <div className="flex items-center cursor-pointer hover:bg-gray-700/10 hover:rounded-[7px] py-3 md:px-[2px] md:px-6 my-2">
            <div className="xs:text-[20px] md:text-[25px]">
              <AiOutlineLike
                size={0}
                className="text-gray-600 mr-1 scale-x-[-1]"
              />
            </div>
            <p className="font-semibold text-gray-600 text-[14px]">Like</p>
          </div>
          <div className="flex items-center cursor-pointer hover:bg-gray-700/10 hover:rounded-[7px] py-3 md:px-[2px] md:px-4 my-2">
            <div className="xs:text-[20px] md:text-[25px]">
              <BiCommentDetail
                size={0}
                className="text-gray-600 mr-1 scale-x-[-1]"
              />
            </div>
            <p className="font-semibold text-gray-600 text-[14px]">Comment</p>
          </div>
          <div className="flex items-center cursor-pointer hover:bg-gray-700/10 hover:rounded-[7px] py-3 md:px-[2px] md:px-6 my-2">
            <div className="xs:text-[20px] md:text-[25px]">
              <RiShareBoxFill size={0} className="text-gray-600 mr-1" />
            </div>
            <p className="font-semibold text-gray-600 text-[14px]">Share</p>
          </div>
          <div className="flex items-center cursor-pointer hover:bg-gray-700/10 hover:rounded-[7px] py-3 md:px-[2px] md:px-6 my-2">
            <div className="xs:text-[20px] md:text-[25px]">
              <RiSendPlaneFill size={0} className="text-gray-600 mr-1" />
            </div>
            <p className="font-semibold text-gray-600 text-[14px]">Send</p>
          </div>
        </div>
        </div>
      </div>
  )
}

export default Feed1