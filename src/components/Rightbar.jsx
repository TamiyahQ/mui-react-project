import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box bgcolor={"lightgrey"} 
    flex={2} p={2} sx={{display:{xs:"none", sm: "block"}}}>
      <Typography variant='h6' fontWeight={300} mb={2} ml={1}>
          Friends Online
      </Typography>
      <AvatarGroup max={4} sx={{margin:"3", justifyContent:"center"}}>
       <Avatar alt="Remy Sharp" src=".\images\pexels-stefanstefancik-91227.jpg" />
       <Avatar alt="Travis Howard" src=".\images\pexels-olly-774909.jpg" />
       <Avatar alt="Cindy Baker" src=".\images\pexels-tomaz-barcellos-999425-1987301.jpg" />
       <Avatar alt="Agnes Walker" src="" />
       <Avatar alt="Trevor Henderson" src="" />
      </AvatarGroup>
      <Typography variant='h6' fontWeight={300} my={2} ml={1}>
        Latest from the Feed
      </Typography>
      <ImageList>
        <ImageListItem>
          <img src=".\images\pexels-thisisengineering-3861951.jpg" alt="photo" />
        </ImageListItem>
        <ImageListItem>
          <img src=".\images\pexels-markusspiske-1089438.jpg" alt="photo" />
        </ImageListItem>
        <ImageListItem>
          <img src=".\images\pexels-digitalbuggu-374559.jpg" alt="photo" />
        </ImageListItem>
        <ImageListItem>
          <img src=".\images\pexels-divinetechygirl-1181467.jpg" alt="photo" />
        </ImageListItem>
      </ImageList>
      <Typography variant='h6' fontWeight={300} my={2} ml={1}>
        Latest Discussions
      </Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src=".\images\pexels-olly-774909.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Practice Code?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in town so we can practice on our recent…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src=".\images\pexels-stefanstefancik-91227.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Dev Classes"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Casie, Jennifer
              </Typography>
              {" — I'm going to skip the early few classes to focus on…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src=".\images\pexels-tomaz-barcellos-999425-1987301.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer Break"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have any recommendations? What Tech should I learn in…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
    </Box>
    
  )
}

export default Rightbar
