import React from "react";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import BeenhereOutlinedIcon from "@mui/icons-material/BeenhereOutlined";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
const Service = () => {
  return (
    <>
      <div className="flex items-center justify-center gap-20 py-28 lg:px-5 md:flex-col">
        <div className="flex flex-col items-center gap-10">
          <div className="p-3 bg-gray-300 rounded-full w-[100px] h-[100px]">
            <div className="p-2 bg-black rounded-full text-white flex items-center justify-center h-full">
              <LocalShippingOutlinedIcon fontSize="large" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-center sm:text-xl">
              FREE AND FAST DELIVERY
            </h1>
            <p className="text-center font-medium">
              Free delivery for all orders over $140
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-10">
          <div className="p-3 bg-gray-300 rounded-full w-[100px] h-[100px]">
            <div className="p-2 bg-black rounded-full text-white flex items-center justify-center h-full">
              <HeadsetMicOutlinedIcon fontSize="large" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-center sm:text-xl">
              24/7 CUSTOMER SERVICE
            </h1>
            <p className="text-center font-medium">
              Friendly 24/7 customer support
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-10">
          <div className="p-3 bg-gray-300 rounded-full w-[100px] h-[100px]">
            <div className="p-2 bg-black rounded-full text-white flex items-center justify-center h-full">
              <BeenhereOutlinedIcon fontSize="large" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-center sm:text-xl">
              MONEY BACK GUARANTEE
            </h1>
            <p className="text-center font-medium">
              We return Money within 30 days
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-end justify-end px-28 sm:px-10">
        <button className="p-4 rounded-full bg-gray-300 text-black shadow-2xl">
          <ArrowUpwardIcon fontSize="medium" />
        </button>
      </div>
    </>
  );
};

export default Service;
