"use client";

import React, { useEffect, useState } from "react";

const FlashSalesTimer = ({ duration }) => {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);

  const getFormattedTime = (milliseconds) => {
    let total_seconds = parseInt(Math.floor(milliseconds / 1000));
    let total_minutes = parseInt(Math.floor(total_seconds / 60));
    let total_hours = parseInt(Math.floor(total_minutes / 60));
    let days = parseInt(Math.floor(total_hours / 24));

    let seconds = parseInt(total_seconds % 60);
    let minutes = parseInt(total_minutes % 60);
    let hours = parseInt(total_hours % 24);

    return (
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-6 sm:gap-3">
          <div className="flex flex-col items-center">
            <p className="font-semibold text-xs">Days</p>
            <p className="text-3xl font-bold lg:text-2xl ">{days}</p>
          </div>
          <p className="text-2xl font-bold text-red-600">:</p>
          <div className="flex flex-col items-center">
            <p className="font-semibold text-xs">Hours</p>
            <p className="text-3xl font-bold lg:text-2xl">{hours}</p>
          </div>
          <p className="text-2xl font-bold text-red-600">:</p>
          <div className="flex flex-col items-center">
            <p className="font-semibold  text-xs">Minutes</p>
            <p className="text-3xl font-bold lg:text-2xl">{minutes}</p>
          </div>
          <p className="text-2xl font-bold text-red-600">:</p>
          <div className="flex flex-col items-center">
            <p className="font-semibold  text-xs">Seconds</p>
            <p className="text-3xl font-bold lg:text-2xl">{seconds}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div>
        <div>{getFormattedTime(time)}</div>
      </div>
    </>
  );
};

export default FlashSalesTimer;
