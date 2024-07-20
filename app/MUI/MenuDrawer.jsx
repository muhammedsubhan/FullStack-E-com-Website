"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ClearIcon from "@mui/icons-material/Clear";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuDrawer = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActiveLink = (href) => {
    return pathname === href;
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <>
      <div>
        <button onClick={toggleDrawer(true)}>
          <MenuOutlinedIcon sx={{ fontSize: 28 }} />
        </button>

        <Drawer open={open} onClose={toggleDrawer(false)}>
          <div className="flex items-center justify-between py-8 px-7">
            <h1 className="text-xl font-semibold">Menu</h1>
            <button onClick={toggleDrawer(false)}>
              <ClearIcon />
            </button>
          </div>

          <Box sx={{ width: 250 }}>
            <div>
              <ul className="flex items-center flex-col gap-10 text-black font-medium">
                <li>
                  <Link
                    href="/shop"
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
                    href="/contact"
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
                    href="/about"
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
                    href="/signup"
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
          </Box>
        </Drawer>
      </div>
    </>
  );
};

export default MenuDrawer;
