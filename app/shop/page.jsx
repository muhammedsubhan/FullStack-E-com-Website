import React from "react";
import Hero from "../components/Hero/Hero";
import FlashSales from "../components/FlashSales/FlashSales";
import Category from "../components/Category/Category";
import ThisMonth from "../components/ThisMonth/ThisMonth";

const page = () => {
  return (
    <div>
      <Hero />
      <FlashSales />
      <Category />
      <ThisMonth />
    </div>
  );
};

export default page;
