import React from "react";
import {
  RiVideoAddFill,
  RiShareBoxFill,
  RiSendPlaneFill,
} from "react-icons/ri";
import { BsCalendar3, BsThreeDots, BsCardImage } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { GrTextAlignFull, GrShare } from "react-icons/gr";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AddIcon from "@mui/icons-material/Add";
import { AiOutlineLike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import Feed1 from "./Feed1";
import Feed2 from "./Feed2";
import FeedTemplate1 from "./FeedTemplate1";
import FeedTemplate2 from "./FeedTemplate2";
import FeedTemplate1vid from "./FeedTemplate1vid";

function Feed() {
  return (
    <div className="lg:flex-[0.5] md:flex-[0.7] xs:w-[340px] sm:w-[800px] mx-[20px]">
      {/* Feed top */}
      <div className="bg-white rounded-lg border-[1px] mb-1">
        <div className="flex flex-col items-start border-b-[0.5px] pt-3 xs:px-[10px] sm:px-[10px]">
          {/* Start a post */}
          <div className="flex w-full items-center xs:px-[0px] sm:px-[0px]">
            <img
              src="/me.png"
              alt=""
              className="h-[48px] mr-2 cursor-pointer"
            />
            <div className="flex bg-white border-[1.5px] border-gray-500 flex-[1] rounded-[100px] py-3 px-4 hover:bg-gray-700/10 cursor-pointer transition-all duration-300">
              <p className="font-semibold text-gray-600 text-[14px]">
                Start a post
              </p>
            </div>
          </div>
          {/* Photo, Video .... */}
          <div className="flex items-center xs:justify-center sm:justify-around w-full">
            <div className="flex items-center cursor-pointer hover:bg-gray-700/10 hover:rounded-[7px] py-[7px] xs:px-[1px] md:px-[7px] mr-[12px] xs:my-2 md:my-2">
              <div className="xs:text-[15px] md:text-[20px]">
                <BsCardImage
                  size={0}
                  className="text-blue-400 xs:mr-2 md:mr-3 scale-x-[-1]"
                />
              </div>
              <p className="font-semibold text-gray-600 text-[14px]">Photo</p>
            </div>

            <div className="flex items-center cursor-pointer hover:bg-gray-700/10 hover:rounded-[7px] py-[7px] xs:px-[1px] md:px-[7px] mr-[12px] xs:my-2 md:my-2">
              <div className="xs:text-[15px] md:text-[20px]">
                <RiVideoAddFill
                  size={0}
                  className="text-green-500 xs:mr-2 md:mr-3"
                />
              </div>
              <p className="font-semibold text-gray-600 text-[14px]">Video</p>
            </div>

            <div className="flex items-center cursor-pointer hover:bg-gray-700/10 hover:rounded-[7px] py-[7px] xs:px-[1px] md:px-[7px] mr-[12px] xs:my-2 md:my-2">
              <div className="xs:text-[15px] md:text-[20px]">
                <BsCalendar3
                  size={0}
                  className="text-yellow-500 xs:mr-2 md:mr-3"
                />
              </div>
              <p className="font-semibold text-gray-600 text-[14px]">Event</p>
            </div>

            <div className="flex items-center cursor-pointer hover:bg-gray-700/10 hover:rounded-[7px] py-[7px] xs:px-[1px] md:px-[7px] mr-[12px] xs:my-2 md:my-2">
              <div className="xs:text-[15px] md:text-[20px]">
                <GrTextAlignFull
                  size={0}
                  className="text-red-500 xs:mr-2 md:mr-3"
                />
              </div>
              <p className="font-semibold text-gray-600 text-[14px]">Write</p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider, Sort by... */}
      <div className="flex items-center">
        <hr className="border-[0.px] border-gray-400 flex-1 mr-2" />
        <div className="flex cursor-pointer ">
          <p className="text-[13px]">
            Sort by: <span className="font-semibold">Top</span>
          </p>
          <ArrowDropDownIcon className="" />
        </div>
      </div>

      {/* Feed body1 */}
      <FeedTemplate1vid
        cname="Chijindu E. O."
        cimage="/author.jpg"
        caction="commented on this"
        pimage="/discoverylogo.png"
        pname="Discovery Inc"
        // pname2= "• 3rd"
        ptitle="594,891 Followers"
        pdate="4d"
        posttext="“All problems become smaller when you confront them instead of dodging them.” – William F. Halsey."
        postvideo="/feed.mp4"
        tag1="#discovery"
        tag2="#building"
        tag3="#engineering"
        postlike="4251"
        postcomment="765 comments"
      />
      <Feed1 />
      <Feed2 />
      <FeedTemplate1
        cname="Raymond Oghene"
        cimage="/okon.png"
        pimage="/morayo.png"
        pname="Seyi Makanjuola"
        pname2="3rd"
        ptitle="Brand & Corporate Designer"
        pdate="3d"
        posttext="Hello there, check out this company logo design I made for Meeday. what are your thoughts, please leave a comment."
        tag1="#branding"
        tag2="#marketing"
        tag3="#graphicdesign"
        tag4="#logo"
        tag5="#business"
        postimage="feed3.jpg"
        postlike="2451"
        postcomment="521 comments"
      />
      <FeedTemplate2
        compname="Lafiya Telehealth"
        compimage="/logo2.jpg"
        followers="5,312 Followers"
        pname=""
        pname2=""
        ptitle=""
        pdate=""
        posttext="Are you home or at the office and need to see a Doctor?  Consult with a Doctor on the LaFiya Telehealth Platform using the TytoHome Remote Exam kit. Contact us today to get the TytoHome Remote Exam Kit delivered to your doorstep.          
        Buy now and get 3 free teleconsultations with a Doctor.
        "
        tag1="#branding"
        tag2="#marketing"
        tag3="#graphicdesign"
        tag4="#logo"
        tag5="#business"
        linktitle="For more enquiries, get in touch with us:"
        link="sales@lafiyatelehealth.com"
        postimage="feed4.jpg"
        postlike="3210"
        postcomment="1221 comments"
      />
    </div>
  );
}

export default Feed;
