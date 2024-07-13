import Image from "next/image";
import React from "react";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import Link from "next/link";
import Breadcrumbs from "@mui/material/Breadcrumbs";

const About = () => {
  return (
    <>
      <div className="py-10 px-56 md:px-10 ">
        <Breadcrumbs aria-label="breadcrumb">
          <Link className="hover:underline " color="inherit" href="/shop">
            Home
          </Link>
          <p>About</p>
        </Breadcrumbs>
      </div>
      <div className="h-full ">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-10 w-[640px] ml-60">
            <h1 className="text-5xl font-bold">Our Story</h1>
            <p className="text-xl ">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>

            <p className="text-xl ">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <div>
            <Image src="/story.png" alt="story" height={800} width={800} />
          </div>
        </div>
        <div className="py-40 flex items-center justify-center gap-5">
          <div className=" border border-gray-300 w-[340px] h-[250px] flex flex-col items-center justify-center rounded-md hover:bg-red-500 transition-colors duration-300 group">
            <div className="flex flex-col items-center gap-10">
              <div className="p-3 bg-gray-300 rounded-full w-[100px] h-[100px] group-hover:bg-gray-200">
                <div className="p-2 bg-black rounded-full text-white flex items-center justify-center h-full group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  <StorefrontOutlinedIcon fontSize="large" />
                </div>
              </div>
              <div className="flex flex-col gap-2 group-hover:text-white">
                <h1 className="text-3xl font-bold text-center sm:text-xl">
                  10.5k
                </h1>
                <p className="text-center font-medium">
                  Sellers active our site
                </p>
              </div>
            </div>
          </div>
          <div className="border border-gray-300 w-[340px] h-[250px] flex flex-col items-center justify-center rounded-md  hover:bg-red-500 transition-colors duration-300 group">
            <div className="flex flex-col items-center gap-10">
              <div className="p-3 bg-gray-300 rounded-full w-[100px] h-[100px]  group-hover:bg-gray-200">
                <div className="p-2 bg-black rounded-full text-white flex items-center justify-center h-full group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  <MonetizationOnOutlinedIcon fontSize="large" />
                </div>
              </div>
              <div className="flex flex-col gap-2 group-hover:text-white">
                <h1 className="text-3xl font-bold text-center sm:text-xl">
                  33k
                </h1>
                <p className="text-center font-medium">Monthly Product Sale</p>
              </div>
            </div>
          </div>
          <div className="border border-gray-300 w-[340px] h-[250px] flex flex-col items-center justify-center rounded-md  hover:bg-red-500 transition-colors duration-300 group">
            <div className="flex flex-col items-center gap-10">
              <div className="p-3 bg-gray-300 rounded-full w-[100px] h-[100px]  group-hover:bg-gray-200">
                <div className="p-2 bg-black rounded-full text-white flex items-center justify-center h-full group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  <ShoppingBagOutlinedIcon fontSize="large" />
                </div>
              </div>
              <div className="flex flex-col gap-2 group-hover:text-white">
                <h1 className="text-3xl font-bold text-center sm:text-xl">
                  45.5k
                </h1>
                <p className="text-center font-medium">
                  Customers Active in Our Site
                </p>
              </div>
            </div>
          </div>
          <div className="border border-gray-300 w-[340px] h-[250px] flex flex-col items-center justify-center rounded-md  hover:bg-red-500 transition-colors duration-300 group">
            <div className="flex flex-col items-center gap-10">
              <div className="p-3 bg-gray-300 rounded-full w-[100px] h-[100px]  group-hover:bg-gray-200">
                <div className="p-2 bg-black rounded-full text-white flex items-center justify-center h-full group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  <LocalAtmOutlinedIcon fontSize="large" />
                </div>
              </div>
              <div className="flex flex-col gap-2 group-hover:text-white">
                <h1 className="text-3xl font-bold text-center sm:text-xl">
                  25k
                </h1>
                <p className="text-center font-medium">
                  Anual gross Sale in Site
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
