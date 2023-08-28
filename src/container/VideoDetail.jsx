import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Box, Typography, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Videos } from "../components/";
import { fetchFromApi } from "../utils/fetchFromApi";

const VideoDetail = ({ progress, setProgress }) => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();
  const [channelVideoId, setChannelVideoId] = useState(
    "UCwFRGieumnh1MrM5F3D65Tg"
  );

  useEffect(() => {
    setProgress(10);

    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      setProgress(30);
      setVideoDetail(data?.items[0]);
      setProgress(100);
    });

    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setChannelVideoId(data?.items[0].snippet.channelId)
    );

    // fetchFromApi(`search?part=id,snippet&relatedToVideoId=${id}&type=video`)
    //   .then((data) => console.log(data, "data"))
    // youtube API has recommended videos endpoint issue -- https://github.com/youtube/api-samples/issues/228
    //so Im showing the channel videos instead

    console.log(videoDetail, "videoDetail");
  }, [id]);

  useEffect(() => {
    console.log(
      channelVideoId ? channelVideoId : "invalid channel id",
      "channelId"
    );
    fetchFromApi(
      `search?part=id%2Csnippet&channelId=${channelVideoId}&order=date`
    ).then((data) => setVideos(data?.items));
    console.log(videos, "videosrelated");
  }, [channelVideoId]);

  if (!videoDetail?.snippet) return "Loading...";

  if (!videos) {
    console.log(videos, "videos");
  }

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  document.title = `Youtube Clone - ${title}`;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "80px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography
              color="#fff"
              variant="h5"
              fontWeight="bold"
              px={2}
              py={1}
            >
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: 14, color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>

        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
