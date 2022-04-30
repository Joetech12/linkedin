import React from "react";
import { MdLibraryAdd } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import AddIcon from "@mui/icons-material/Add";
import {
  HiArrowNarrowRight,
  HiChevronRight,
  HiChevronDown,
} from "react-icons/hi";
import { BsCalendar3, BsThreeDots, BsCardImage } from "react-icons/bs";

function Widget() {
  return (
    <div className="flex-[0.3] mx-[12px] sticky top-[-312px]">
      {/* Feed top section */}
      <div className="bg-white rounded-lg border-[1px] flex flex-col pt-4 mb-2">
        {/* Add your feed */}
        <div className="flex items-center justify-between">
          <p className="text-left font-semibold cursor-pointer px-4">
            Add to your feed
          </p>
          <MdLibraryAdd
            size={20}
            className="mx-4 text-gray-500 cursor-pointer"
          />
        </div>
        {/* Feed1 */}
        <div className="flex flex-col w-full items-start px-3 py-2">
          <div className="flex">
            <img
              src="/ACCESS-BANK-LOGO.png"
              alt=""
              className="h-[55px] rounded-[150px] mr-2 cursor-pointer"
            />
            <div>
              <div className="flex flex-col items-start">
                {/* Name */}
                <p className="font-semibold text-gray-600 text-[14px]  cursor-pointer ">
                  <span className="">Access Bank Plc</span>
                </p>
                {/* Title */}
                <p className="font-normal text-gray-600 text-[12px] cursor-pointer mb-2">
                  Company • Financial Services
                </p>
                {/* Follow + */}
                <div className="flex items-center justify-center outline outline-[1.5px] outline-gray-600 px-3 py-1 rounded-[20px]  hover:bg-gray-600/10 hover:outline-[2px] transition-all duration-100 ease-in-out">
                  <AddIcon
                    sx={{ fontSize: 20 }}
                    className="text-gray-600 cursor-pointer"
                  />
                  <p className="font-semibold text-gray-600 text-[14px] cursor-pointer mr-1 ">
                    Follow
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Feed2 */}
        <div className="flex flex-col w-full items-start px-3 py-2">
          <div className="flex">
            <img
              src="/abbas.jpg"
              alt=""
              className="h-[55px] rounded-[150px] mr-2 cursor-pointer"
            />
            <div>
              <div className="flex flex-col items-start">
                {/* Name */}
                <p className="font-semibold text-gray-600 text-[14px]  cursor-pointer ">
                  <span className="">Rainat Abbas</span>
                </p>
                {/* Title */}
                <p className="font-normal text-gray-600 text-[12px] cursor-pointer mb-2">
                  Product Designer || UX Designer
                </p>
                {/* Follow + */}
                <div className="flex items-center justify-center outline outline-[1.5px] outline-gray-600 px-3 py-1 rounded-[20px]  hover:bg-gray-600/10 hover:outline-[2px] transition-all duration-100 ease-in-out">
                  <AddIcon
                    sx={{ fontSize: 20 }}
                    className="text-gray-600 cursor-pointer"
                  />
                  <p className="font-semibold text-gray-600 text-[14px] cursor-pointer mr-1 ">
                    Follow
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Feed3 */}
        <div className="flex flex-col w-full items-start px-3 py-2">
          <div className="flex">
            <img
              src="/kfclogo.png"
              alt=""
              className="h-[55px] rounded-[100px] mr-2 cursor-pointer"
            />
            <div>
              <div className="flex flex-col items-start">
                {/* Name */}
                <p className="font-semibold text-gray-600 text-[14px]  cursor-pointer ">
                  <span className="">KFC Nigeria</span>
                </p>
                {/* Title */}
                <p className="font-normal text-gray-600 text-[12px] cursor-pointer mb-2">
                  Company • Food Services
                </p>
                {/* Follow + */}
                <div className="flex items-center justify-center outline outline-[1.5px] outline-gray-600 px-3 py-1 rounded-[20px]  hover:bg-gray-600/10 hover:outline-[2px] transition-all duration-100 ease-in-out">
                  <AddIcon
                    sx={{ fontSize: 20 }}
                    className="text-gray-600 cursor-pointer"
                  />
                  <p className="font-semibold text-gray-600 text-[14px] cursor-pointer mr-1 ">
                    Follow
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* View recommendations */}
        <div className="flex items-center hover:bg-gray-700/10 cursor-pointer">
          <p className="text-left text-gray-500 font-semibold text-[14px] pl-4">
            View all recommendations
          </p>
          <HiArrowNarrowRight
            size={20}
            className="ml-1 mb-3 mt-4 text-gray-500 cursor-pointer"
          />
        </div>
      </div>

      {/* Promoted Section */}

      <div className="bg-white rounded-lg border-[1px] flex flex-col pt-4 mb-2">
        {/* Add your feed */}
        <div className="flex items-center justify-between">
          <p className="text-left font-semibold cursor-pointer px-3">
            Promoted
          </p>
          <BsThreeDots
            size={20}
            className="mx-4 text-gray-500 cursor-pointer"
          />
        </div>
        {/* Promotion1 */}
        <div className="flex flex-col w-full items-start px-3 py-2">
          <div className="flex items-center">
            <img
              src="/linkedin.svg"
              alt=""
              className="h-[55px] rounded-[] mr-2 cursor-pointer"
            />
            <div>
              <div className="flex flex-col items-start">
                {/* Name */}
                <p className="font-semibold text-gray-600 text-[14px] mb-[-7px] cursor-pointer hover:underline decoration-blue-700 hover:text-blue-700">
                  Reach new tech audiences
                </p>
                {/* Title */}
                <div className="flex items-center">
                  <p className="font-normal text-gray-600 text-[12px] cursor-pointer">
                    Our targeting capabilities help you to engage hard-to-reach
                    the tech buyer
                  </p>
                  <HiChevronRight
                    size={50}
                    className=" text-gray-500 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Promotion2 */}
        <div className="flex flex-col w-full items-start px-3 py-2">
          <div className="flex items-center">
            <img
              src="/conlogo.jpeg"
              alt=""
              className="h-[55px] rounded-[5px] mr-2 cursor-pointer"
            />
            <div>
              <div className="flex flex-col items-start">
                {/* Name */}
                <p className="font-semibold text-gray-600 text-[14px] mb-[-7px] cursor-pointer hover:underline decoration-blue-700 hover:text-blue-700">
                  Templates for any project
                </p>
                {/* Title */}
                <div className="flex items-center">
                  <p className="font-normal text-gray-600 text-[12px] cursor-pointer">
                    Never start a project with a blank page. Start with
                    Confluence for free!
                  </p>
                  <HiChevronRight
                    size={50}
                    className=" text-gray-500 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Promotion3 */}
        <div className="flex flex-col w-full items-start px-3 py-2">
          <div className="flex items-center">
            <img
              src="/cilogo.png"
              alt=""
              className="h-[55px] rounded-[100px] mr-2 cursor-pointer"
            />
            <div>
              <div className="flex flex-col items-start">
                {/* Name */}
                <p className="font-semibold text-gray-600 text-[14px] mb-[-7px] cursor-pointer hover:underline decoration-blue-700 hover:text-blue-700">
                  Your project needs CI/CD.
                </p>
                {/* Title */}
                <div className="flex items-center">
                  <p className="font-normal text-gray-600 text-[12px] cursor-pointer">
                    See why CircleCI is the most popular GitHub integration.
                  </p>
                  <HiChevronRight
                    size={50}
                    className=" text-gray-500 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex flex-col items-center pt-4">
        {/* line1 */}
        <div className="flex mb-[5px]">
          <p className="text-gray-500 text-[12px] cursor-pointer mr-5 hover:underline decoration-blue-700 hover:text-blue-700">
            About
          </p>
          <p className="text-gray-500 text-[12px] mr-5 cursor-pointer mr-5 hover:underline decoration-blue-700 hover:text-blue-700">
            Accessibility
          </p>
          <p className="text-gray-500 text-[12px] cursor-pointer mr-5 hover:underline decoration-blue-700 hover:text-blue-700">
            Help Center
          </p>
        </div>
        {/* line2 */}
        <div className="flex mb-[5px]">
          <div className="flex mr-5">
            <p className="text-gray-500 text-[12px]  cursor-pointer hover:underline decoration-blue-700 hover:text-blue-700">
              Privacy & Terms
            </p>
            <HiChevronDown size={20} className="text-gray-500 cursor-pointer hover:underline decoration-blue-700 hover:text-blue-700" />
          </div>
          <p className="text-gray-500 text-[12px] cursor-pointer mr-5 hover:underline decoration-blue-700 hover:text-blue-700">
            Ad Choices
          </p>
        </div>
        {/* line3 */}
        <div className="flex mb-[5px]">
          <div className="flex mr-5">
            <p className="text-gray-500 text-[12px] cursor-pointer mr-5 hover:underline decoration-blue-700 hover:text-blue-700">
              Advertising
            </p>
            <p className="text-gray-500 text-[12px]  cursor-pointer hover:underline decoration-blue-700 hover:text-blue-700">
              Business Services
            </p>
            <HiChevronDown size={20} className="text-gray-500 cursor-pointer hover:underline decoration-blue-700 hover:text-blue-700" />
          </div>
        </div>
        {/* line4 */}
        <div className="flex mb-[20px]">
          <p className="text-gray-500 text-[12px] mr-5 cursor-pointer mr-5 hover:underline decoration-blue-700 hover:text-blue-700">
            Get the linkedin app
          </p>
          <p className="text-gray-500 text-[12px] cursor-pointer mr-5 hover:underline decoration-blue-700 hover:text-blue-700">
            More
          </p>
        </div>
        {/* copyright line */}
        <div className="flex mr-5 items-center">
        <img
              src="/linkedIn-footer.svg"
              alt=""
              className="h-[15px] rounded-[] mr-1 cursor-pointer"
            />
          <p className="text-gray-500 text-[13px] font-semibold cursor-pointer">
          © 2022 - Ifeanyi Umeh
          </p>
        </div>
      </div>
    </div>
  );
}

export default Widget;
