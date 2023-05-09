import {
  Add,
  AddLocationAlt,
  EmojiEmotions,
  GifBox,
  PersonAddAlt1,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Divider,
  Fab,
  Modal,
  Stack,
  Tooltip,
  Typography,
  styled,
  TextField,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { green, purple, yellow } from "@mui/material/colors";
import React, { useState } from "react";

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.main,
  color: theme.palette.text,
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  minHeight: "250px",
  borderRadius: "20px",
  padding: "1rem",
  boxShadow:
    theme.palette.mode === "dark"
      ? "1px 1px 5px #1b74e4, -1px -1px 5px #1b74e4"
      : "none",
  width: useMediaQuery(theme.breakpoints.down("md")) ? "90%" : "40%",
}));

const StyledButton = styled("button")(({ theme }) => ({
  width: "100%",
  padding: ".5rem",
  backgroundColor: "#1b74e4",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  "&:disabled": {
    backgroundColor: theme.palette.sec,
    color: theme.palette.text,
  },
}));

const CreatePost = () => {
  const [open, setOpen] = useState(false);
  const [disapled, setDisapled] = useState(true);

  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)}>
        <StyledBox>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            textAlign="center"
            pb={1}
            color="text"
          >
            Create post
          </Typography>
          <Divider />
          <Stack direction="row" alignItems="center" gap={1} mt={2}>
            <Avatar
              sx={{ color: "text", width: 40, height: 40 }}
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/1.jpg"
            />
            <Typography variant="body1" color="">
              Joe Doe
            </Typography>
          </Stack>
          <TextField
            onChange={() => setDisapled(false)}
            sx={{ width: "100%", mt: 3 }}
            rows={4}
            placeholder="What on your mind, Joe?"
            variant="filled"
            multiline
          />

          <Stack direction="row" pt={1} justifyContent="flex-end">
            <IconButton>
              <PersonAddAlt1 sx={{ color: purple[500] }} />
            </IconButton>
            <IconButton>
              <EmojiEmotions sx={{ color: yellow[800] }} />
            </IconButton>
            <IconButton>
              <GifBox sx={{ color: green[500] }} />
            </IconButton>
            <IconButton>
              <AddLocationAlt sx={{ color: "blue" }} />
            </IconButton>
          </Stack>
          <StyledButton
            disabled={disapled}
            onClick={() => {
              setOpen(false);
              setDisapled(true);
            }}
          >
            Post
          </StyledButton>
        </StyledBox>
      </Modal>

      <Tooltip
        onClick={() => setOpen(true)}
        title="Add"
        sx={{
          position: "fixed",
          bottom: 40,
          left: {
            xs: "45%",
            sm: 100,
          },
          bgcolor: "blue",
          color: "#fff",
          "&:hover": {
            bgcolor: "blue",
          },
        }}
      >
        <Fab>
          <Add />
        </Fab>
      </Tooltip>
    </>
  );
};

export default CreatePost;
