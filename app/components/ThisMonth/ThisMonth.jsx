import React from "react";
import Card from "../Card/Card";
import FlashSalesTimer from "../Timer/FlashSalesTimer";
import Image from "next/image";

const ThisMonth = () => {
  return (
    <>
      <div className=" py-16 pl-32 pr-7 container 2xl:pl-10 2xl:pr-5 ">
        <div className="flex items-center gap-5">
          <span className="bg-red-500 px-3 py-6 rounded-md"></span>
          <p className="text-xl font-semibold text-red-500">This Month</p>
        </div>
        <div className="flex items-center justify-between md:flex-col md:items-start">
          <div className="flex  items-center  lg:gap-10 py-8 md:flex-col md:gap-6 md:py-4 md:items-start">
            <p className="text-3xl font-bold lg:text-2xl">
              Best Selling Products
            </p>
          </div>

          <div className="mt-8 text-center">
            <button className=" bg-red-500 text-sm  w-[150px] h-[50px] rounded-md text-white font-medium">
              View All
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between  gap-5 xl:flex-wrap xl:justify-normal">
          <div className="mt-10 sm:w-full">
            <Card />
          </div>
          <div className="mt-10 sm:w-full">
            <Card />
          </div>
          <div className="mt-10 sm:w-full">
            <Card />
          </div>
          <div className="mt-10 sm:w-full">
            <Card />
          </div>
          <div className="mt-10 sm:w-full">
            <Card />
          </div>
        </div>
        <div className="mt-28 bg-black text-white flex items-center justify-between xl:gap-10 py-28 px-20 md:flex-col">
          <div className="flex flex-col gap-10">
            <div>
              <h1 className="text-xl font-medium text-green-400">Categories</h1>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-5xl font-semibold lg:text-2xl">Enhance Your</p>
              <p className="text-5xl font-semibold lg:text-2xl">
                Music Experience
              </p>
            </div>
            <div>
              <FlashSalesTimer duration={3 * 24 * 60 * 60 * 1000} />
            </div>
            <div>
              <button className=" bg-green-500 text-sm  w-[150px] h-[50px] rounded-md text-white font-medium">
                Buy Now!
              </button>
            </div>
          </div>
          <div className="relative ">
            <Image
              src="/jbl.png"
              width={600}
              height={600}
              alt="jbl"
              className="relative z-10 lg:w-[400px] "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ThisMonth;
