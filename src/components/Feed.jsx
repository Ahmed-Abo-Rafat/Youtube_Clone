import {useState, useEffect} from 'react'
import { Box, Stack, Typography } from '@mui/material'
import {Loader, Sidebar, Videos} from "./"

import { fetchFromAPI } from '../utils/fetchFromAPI'
const Feed = () => {

  const [slectedCategory, setSlectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    
    fetchFromAPI(`search?part=snippet&q=${slectedCategory}`)
    .then((data) => setVideos(data.items))

  }, [slectedCategory]);

  return (
    <Stack sx={{flexDirection: {sx: 'column', md: 'row'}}}>
      <Box sx={{height: {sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px: {sx: 0, md: 2}}}>
        <Sidebar slectedCategory={slectedCategory} setSlectedCategory={setSlectedCategory}  />
        <Typography className='copyright' variant='body2' sx={{mt: 1.5, color: '#fff'}}>
          Copyright 2023 Ahmed Rafat
        </Typography>
      </Box>

      <Box p={2} sx={{
        overflowY: 'auto',
        height: '90vh',
        flex: 2
      }}>
        <Typography 
          variant='h4'
          fontWeight='bold'
          mb={2}
          sx={{color: 'white'}}
        >
          {slectedCategory} <span style={{color: '#F31503'}}>videos</span>
        </Typography>
        {!videos? <Loader /> : <Videos videos={videos} />} 
        
      </Box>
    </Stack>
  )
}

export default Feed