import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

import { useSelector } from "react-redux";

const Videos = ({ direction }) => {
  let allVideos = useSelector((state) => state.video);
  const videos = allVideos[allVideos.length - 1];

  if (!videos) return "Loading...";

  console.log(videos, "videos from video component");
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="center"
      gap={2}
    >
      {videos.map((item, ids) => (
        <Box key={ids}>
          {item.id.channelId && <ChannelCard channelDetail={item} />}
          {item.id.videoId && <VideoCard video={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
