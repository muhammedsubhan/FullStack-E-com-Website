import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
const Footer = () => {
  return (
    <div className="bg-black text-white mt-10 ">
      <div className="flex justify-around  bg-black text-white py-28 lg:flex-wrap lg:px-10 lg:gap-10 lg:justify-between sm:px-5">
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl font-bold">Exclusive</h1>
          <p className="font-medium">Subscribe</p>
          <p className="font-medium">Get 10% off your first order</p>
          <div>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                sx={{
                  "& .MuiInputBase-root": {
                    height: "50px",
                    backgroundColor: "#0000",
                    fontSize: "14px",
                    color: "#fff",
                    "& input": {
                      height: "40px",
                      padding: "0 14px",
                    },
                  },
                  "& .MuiOutlinedInput-root": {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#fff",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#fff",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#fff",
                    },
                  },
                }}
                variant="outlined"
                placeholder="Enter your email..."
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SendOutlinedIcon
                        className="cursor-pointer"
                        sx={{
                          color: "#fff",
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl font-bold">Support</h1>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+888015-8888-99999</p>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl font-bold">Account</h1>
          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl font-bold">Quick Link</h1>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
      </div>

      <div className="text-center border-t py-5 border-gray-800">
        <p className="text-gray-400 font-medium">
          &copy; Copyright Subhan 2024. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
