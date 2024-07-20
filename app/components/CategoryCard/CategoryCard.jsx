import Image from "next/image";
import React from "react";

const CategoryCard = () => {
  return (
    <>
      <div className="border rounded-lg border-gray-400 w-[210px] py-8 mt-16 cursor-pointer 2xl:w-[180px] lg:w-[150px] lg:py-6 md:w-[120px] md:h-[140px] md:py-5">
        <div className="flex flex-col items-center justify-center gap-5">
          <Image src="/phone.png" width={60} height={60} alt="phones" />
          <p className="text-xl font-normal">Phones</p>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
