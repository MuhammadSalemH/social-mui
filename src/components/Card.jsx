import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Checkbox } from "@mui/material";
import {
  Bookmark,
  BookmarkBorder,
  Favorite,
  FavoriteBorder,
} from "@mui/icons-material";

const CardComponent = ({ avatar, postImage }) => {
  return (
    <Card
      sx={{ width: { xs: "90%", sm: "70%" }, bgcolor: "main", color: "text" }}
    >
      <CardHeader
        avatar={
          <Avatar
            alt="Remy Sharp"
            src={avatar}
            sx={{ width: 40, height: 40 }}
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="300"
        image={postImage}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite color="error" />}
          />
          <Typography>Like</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Checkbox icon={<BookmarkBorder />} checkedIcon={<Bookmark />} />
          <Typography>Bookmark</Typography>
        </Box>
        <IconButton sx={{}}>
          <ShareIcon />
          <Typography sx={{ ml: "1rem" }}>Share</Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
