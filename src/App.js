import React, { useEffect, useState } from "react";
import { Box, styled } from "@mui/material";

import Theme from "./components/Theme";
import Appbar from "./components//Appbar";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import Feed from "./components/Feed";
import CreatePost from "./components/CreatePost";

const LayoutBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  gap: "20px",
  backgroundColor: theme.palette.sec,
  padding: "1rem",
  position: "relative",
}));

const App = () => {
  const [mode, setMode] = useState("light");

  const modeToggleHandler = () => {
    localStorage.setItem("mode", mode);
    setMode((preState) => (preState === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (localStorage.getItem("mode") === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  }, [mode]);

  return (
    <Theme mode={mode}>
      <Appbar />
      <LayoutBox>
        <LeftBar modeToggler={modeToggleHandler} />
        <Feed />
        <RightBar />
        <CreatePost />
      </LayoutBox>
    </Theme>
  );
};

export default App;
