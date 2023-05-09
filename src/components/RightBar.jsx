import {
  Box,
  styled,
  useMediaQuery,
  Typography,
  Avatar,
  AvatarGroup,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from "@mui/material";
import React from "react";
import CardsList from "./CardsList";

const RightBox = styled(Box)(({ theme }) => ({
  color: "text",
  flex: 2,
  display: useMediaQuery(theme.breakpoints.down("sm")) ? "none" : "flex",
}));

const ContainerBox = styled(Box)(({ theme }) => ({
  color: "text",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "1rem",
}));

const RightBar = () => {
  return (
    <RightBox>
      <Box position="fixed">
        <ContainerBox>
          <Typography variant="h6" color="text" mb={1} sx={{ color: "blue" }}>
            Online friends
          </Typography>
          <AvatarGroup max={5}>
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/1.jpg"
            />
            <Avatar
              alt="Travis Howard"
              src="https://mui.com/static/images/avatar/2.jpg"
            />
            <Avatar
              alt="Cindy Baker"
              src="https://mui.com/static/images/avatar/3.jpg"
            />
            <Avatar
              alt="Agnes Walker"
              src="https://mui.com/static/images/avatar/4.jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://mui.com/static/images/avatar/5.jpg"
            />
            <Avatar
              alt="Cindy Baker"
              src="https://mui.com/static/images/avatar/3.jpg"
            />
          </AvatarGroup>
        </ContainerBox>
        <ContainerBox>
          <Typography variant="h6" color="text" mb={1} sx={{ color: "blue" }}>
            Latest Photos
          </Typography>
          <CardsList />
        </ContainerBox>
        <ContainerBox>
          <Typography
            variant="h6"
            color="text"
            mb={1}
            mt={-10}
            sx={{ color: "blue" }}
          >
            Latest Conversation
          </Typography>
          <List sx={{ width: "100%", maxWidth: 360, bgcolor: "main" }}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src="https://mui.com/static/images/avatar/1.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                sx={{ color: "text" }}
                primary="Brunch this weekend?"
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Travis Howard"
                  src="https://mui.com/static/images/avatar/2.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                sx={{ color: "text" }}
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </ContainerBox>
      </Box>
    </RightBox>
  );
};

export default RightBar;
