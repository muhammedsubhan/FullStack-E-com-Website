"use client";
import React, { useRef } from "react";
import FlashSalesTimer from "../Timer/FlashSalesTimer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Card from "../Card/Card";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FlashSales = () => {
  const carouselRef = useRef(null);

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5, // Default number of slides to show for larger screens
    slidesToScroll: 2, // Default number of slides to scroll

    responsive: [
      {
        breakpoint: 1440, // 2xl
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1279, // xl
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1023, // lg
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 767, // md
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 639, // sm
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 475, // xs
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const prev = () => {
    carouselRef.current.slickPrev();
  };

  const next = () => {
    carouselRef.current.slickNext();
  };
  return (
    <>
      <div className=" py-16 pl-32 pr-7 container 2xl:pl-10 2xl:pr-5 ">
        <div className="flex items-center gap-5">
          <span className="bg-red-500 px-3 py-6 rounded-md"></span>
          <p className="text-xl font-semibold text-red-500">Today's</p>
        </div>
        <div className="flex  items-center justify-between  md:flex-col md:items-start">
          <div className="flex  items-center gap-16 lg:gap-10 py-8 md:flex-col md:gap-6 md:py-4 md:items-start">
            <p className="text-3xl font-bold lg:text-2xl">Flash Sales</p>
            <FlashSalesTimer duration={4 * 24 * 60 * 60 * 1000} />
          </div>
          <div className="flex gap-4 px-10 md:justify-end md:w-full md:mb-5">
            <button
              onClick={prev}
              className="bg-gray-200 px-3 py-3 rounded-full "
            >
              <ArrowBackIcon />
            </button>
            <button
              onClick={next}
              className="bg-gray-200 px-3 py-3 rounded-full "
            >
              <ArrowForwardIcon />
            </button>
          </div>
        </div>

        <Slider ref={carouselRef} {...settings}>
          <div className="slider-item">
            <Card />
          </div>
          <div className="slider-item">
            <Card />
          </div>
          <div className="slider-item">
            <Card />
          </div>
          <div className="slider-item">
            <Card />
          </div>
          <div className="slider-item">
            <Card />
          </div>
          <div className="slider-item">
            <Card />
          </div>
          <div className="slider-item">
            <Card />
          </div>
          <div className="slider-item">
            <Card />
          </div>
        </Slider>

        <div className="mt-20 text-center">
          <button className=" bg-red-500  w-[250px] h-[60px] rounded-md text-white font-medium">
            View All Products
          </button>
        </div>
        <div className="mt-16">
          <hr style={{ borderColor: "lightgray" }} />
        </div>
      </div>
    </>
  );
};

export default FlashSales;
