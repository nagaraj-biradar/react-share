import { Box, Button, Modal, Typography } from "@mui/material";
import "./App.css";
import { useState } from "react";
import ShareIcon from "@mui/icons-material/Share";

import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div>
        <Button onClick={handleOpen}>
          <ShareIcon sx={{ display: { xs: "none", md: "inline" } }} />
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2, color: "black" }}
            >
              <TwitterShareButton url="www.twitter.com">
                <TwitterIcon size={32} round={true} />
              </TwitterShareButton>
            </Typography>
            <FacebookShareButton>
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <EmailShareButton>
              <EmailIcon size={32} round={true} />
            </EmailShareButton>
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default App;
