import React, { useState } from "react";
import {
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  Dialog,
  DialogContent,
  Button,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import { shows, pastShows } from "./showinfo";

const ShowsPaper = styled(Paper)(({ theme }) => ({
  padding: "50px",
  marginTop: "-3%",
  background: `radial-gradient(circle, #1C6E8C, #2A7F62)`,
  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",

  [theme.breakpoints.down("sm")]: {
    marginTop: "-10%", 
  },
}));

const ShowsContainer = styled(Grid)(({ theme }) => ({
  marginTop: "10px",
  display: "flex",
  justifyContent: "flex-start",
}));

const ShowCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#89909F",
  color: "white",
  maxHeight: "100%",
  height: "100%", 
  overflow: "hidden",
  cursor: "pointer",
  transition: "transform 0.2s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
  // clipPath: 'polygon(0 30%, 100% 0, 100% 100%, 0 100%)',
}));

const ShowCardContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const ShowImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  maxHeight: "100%", 
  borderRadius: "0px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  objectFit: "contain",
  // Keep the aspect ratio without cropping
}));

const FullImageDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    // maxWidth: '50%', 
    // width: '80%',
    // maxHeight: '50%',
    // height: '80%',
    overflow: "hidden",
  },
}));

const FullImageDialogContent = styled(DialogContent)(({ theme }) => ({
  padding: 0,
  position: "relative",
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(1),
  right: theme.spacing(1),
}));



const showsPerPage = 4;

const Shows = () => {
  const [open, setOpen] = useState(false);
  const [selectedShow, setSelectedShow] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleCardClick = (show) => {
    setSelectedShow(show);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const indexOfLastShow = currentPage * showsPerPage;
  const indexOfFirstShow = indexOfLastShow - showsPerPage;
  const currentShows = pastShows.slice(indexOfFirstShow, indexOfLastShow);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    const pastShowsAnchor = document.getElementById("pastShows");
    if (pastShowsAnchor) {
      const topOffset = pastShowsAnchor.offsetTop;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="shows-pg">
      <ShowsPaper elevation={3}>
        <div className="custom-font-shows" >
          <h1>UPCOMING SHOWS</h1>

          {/* <h3 style={{ fontFamily: "sans-serif" }}>
            There are currently no upcoming shows.
          </h3> */}
        </div>
        {/* this is the current show container - commented out when no shows. */}
        <ShowsContainer container spacing={4} style={{marginBottom:'3%'}}>
          {shows.map((show, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <ShowCard onClick={() => handleCardClick(show)}>
                <ShowImage src={show.image} alt={`Band Picture ${index}`} />
                <ShowCardContent>
                  <Typography variant="h6">{show.title}</Typography>
                  <Typography>Date: {show.date}</Typography>
                  <Typography>Time: {show.time}</Typography>
                  <Typography>Price: {show.price}</Typography>
                </ShowCardContent>
              </ShowCard>
            </Grid>
          ))}
        </ShowsContainer>

        <div className="custom-font-shows">
          <h1>PAST SHOWS</h1>
        </div>

        {/* Anchor point for top of past shows section */}
        <div id="pastShows" />

        <ShowsContainer container spacing={4}>
          {currentShows.map((show, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <ShowCard onClick={() => handleCardClick(show)}>
                <ShowImage src={show.image} alt={`Band Picture ${index}`} />
                <ShowCardContent>
                  <Typography variant="h6">{show.title}</Typography>
                  <Typography>Date: {show.date}</Typography>
                  <Typography>Time: {show.time}</Typography>
                  <Typography>Price: {show.price}</Typography>
                </ShowCardContent>
              </ShowCard>
            </Grid>
          ))}
        </ShowsContainer>

        {/* Pagination */}
        <Grid container justifyContent="center" style={{ marginTop: "20px" }}>
          {[...Array(Math.ceil(pastShows.length / showsPerPage)).keys()].map(
            (pageNumber) => (
              <Button
                key={pageNumber + 1}
                onClick={() => paginate(pageNumber + 1)}
                style={{ color: "rgb(237, 102, 87)" }}
              >
                {pageNumber + 1}
              </Button>
            )
          )}
        </Grid>
      </ShowsPaper>

      <FullImageDialog open={open} onClose={handleClose}>
        <FullImageDialogContent>
          <CloseButton aria-label="close" onClick={handleClose}>
            <CloseIcon />
          </CloseButton>
          <ShowImage src={selectedShow?.image} alt={`Band Picture`} />
        </FullImageDialogContent>
      </FullImageDialog>
    </div>
  );
};

export default Shows;
