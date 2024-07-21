import React from "react";
import Card from "../components/Card/Card";

const Wishlist = () => {
  return (
    <>
      <div className=" min-h-screen ">
        <div className="flex items-center justify-between px-10 py-10 sm:px-4">
          <h1 className="text-xl font-semibold sm:text-base">Wishlist (0)</h1>
          <button className=" bg-white border transition-all delay-100 ease-in hover:bg-red-500 hover:text-white hover:border-none  w-[250px] h-[60px] sm:w-[170px] sm:text-sm rounded-md text-black font-medium">
            Move All To Cart
          </button>
        </div>
        <div className="flex gap-7 flex-wrap items-center justify-center">
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
