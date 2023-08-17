import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import { SearchBar } from "../components";
import { Typography } from "@mui/material";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={35} />
      <Typography
        sx={{ ml: "8px",
          display: { xs: "none", sm: "block"}
        }}
        variant="h5"
        fontWeight="bold"
        color="#fff"
      >
        YouTube
      </Typography>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
