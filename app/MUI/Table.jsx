import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Link from "next/link";
import CartSubTotal from "./CartSubTotal";

const DisplayTable = () => {
  function createData(name, calories, fat, carbs) {
    return { name, calories, fat, carbs };
  }
  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24),
    createData("Ice cream sandwich", 237, 9.0, 37),
    createData("Eclair", 262, 16.0, 24),
    createData("Cupcake", 305, 3.7, 67),
    createData("Gingerbread", 356, 16.0, 49),
  ];
  return (
    <>
      <div className=" px-10 sm:px-5">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Quantity</TableCell>
                <TableCell align="center">Subtotal</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.calories}</TableCell>
                  <TableCell align="center">{row.fat}</TableCell>
                  <TableCell align="center">{row.carbs}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className="mt-10 ">
          <Link href="/shop">
            <button className=" bg-white border transition-all delay-100 ease-in hover:bg-red-500 hover:text-white hover:border-none  w-[250px] h-[60px] sm:w-[170px] sm:text-sm rounded-md text-black font-medium">
              Return To Shop
            </button>
          </Link>
        </div>
        <div>
          <CartSubTotal />
        </div>
      </div>
    </>
  );
};

export default DisplayTable;
