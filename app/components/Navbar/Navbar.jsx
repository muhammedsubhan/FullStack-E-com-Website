"use client";
import InputTextField from "@/app/MUI/InputTextField";
import Link from "next/link";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const isActiveLink = (href) => {
    return pathname === href;
  };

  return (
    <>
      <div className="border-b h-20 flex flex-col justify-center">
        <div className="flex items-center justify-around">
          <div className="hidden sm:flex">
            <button>
              <MenuOutlinedIcon sx={{ fontSize: 28 }} />
            </button>
          </div>
          <div>
            <Link href="/">
              <h1 className="text-2xl font-bold">Exclusive</h1>
            </Link>
          </div>
          <div className="lg:hidden ">
            <ul className="flex items-center gap-16  text-black font-medium">
              <li>
                <Link
                  href="/"
                  className={
                    isActiveLink("/")
                      ? "underline underline-offset-8 decoration-gray-500 decoration-2	"
                      : ""
                  }
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="contact"
                  className={
                    isActiveLink("/contact")
                      ? "underline underline-offset-8 decoration-gray-500 decoration-2	"
                      : ""
                  }
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="about"
                  className={
                    isActiveLink("/about")
                      ? "underline underline-offset-8 decoration-gray-500 decoration-2	"
                      : ""
                  }
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="signup"
                  className={
                    isActiveLink("/signup")
                      ? "underline underline-offset-8 decoration-gray-500 decoration-2	"
                      : ""
                  }
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <div className="sm:hidden ">
              <InputTextField />
            </div>
            <button>
              <FavoriteBorderIcon />
            </button>
            <button>
              <ShoppingCartOutlinedIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
