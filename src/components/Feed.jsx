import { Box } from '@mui/material'
import React from 'react'
import Post from './Post'

const Feed = () => {
  return (
    <Box bgcolor={"white"} flex={4}>
     <Post />
     <Post />
    </Box>
  )
}

export default Feed
