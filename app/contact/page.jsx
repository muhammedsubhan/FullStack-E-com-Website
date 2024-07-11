import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import TextField from "@mui/material/TextField";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <div className="py-10 px-28 md:px-10">
        <Breadcrumbs aria-label="breadcrumb">
          <Link className="hover:underline" color="inherit" href="/shop">
            Home
          </Link>
          <p>Contact</p>
        </Breadcrumbs>
      </div>
      <div className="h-full pb-20 flex items-center flex-col justify-center    2xl:items-start 2xl:justify-start">
        <div className="flex gap-10 2xl:flex-col 2xl:w-full 2xl:px-10">
          <div
            style={{
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
            className="rounded-md w-[500px] 2xl:w-full h-[550px] justify-center flex flex-col gap-10 px-5"
          >
            <div className="flex items-center gap-5">
              <div className="bg-red-500 p-2 rounded-full">
                <PhoneOutlinedIcon
                  sx={{
                    color: "#fff",
                  }}
                />
              </div>
              <p className="font-semibold">Call to us </p>
            </div>
            <div className="flex flex-col gap-5 font-medium">
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: +8816111222</p>
            </div>
            <hr />
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-5">
                <div className="bg-red-500 p-2 rounded-full">
                  <EmailOutlinedIcon
                    sx={{
                      color: "#fff",
                    }}
                  />
                </div>
                <p className="font-semibold">Write to Us</p>
              </div>
              <div className="flex flex-col gap-5 font-medium">
                <p>
                  Fill out our form and we will contact you within 24 hours.
                </p>
                <p>Emails: customer@exclusive.com</p>
                <p>Emails: support@exclusive.com</p>
              </div>
            </div>
          </div>
          <div
            className="w-[1000px] 2xl:w-full rounded-md p-8 flex flex-col gap-10 "
            style={{
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          >
            <div className="flex gap-10  lg:flex-col">
              <TextField
                id="outlined-basic"
                label="Your Name "
                variant="outlined"
                className="w-full"
                sx={{
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "gray", // Label color when focused
                  },
                  "& .MuiInputLabel-root": {
                    color: "gray", // Label color
                  },
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#F5F5F5", // Background color
                    "&:hover fieldset": {
                      borderColor: "transparent", // No border on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "transparent", // No border when focused
                    },
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent", // Transparent border
                  },
                }}
              />
              <TextField
                id="outlined-basic"
                label="Your Email"
                variant="outlined"
                className="w-full"
                sx={{
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "gray", // Label color when focused
                  },
                  "& .MuiInputLabel-root": {
                    color: "gray", // Label color
                  },
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#F5F5F5", // Background color
                    "&:hover fieldset": {
                      borderColor: "transparent", // No border on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "transparent", // No border when focused
                    },
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent", // Transparent border
                  },
                }}
              />
              <TextField
                id="outlined-basic"
                label="Your Phone "
                variant="outlined"
                className="w-full"
                sx={{
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "gray", // Label color when focused
                  },
                  "& .MuiInputLabel-root": {
                    color: "gray", // Label color
                  },
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#F5F5F5", // Background color
                    "&:hover fieldset": {
                      borderColor: "transparent", // No border on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "transparent", // No border when focused
                    },
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent", // Transparent border
                  },
                }}
              />
            </div>
            <div>
              <textarea
                name="message"
                rows="10"
                cols="99"
                placeholder="Your Message *"
                className="border-none p-4 focus:outline-none w-full"
                style={{ backgroundColor: "#F5F5F5" }}
              ></textarea>
            </div>
            <div className=" text-end">
              <button className=" bg-red-500  w-[250px] sm:w-full h-[60px] rounded-md text-white font-medium">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
