import { Box } from "@mui/material";
import CardComponent from "./Card";
import styled from "@emotion/styled";

const FeedBox = styled(Box)(({ theme }) => ({
  flex: 4,
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "10px",
}));

const Feed = () => {
  return (
    <FeedBox>
      <CardComponent
        avatar="https://mui.com/static/images/avatar/2.jpg"
        postImage="https://mui.com/static/images/cards/paella.jpg"
      />
      <CardComponent
        avatar="https://mui.com/static/images/avatar/3.jpg"
        postImage="https://mui.com/static/images/cards/contemplative-reptile.jpg"
      />
      <CardComponent
        avatar="https://mui.com/static/images/avatar/4.jpg"
        postImage="https://mui.com//static/images/cards/live-from-space.jpg"
      />
      <CardComponent
        avatar="https://mui.com/static/images/avatar/3.jpg"
        postImage="https://mui.com/static/images/cards/contemplative-reptile.jpg"
      />
    </FeedBox>
  );
};

export default Feed;
