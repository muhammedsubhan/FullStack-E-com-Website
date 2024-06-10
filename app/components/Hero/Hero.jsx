import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className=" container flex">
        <div className=" w-[470px]  border-r pt-5">
          <ul className="flex items-center justify-center">
            <div className="flex flex-col gap-3 font-medium">
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
        <div className="pt-5 pl-20">
          <div>
            <Image
              src="/banner-1.jpg"
              className="w-[1200px] h-[400px]"
              height={400}
              width={600}
              alt="banner"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
