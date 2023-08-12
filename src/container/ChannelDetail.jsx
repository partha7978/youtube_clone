import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { Videos, ChannelCard } from '../components'
import { fetchFromApi } from '../utils/fetchFromApi'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  console.log(channelDetail, 'channelDetail')
  console.log(videos, 'videos')

  useEffect(() => {
    fetchFromApi(`channels?part=snippet"&id=${id}`)
    .then((data) => setChannelDetail(data?.items[0]))

    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setVideos(data?.items))
  }, [id])
  return (
    <Box minHeight='95vh'>
        <Box>
          <div style ={{
            backgroundColor: '#f8ceec',
            backgroundImage: 'linear-gradient(315deg, #f8ceec 0%, #a88beb 74%)',
            zIndex: 10,
            height: '300px'
          }} />

          <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
        </Box>

        <Box display='flex' p="2">
          <Box sx={{ mr: {sm: '100px'}}}>
            <Videos videos={videos} />
          </Box>
        </Box>
    </Box>
  )
}

export default ChannelDetail