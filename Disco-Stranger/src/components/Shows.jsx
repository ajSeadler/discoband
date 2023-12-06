import React, { useState } from 'react';
import {
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';

const ShowsPaper = styled(Paper)(({ theme }) => ({
  padding: '50px',
  marginTop: '20px',
  backgroundColor: '#333', // Light gray background
  boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
}));

const ShowsContainer = styled(Grid)(({ theme }) => ({
  marginTop: '20px',
  display: 'flex',
  justifyContent: 'center',
}));

const ShowCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor:'#f5f5f5',
  maxHeight:'100%',
  height: '100%', // Set a fixed height for the card
  overflow: 'hidden',
  cursor: 'pointer',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  // clipPath: 'polygon(0 30%, 100% 0, 100% 100%, 0 100%)',
}));

const ShowCardContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const ShowImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  maxHeight: '100%', // Ensure the image doesn't exceed the dialog height
  borderRadius: '0px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  objectFit: 'contain',
 // Keep the aspect ratio without cropping
}));

const FullImageDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    // maxWidth: '50%', // Adjust the maximum width as needed
    width: '50%',
    // maxHeight: '50%',
    height: '50%',
    overflow: 'hidden',
  },
}));


const FullImageDialogContent = styled(DialogContent)(({ theme }) => ({
  padding: 0,
  position: 'relative',
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(1),
  right: theme.spacing(1),
}));



const shows = [
  {
    title: 'CHECK BACK SOON!',
    // date: 'December 2nd, 2023',
    // time: '8:00 - 12:00 PM',
    // price: '$5.00 ENTRY',
    image: '/pics/drewncolton.JPG',
  },
  // Add more upcoming shows if needed
];

const pastShows = [
  {
    title: '51 St. Speakeasy',
    date: 'December 2nd, 2023',
    time: '8:00 - 12:00 PM',
    price: '$5.00 ENTRY',
    image: '/pics/dec2up.png',
  },
  {
    title: 'Live Room Fridays @ ACM',
    date: 'September 15, 2023',
    time: '7:00 - 10:00 PM',
    price: '$10.00 ENTRY - FREE w/ UCO ID',
    image: 'pics/DISCO STRANGER1.jpg',
  },
  {
    title: 'Carnival Gods Tour w/ FOX ROYALE',
    date: '11-8-22',
    time: '7:30 PM',
    price: '$15.00',
    image: 'pics/11-8-22.jpg',
  },
  {
    title: 'Mosaic Mingle',
    date: '12-10-22',
    time: '2:00 - 4:00 PM',
    price: 'FREE',
    image: 'pics/10-10-22.jpg',
  },
  {
    title: '51st Street Speakeasy (EP RELEASE SHOW)',
    date: '9-30-22',
    time: '9:00PM',
    price: '$5.00',
    image: 'pics/9-30-22.jpg',
  },
  {
    title: '51st Street Speakeasy',
    date: '8-5-22',
    time: '9:00PM',
    price: '$5.00',
    image: 'pics/8-5-22.jpg',
  },
  {
    title: 'Beer City Music Hall',
    date: '6-11-22',
    time: '8PM',
    price: '$10.00',
    image: 'pics/6-11-22.jpg',
  },
  {
    title: '51st Street Speakeasy',
    date: '3-25-22',
    time: '9:00PM',
    price: '$5.00',
    image: 'pics/3-25-22.jpg',
  },
  {
    title: 'VZD\'s',
    date: '12-10-21',
    time: '9:00PM',
    price: 'FREE',
    image: 'pics/12-10-21.jpg',
  },
  {
    title: '51st Speakeasy',
    date: '11-6-21',
    time: '9:00PM',
    price: '$5.00',
    image: 'pics/11-6-21.jpg',
  },
  {
    title: '51st Street Speakeasy',
    date: '9-3-21',
    time: '9:00PM',
    price: '$5.00',
    image: 'pics/9-3-21.jpg',
  },
  // Add more past shows if needed
];

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
    const pastShowsAnchor = document.getElementById('pastShows');
    if (pastShowsAnchor) {
      const topOffset = pastShowsAnchor.offsetTop;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth', // Optional: Use smooth scrolling
      });
    }
  };

  return (
    <div>
      <ShowsPaper elevation={3}>
        <Typography variant="h4" gutterBottom style={{ color: 'white' }}>
          UPCOMING SHOWS
        </Typography>
        <ShowsContainer container spacing={4}>
          {shows.map((show, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <ShowCard onClick={() => handleCardClick(show)}>
                <ShowImage src={show.image} alt={`Band Picture ${index}`} />
                <ShowCardContent>
                  <Typography variant="h6">{show.title}</Typography>
                </ShowCardContent>
              </ShowCard>
            </Grid>
          ))}
        </ShowsContainer>
  
        <Typography variant="h4" gutterBottom style={{ color: 'white', marginTop: '10px' }}>
          PAST SHOWS
        </Typography>
  
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
        <Grid container justifyContent="center" style={{ marginTop: '20px', }}>
          {[...Array(Math.ceil(pastShows.length / showsPerPage)).keys()].map((pageNumber) => (
            <Button key={pageNumber + 1} onClick={() => paginate(pageNumber + 1)} style={{color:'rgb(237, 102, 87)'}}>
              {pageNumber + 1}
            </Button>
          ))}
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