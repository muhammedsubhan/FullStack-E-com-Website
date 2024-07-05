import React from "react";
import Hero from "../components/Hero/Hero";
import FlashSales from "../components/FlashSales/FlashSales";
import Category from "../components/Category/Category";
import ThisMonth from "../components/ThisMonth/ThisMonth";
import OurProducts from "../components/OurProducts/OurProducts";

const page = () => {
  return (
    <div>
      <Hero />
      <FlashSales />
      <Category />
      <ThisMonth />
      <OurProducts />
    </div>
  );
};

export default page;
