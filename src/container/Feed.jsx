import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { SideBar, Videos } from "../components";
import { fetchFromApi } from "../utils/fetchFromApi";

import { useDispatch, useSelector } from "react-redux";
import { setVideos, fetchVideos } from "../store/videoSlice";

const Feed = ({ progress, setProgress }) => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("New");
  // const [videos, setVideos] = useState([]);

  useEffect(() => {
    setProgress(10);
    setProgress(30);
    dispatch(fetchVideos(`search?part=snippet&q=${selectedCategory}`));
    setProgress(100);
    document.title = `${selectedCategory} - Youtube`;
  }, [selectedCategory]);

  // console.log(useSelector((state) => state.video), 'video from feed component');

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          // borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#3F3F3F", fontSize: "0.7rem" }}
        >
          Made with ❤️ by{" "}
          <a style={{ color: "#3F3F3F" }} href="https://parthadev.netlify.app/">
            Partha
          </a>
        </Typography>
      </Box>

      <Box p={2} pt={0} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        <Videos />
      </Box>
    </Stack>
  );
};

export default Feed;
