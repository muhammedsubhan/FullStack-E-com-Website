"use client";
import InputTextField from "@/app/MUI/InputTextField";
import Link from "next/link";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { usePathname } from "next/navigation";
import MenuDrawer from "@/app/MUI/MenuDrawer";

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
            <MenuDrawer />
          </div>

          <div>
            <Link href="/shop">
              <h1 className="text-2xl font-bold">Exclusive</h1>
            </Link>
          </div>
          <div className="lg:hidden ">
            <ul className="flex items-center gap-16  text-black font-medium">
              <li>
                <Link
                  href="/shop"
                  className={`underline-animation ${
                    isActiveLink("/shop") ? "active-link" : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="contact"
                  className={`underline-animation ${
                    isActiveLink("/contact") ? "active-link" : ""
                  }`}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="about"
                  className={`underline-animation ${
                    isActiveLink("/about") ? "active-link" : ""
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="signup"
                  className={`underline-animation ${
                    isActiveLink("/signup") ? "active-link" : ""
                  }`}
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
            <Link href="/wishlist">
              <button>
                <FavoriteBorderIcon />
              </button>
            </Link>
            <Link href="/cart">
              <button>
                <ShoppingCartOutlinedIcon />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
