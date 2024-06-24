import React from "react";
import Hero from "../components/Hero/Hero";
import FlashSales from "../components/FlashSales/FlashSales";
import Category from "../components/Category/Category";

const page = () => {
  return (
    <div>
      <Hero />
      <FlashSales />
      <Category />
    </div>
  );
};

export default page;
