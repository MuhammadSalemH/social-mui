import {
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
  styled,
  Box,
  InputBase,
  Badge,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import { Mail, NotificationAdd } from "@mui/icons-material";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  minHeight: "64px",
}));

const Heading = styled("h1")(({ theme }) => ({
  color: theme.palette.blue,
  fontSize: useMediaQuery(theme.breakpoints.down("md")) ? "20px" : "30px",
  fontWeight: "900",
  flex: 1,
}));

const Title = styled("h4")(({ theme }) => ({
  color: theme.palette.text,
  fontSize: "14px",
  fontWeight: "900",
}));

const Search = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.sec,
  width: "20%",
  padding: "0 10px",
  borderRadius: "20px",
  color: theme.palette.text,
  display: useMediaQuery(theme.breakpoints.down("sm")) ? "none" : "block",
}));

const Icons = styled(Box)(({ theme }) => ({
  color: theme.palette.text,
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  alignItems: "center",
  gap: "20px",
  display: useMediaQuery(theme.breakpoints.down("sm")) ? "none" : "flex",
}));

const UserBox = styled(Box)(({ theme }) => ({
  alignItems: "center",
  gap: "10px",
  display: useMediaQuery(theme.breakpoints.down("sm")) ? "flex" : "none",
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  color: theme.palette.text,
}));

const Appbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar sx={{ bgcolor: "main" }}>
        <Heading>Social-MUI</Heading>
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={2} color="error">
            <Mail color="text" />
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationAdd color="text" />
          </Badge>
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
            sx={{ width: 40, height: 40 }}
            onClick={() => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={() => setOpen(true)}>
          <Title>Remy Sharp</Title>
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
            sx={{ width: 40, height: 40 }}
          />
        </UserBox>
      </StyledToolbar>
      <Menu
        anchorEl={open}
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <StyledMenuItem onClick={() => setOpen(false)}>Profile</StyledMenuItem>
        <StyledMenuItem onClick={() => setOpen(false)}>
          My account
        </StyledMenuItem>
        <StyledMenuItem onClick={() => setOpen(false)}>Logout</StyledMenuItem>
      </Menu>
    </AppBar>
  );
};

export default Appbar;
