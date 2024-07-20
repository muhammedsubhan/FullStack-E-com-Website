import Image from "next/image";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
const Card = () => {
  return (
    <>
      <div className="flex items-center justify-center ">
        <div className="flex flex-col gap-5 group  xs:w-full ">
          <div className="bg-gray-200 max-w-[290px] xs:max-w-full relative p-10 xs:flex xs:items-center xs:justify-center">
            <Image
              src="/controller.png"
              height={200}
              width={200}
              alt="controller"
              className="flex items-center justify-center  "
            />
            <button className="bg-white absolute top-3 right-3 p-2 rounded-full">
              <FavoriteBorderIcon />
            </button>
            <button className="bg-white absolute top-16 right-3 p-2 rounded-full">
              <VisibilityOutlinedIcon />
            </button>
            <button className="bg-black text-white p-2 w-full absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Add to Cart
            </button>
            <span className="absolute top-3 left-3  bg-red-500 px-3 py-2 rounded-md text-white text-sm">
              -40%
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-base font-semibold">HAVIT HV -G92 GamePad</h1>

            <div className="flex items-center gap-4">
              <p className="font-medium text-red-500 ">$120</p>
              <del className="text-gray-400 font-medium">$160</del>
            </div>
            <div className="flex gap-2 items-center ">
              <StarIcon sx={{ color: "#FFAD33" }} className=" sm:w-4 sm:h-4" />
              <StarIcon sx={{ color: "#FFAD33" }} className=" sm:w-4 sm:h-4" />
              <StarIcon sx={{ color: "#FFAD33" }} className=" sm:w-4 sm:h-4" />
              <StarIcon sx={{ color: "#FFAD33" }} className=" sm:w-4 sm:h-4" />
              <StarIcon sx={{ color: "#FFAD33" }} className=" sm:w-4 sm:h-4" />
              <p className="text-sm text-gray-400 font-medium">(88)</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
