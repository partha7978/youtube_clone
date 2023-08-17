import React from 'react'
import { Stack, Box } from '@mui/material'
import { VideoCard, ChannelCard} from './'

const Videos = ({videos, direction}) => {
  if(!videos) return "Loading...";

  console.log(videos)
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="center" gap={2}>
      {videos.map((item, ids) => (
          <Box key={ids}>
            {item.id.channelId && <ChannelCard channelDetail={item} />}
            {item.id.videoId && <VideoCard video={item} />}
          </Box>
      ))}
    </Stack>
  )
}

export default Videos