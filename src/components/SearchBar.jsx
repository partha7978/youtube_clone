import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
    
  }

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: { xs: "65%", sm: "350px", md: "300px" },  
        height: { xs: "40px", sm: "40px", md: "40px"},
        display: "flex",
        justifyContent: "space-between",
        borderRadius: 20,
        border: "1px solid #222222",
        backgroundColor: "#1e1e1e",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search.."
        value={searchTerm}
        onChange={(e) => {setSearchTerm(e.target.value)}}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
