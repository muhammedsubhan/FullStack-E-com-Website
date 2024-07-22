import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Link from "next/link";

const CartSubTotal = () => {
  return (
    <div className="mt-10">
      <div className="px-3 py-6">
        <h1 className="text-xl font-medium">Cart Total</h1>
      </div>
      <List
        sx={{ width: "100%", bgcolor: "background.paper" }}
        className="flex flex-col gap-5"
      >
        <ListItem>
          <div className="flex items-center justify-between w-full font-medium">
            <h1>Subtotal</h1>
            <p>$1750</p>
          </div>
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem>
          <div className="flex items-center justify-between w-full font-medium">
            <h1>Shipping</h1>
            <p>Free</p>
          </div>
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem>
          <div className="flex items-center justify-between w-full font-medium">
            <h1>Total</h1>
            <p>$1750</p>
          </div>
        </ListItem>
      </List>
      <div className="my-6 px-3 ">
        <Link href="/" className="block">
          <button className="bg-red-500 w-full max-w-[280px] sm:text-sm cursor-pointer h-[60px] rounded-md text-white font-medium">
            Process to checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartSubTotal;
