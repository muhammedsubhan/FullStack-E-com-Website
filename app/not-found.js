import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="text-center flex flex-col  gap-10">
          <h2 className="text-5xl font-bold">404 Not Found</h2>
          <p>Your visited page not found. You may go home page</p>
          <div className="text-center">
            <Link href="/shop">
              <button className=" bg-red-500  w-[250px] h-[60px] rounded-md text-white font-medium">
                Return Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
