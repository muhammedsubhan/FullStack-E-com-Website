import { TextField } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SignIn = () => {
  return (
    <>
      <div className="py-10 flex items-center justify-between lg:justify-center lg:gap-0 lg:pr-0 gap-16 pr-28 2xl:pr-10">
        <div className="lg:hidden flex">
          <Image
            src="/signup.png"
            height={500}
            width={1000}
            alt="signup"
            className="xl:w-[600px]"
          />
        </div>

        <div className=" flex flex-col gap-10 w-[500px] xl:mr-10 lg:mr-0 sm:w-full sm:px-10">
          <div className="flex flex-col gap-6 ">
            <h1 className="text-3xl font-semibold lg:text-2xl">
              Log in to Exclusive
            </h1>
            <p className="">Enter your details below.</p>
          </div>
          <div>
            <div className="flex flex-col gap-10 lg:gap-5">
              <TextField
                id="standard-basic"
                label="Email"
                variant="standard"
                sx={{
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "#7D8184", // Change border bottom color when focused
                  },
                  "& .MuiInputLabel-root": {
                    color: "#7D8184", // Change label color when focused
                  },
                  "&:hover .MuiInput-underline:before": {
                    borderBottomColor: "#7D8184", // Change border bottom color on hover
                  },
                }}
              />

              <TextField
                id="standard-basic"
                label="Password"
                variant="standard"
                sx={{
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "#7D8184", // Change border bottom color when focused
                  },
                  "& .MuiInputLabel-root": {
                    color: "#7D8184", // Change label color when focused
                  },
                  "&:hover .MuiInput-underline:before": {
                    borderBottomColor: "#7D8184", // Change border bottom color on hover
                  },
                }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <button className=" bg-red-500  w-full h-[60px] rounded-md text-white font-medium">
              Login
            </button>
            <button className=" flex items-center justify-center gap-5 bg-white border border-gray-300  w-full h-[60px] rounded-md text-black font-medium">
              <Image
                src="/google.png"
                height={20}
                width={20}
                alt="google-icon"
              />{" "}
              Login with Google
            </button>
          </div>
          <div className="text-center flex flex-col gap-5">
            <p className="font-medium text-red-500">Forget Password?</p>
            <p>
              Don't have an Account?{" "}
              <span className="font-medium hover:underline underline-offset-4">
                <Link href="/signup">Create</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
