"use client";
import { Breadcrumbs } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import DisplayTable from "../MUI/Table";

const Cart = () => {
  const pathname = usePathname();
  const isCartActive = pathname === "/cart";

  return (
    <>
      <div className="min-h-screen">
        <div className="py-10 px-28 md:px-10">
          <Breadcrumbs aria-label="breadcrumb">
            <Link className="hover:underline" color="inherit" href="/shop">
              Home
            </Link>
            <p className={isCartActive ? "font-medium text-black" : ""}>Cart</p>
          </Breadcrumbs>
        </div>

        <div>
          <DisplayTable />
        </div>
      </div>
    </>
  );
};

export default Cart;
