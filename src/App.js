import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Box } from "@mui/material";
import {
  Feed,
  Navbar,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./container";
import LoadingBar from "react-top-loading-bar";
import "./App.css";

const App = () => {
  const [progress, setProgress] = useState(0);

  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <LoadingBar
          color="#FC1503"
          progress={progress}
          height={3}
          // onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route path="/" exace element={<Feed progress={progress} setProgress={setProgress} />} />
          <Route path="/video/:id" element={<VideoDetail progress={progress} setProgress={setProgress} />} />
          <Route path="/channel/:id" element={<ChannelDetail progress={progress} setProgress={setProgress} />} />
          <Route path="/search/:searchTerm" element={<SearchFeed progress={progress} setProgress={setProgress} />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
