import React from 'react'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/constants'

const ChannelCard = ({channelDetail, marginTop}) => {
  return (
    <Box
        sx={{
            boxShadow: "none",
            borderRadius: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: {xs: '350px', md: '320px'},
            height: '326px',
            margin: 'auto',
            marginTop
        }}
    >

    <Link to={`/channel/${channelDetail?.id?.channelId}`}>

        <CardContent
            sx={{
              display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                color: "#fff",  
            }}
        >
            <CardMedia 
            image={channelDetail?.snippet?.thumbnails?.high?.url}
            alt={channelDetail?.snippet?.channelTitle}
            sx={{
                borderRadius: "50%",
                height: "180px",
                width: "180px",
                mb: 2,
                border: '1px solid #e3e3e3'
            }}

            />
            <Typography variant="h6" fontWeight="bold">
                {channelDetail?.snippet?.title}
                <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px" }} />
            </Typography>
            {channelDetail?.statistics?.subscriberCount && (
                <Typography variant="subtitle2" fontWeight="bold" color="gray">
                    {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} subscribers
                </Typography>
            )}
        </CardContent>
    </Link>


    </Box>
  )
}

export default ChannelCard