import React from "react";
import {
  HiArrowNarrowRight,
  HiChevronRight,
  HiChevronDown,
} from "react-icons/hi";

function Footer2() {
  return (
    <div className="flex flex-col items-center lg:hidden">
      <div className="flex flex-col lg:flex-row items-center pt-4 mb-5">
        <p className="text-gray-500 text-[12px] cursor-pointer mr-5 hover:underline decoration-blue-700 hover:text-blue-700">
          About
        </p>
        <p className="text-gray-500 text-[12px] mr-5 cursor-pointer mr-5 hover:underline decoration-blue-700 hover:text-blue-700">
          Accessibility
        </p>
        <p className="text-gray-500 text-[12px] cursor-pointer mr-5 hover:underline decoration-blue-700 hover:text-blue-700">
          Help Center
        </p>
        <div className="flex mr-5">
            <p className="text-gray-500 text-[12px]  cursor-pointer hover:underline decoration-blue-700 hover:text-blue-700">
              Privacy & Terms
            </p>
            <HiChevronDown
              size={20}
              className="text-gray-500 cursor-pointer hover:underline decoration-blue-700 hover:text-blue-700"
            />
        </div>
        <p className="text-gray-500 text-[12px] cursor-pointer mr-5 hover:underline decoration-blue-700 hover:text-blue-700">
          Ad Choices
        </p>
        <div className="flex mr-5">
          <p className="text-gray-500 text-[12px] cursor-pointer mr-5 hover:underline decoration-blue-700 hover:text-blue-700">
            Advertising
          </p>
          <p className="text-gray-500 text-[12px]  cursor-pointer hover:underline decoration-blue-700 hover:text-blue-700">
            Business Services
          </p>
          <HiChevronDown
            size={20}
            className="text-gray-500 cursor-pointer hover:underline decoration-blue-700 hover:text-blue-700"
          />
        </div>
        <p className="text-gray-500 text-[12px] mr-5 cursor-pointer mr-5 hover:underline decoration-blue-700 hover:text-blue-700">
          Get the linkedin app
        </p>
        <p className="text-gray-500 text-[12px] cursor-pointer mr-5 hover:underline decoration-blue-700 hover:text-blue-700">
          More
        </p>
      </div>

      {/* copyright line */}
      <div className="flex mr-5 items-center pb-10">
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
  );
}

export default Footer2;
