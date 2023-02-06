import React from 'react'
import { Stack, Box } from '@mui/material';
import { VideoCard, ChannelCard } from './';


const Videos = ({videos, direction}) => {
  return (
    <Stack direction={direction || 'row'} 
      flexWrap='wrap' 
      justifyContent='start'
      alignItems='center'
      gap={2}
    >
      {videos.map((item, indx) => (
        <Box key={indx}>
          {item.id.videoId && <VideoCard video={item}/>}
          {item.id.channelId && <ChannelCard channelDetail={item}/>}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos