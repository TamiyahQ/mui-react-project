import { Box, Container, Stack } from "@mui/material"
import Navbar from "./components/Navbar"
import Rightbar from "./components/Rightbar"
import Sidebar from "./components/Sidebar"
import Feed from "./components/Feed"
import Add from "./components/Add"

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" justifyContent="space-between" 
      spacing={2}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
      <Add />
    </Box>
  )
}

export default App
