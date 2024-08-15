import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from "@mui/material"
import { Add as AddIcon, AddLink, DriveFolderUpload, InsertEmoticon, PersonAdd, PhotoCameraBack} from "@mui/icons-material"
import { useState } from "react"


const StyledModal =styled(Modal)({
  display:"flex",
  alignItems:"center",
  justifyContent:"center"
})

const UserBox =styled(Box)({
  display:"flex",
  alignItems:"center",
  gap:"10px",
  margin:"10px"
})

const Add = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
     <Tooltip onClick={e => setOpen(true)}
      title="Add Post"
      style={{
        position: "fixed",
        bottom: 20,
        left: window.innerWidth < 960 ? '50%' : 30,
        transform: window.innerWidth < 960 ? 'translateX(-50%)' : 'none', 
        zIndex: 1000,
      }}>

     <Fab aria-label="add" sx={{backgroundColor:"black", color:"white"}}>
      <AddIcon />
     </Fab>
    </Tooltip>
    <StyledModal
      open={open}
      onClose={e => setOpen(true)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
    <Box width={400} height={250} bgcolor={"white"} p={3} borderRadius={5}>
      <Typography variant="h6" color={"grey"}>
        Create post
      </Typography>
      <UserBox>
        <Avatar
        src=".\images\pexels-iamikeee-2709388.jpg"
        sx={{width:30, height:30}}
        />
        <Typography fontWeight={500} variant="span">
          Casie Clark 
        </Typography>
      </UserBox>
      <TextField
        sx={{width:"100%"}}
        id="standard-multiline-static"
        multiline
        rows={2}
        placeholder="What's new?"
        variant="standard"
        />
        <Stack direction={"row"} gap={2} mt={2} mb={3}>
          <InsertEmoticon/>
          <PhotoCameraBack/>
          <DriveFolderUpload/>
          <AddLink/>
        </Stack>
        <ButtonGroup sx={{border: 'none', '& .MuiButtonGroup-grouped': {borderColor:"white",}}} 
          bgcolor="white" fullWidth variant="contained" aria-label="Basic button group">
          <Button sx={{backgroundColor: "black", '&:hover': { backgroundColor: "darkgray", }}}>Post</Button>
          <Button sx={{width:"100px", backgroundColor:"black", '&:hover': { backgroundColor: "darkgray", }}}>
            <PersonAdd/>
          </Button>
        </ButtonGroup>
    </Box>
    </StyledModal>
    </>
  )
}

export default Add
