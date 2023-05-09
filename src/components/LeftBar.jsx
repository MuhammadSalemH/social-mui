import { useTheme } from "@emotion/react";
import {
  Brightness4,
  Brightness7,
  ContactEmergency,
  Groups,
  Home,
  PagesRounded,
  Person,
  Settings,
  Shop2,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  useMediaQuery,
} from "@mui/material";

const items = [
  { icon: <Home />, text: "Home" },
  { icon: <PagesRounded />, text: "Pages" },
  { icon: <Groups />, text: "Groups" },
  { icon: <Shop2 />, text: "Marketplace" },
  { icon: <Person />, text: "Friends" },
  { icon: <Settings />, text: "Settings" },
  { icon: <ContactEmergency />, text: "Contact" },
];

const LeftBox = styled(Box)(({ theme }) => ({
  color: "text",
  flex: 1,
  display: useMediaQuery(theme.breakpoints.down("sm")) ? "none" : "flex",
}));

const LeftBar = ({ modeToggler }) => {
  const theme = useTheme();
  return (
    <LeftBox>
      <Box sx={{ position: "fixed" }}>
        <List>
          {items.map((ele, idx) => (
            <ListItem disablePadding key={idx}>
              <ListItemButton sx={{ color: "text" }}>
                <ListItemIcon sx={{ color: "blue" }}>{ele.icon}</ListItemIcon>
                <ListItemText primary={ele.text} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton
              sx={{ color: "text" }}
              onClick={() => modeToggler()}
            >
              <ListItemIcon
                sx={{
                  color: theme.palette.mode === "light" ? "#000" : "#fff",
                }}
              >
                {theme.palette.mode === "dark" ? (
                  <Brightness7 />
                ) : (
                  <Brightness4 />
                )}
              </ListItemIcon>
              <ListItemText
                primary={
                  theme.palette.mode === "light" ? "Dark mode" : "Light mode"
                }
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </LeftBox>
  );
};

export default LeftBar;
