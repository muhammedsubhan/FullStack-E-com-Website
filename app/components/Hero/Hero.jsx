"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Hero = () => {
  return (
    <>
      <div className=" container flex lg:flex-col">
        <div className=" w-[470px]  h-[425px] border-r pt-5 lg:w-full lg:h-10 lg:py-10 lg:border-none">
          <ul className="flex items-center justify-center ">
            <div className="flex flex-col lg:items-center lg:w-full gap-2.5 font-medium lg:flex-row lg:text-xs lg:px-2">
              <li className="underline-animation">
                <Link href="/shop/womens">Women's Fashion</Link>
              </li>
              <li className="underline-animation">
                <Link href="/shop/mens">Men's Fashion</Link>
              </li>
              <li className="underline-animation">
                <Link href="/shop/electronics">Electronics</Link>
              </li>
              <li className="underline-animation">
                <Link href="/shop/home">Home & Lifestyle</Link>
              </li>
              <li className="underline-animation">
                <Link href="/shop/medicine">Medicine</Link>
              </li>
              <li className="underline-animation">
                <Link href="/shop/sports">Sports & Outdoor</Link>
              </li>
              <li className="underline-animation">
                <Link href="/shop/womens">Baby's & Toys</Link>
              </li>
              <li className="underline-animation">
                <Link href="/shop/groceries">Groceries & Pets</Link>
              </li>
              <li className="underline-animation">
                <Link href="/shop/beauty">Health & Beauty</Link>
              </li>
            </div>
          </ul>
        </div>
        <div className="pt-5 px-20 w-[1380px] lg:w-full lg:px-5">
          <Carousel
            autoPlay
            interval={3000}
            infiniteLoop
            showArrows={false}
            showStatus={false}
          >
            <div>
              <Image
                src="/banner-1.jpg"
                className="w-[800px] h-[400px] lg:h-[300px] lg:w-full"
                height={400}
                width={600}
                alt="banner"
              />
            </div>
            <div>
              <Image
                src="/banner-1.jpg"
                className="w-[800px] h-[400px] lg:h-[300px] lg:w-full"
                height={400}
                width={600}
                alt="banner"
              />
            </div>
            <div>
              <Image
                src="/banner-1.jpg"
                className="w-[800px] h-[400px] lg:h-[300px] lg:w-full"
                height={400}
                width={600}
                alt="banner"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Hero;
