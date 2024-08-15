import { DarkMode, Face, Groups, Home, Newspaper, People, Settings } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

const Sidebar = ({mode, setMode}) => {
  return (
  <Box bgcolor = {"lightgray"}
     flex={1} p={2} sx={{display:{xs:"none", sm: "block"}}}>
     <List>
     <ListItem disablePadding>
       <ListItemButton component="a" href="#home">
         <ListItemIcon>
           <Home />
         </ListItemIcon>
         <ListItemText primary="Homepage" />
       </ListItemButton>
     </ListItem>
     <ListItem disablePadding>
       <ListItemButton component="a" href="#simple-list">
         <ListItemIcon>
           <Newspaper />
         </ListItemIcon>
         <ListItemText primary="Articles" />
       </ListItemButton>
     </ListItem>
     <ListItem disablePadding>
       <ListItemButton component="a" href="#simple-list">
         <ListItemIcon>
           <Face />
         </ListItemIcon>
         <ListItemText primary="Profile" />
       </ListItemButton>
     </ListItem>
     <ListItem disablePadding>
       <ListItemButton component="a" href="#simple-list">
         <ListItemIcon>
           <Groups />
         </ListItemIcon>
         <ListItemText primary="Groups" />
       </ListItemButton>
     </ListItem>
     <ListItem disablePadding>
       <ListItemButton component="a" href="#simple-list">
         <ListItemIcon>
           <People />
         </ListItemIcon>
         <ListItemText primary="Friends" />
       </ListItemButton>
     </ListItem>
     <ListItem disablePadding>
       <ListItemButton component="a" href="#simple-list">
         <ListItemIcon>
           <Settings />
         </ListItemIcon>
         <ListItemText primary="Settings" />
       </ListItemButton>
     </ListItem>
   </List>
  </Box>
  )
}

export default Sidebar
