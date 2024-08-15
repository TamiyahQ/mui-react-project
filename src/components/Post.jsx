import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'


const Post = () => {
  return (
    <Box>
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "lightgrey" }} aria-label="code">
            <img src=".\images\pexels-iamikeee-2709388.jpg" alt="profile" width={"50px"} />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Casie Clark"
        subheader="August 16, 2024"
      />
      <CardMedia
        component="img"
        height="20%"
        image=".\images\pexels-markusspiske-965345.jpg"
        alt="Code"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive project is built by me, to showcase my skills in this particular domain. 
          This project helped me gain more experience, which is going to improve my career status.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "pink" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "lightgrey" }} aria-label="code">
            <img src=".\images\pexels-stefanstefancik-91227.jpg" alt="profile" width={"50px"} />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="John Doe"
        subheader="August 29, 2024"
      />
      <CardMedia
        component="img"
        height="20%"
        image=".\images\pexels-digitalbuggu-374559.jpg"
        alt="Code"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Check out this latest article!
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "pink" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
    </Box>
  )
}

export default Post
