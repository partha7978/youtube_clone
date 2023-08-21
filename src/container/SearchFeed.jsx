import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "../components";
import { fetchFromApi } from "../utils/fetchFromApi";
import { useParams } from "react-router-dom";

const SearchFeed = ({ progress, setProgress }) => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    setProgress(10);
    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setProgress(30);
      setVideos(data.items);
      setProgress(70);
    });
    setProgress(100);
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search results for :{" "}
        <span style={{ color: "#FC1503" }}>{searchTerm}</span>
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
