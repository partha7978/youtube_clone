import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "../components";
import { fetchFromApi } from "../utils/fetchFromApi";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setVideos, fetchVideos } from '../store/videoSlice'

const SearchFeed = ({ progress, setProgress }) => {
  const dispatch = useDispatch();
  const { searchTerm } = useParams();

  useEffect(() => {
    setProgress(10);
    setProgress(30);
    dispatch(fetchVideos(`search?part=snippet&q=${searchTerm}`))
    setProgress(100); 
    document.title = `${searchTerm} - Youtube`;
  }, [searchTerm]);

  // console.log(useSelector((state) => state.video), "search videos data");

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search results for :{" "}
        <span style={{ color: "#FC1503" }}>{searchTerm}</span>
      </Typography>

      <Videos/>
    </Box>
  );
};

export default SearchFeed;
