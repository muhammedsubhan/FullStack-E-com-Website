import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const InputTextField = () => {
  return (
    <>
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
                height: "40px",
                backgroundColor: "#F5F5F5",
                fontSize: "14px",
                color: "#7D8184",
                "& input": {
                  height: "40px",
                  padding: "0 14px",
                },
              },
              "& .MuiOutlinedInput-root": {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "transparent",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "transparent",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "transparent",
                },
              },
            }}
            variant="outlined"
            placeholder="What are you looking for ?"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </div>
    </>
  );
};

export default InputTextField;
