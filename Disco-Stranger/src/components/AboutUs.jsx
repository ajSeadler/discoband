// AboutUs.jsx
import React from 'react';
import { Paper, Typography, Button, Grid, useTheme } from '@mui/material';
import { styled } from '@mui/system';

// Styled components for enhanced styling
const AboutUsPaper = styled(Paper)(({ theme }) => ({
  padding: '40px',
  marginTop: '20px',
  backgroundColor: '#f0f0f0', // Light gray background
  boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden', // Hide overflowing box shadow
  position: 'relative',
}));

const ImageContainer = styled(Grid)(({ theme }) => ({
  marginTop: '20px',
  position: 'relative',
  overflow: 'hidden', // Hide overflowing images
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const images = ['./pics/greenblue.jpg', './pics/bluePink.jpg']; // Add more image paths if needed

const AboutUs = () => {
  const theme = useTheme();

  return (
    <AboutUsPaper elevation={3} style={{backgroundColor:'grey'}}>
      <Grid container spacing={4}>
        {/* Left Column with Text */}
        <Grid item xs={12} md={6}>
        <Typography variant="h4" gutterBottom style={{ color: "#fff" }}>
  ABOUT US
</Typography>

          <img
            src="/pics/IMG_2050.JPG"
            alt="Blue Pink Image"
            style={{
              width: '100%', // Adjust the width as needed
              height: 'auto',
              borderRadius: '8px',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              marginBottom: '20px',
            }}
          />
          <Typography variant="body1" paragraph style={{color:"white"}}>
            After years of band attempts and projects dating back to high school days, a career in music for the members
            of Disco Stranger didn’t look so promising. After a few long months and a little bit of luck, the origin of
            the group was born.
          </Typography>
          <Typography variant="body1" paragraph style={{color:"white"}}>
            Disco Stranger originally started out as a cover band under the name "Steve French and Company" until they
            heard one too many “PLAY KID ROCK!” requests and decided to write their own original material. The band name
            is an ode to the Eagles and their song “Disco Strangler”, a band they covered quite a bit and grew up on. 
          </Typography>
          <Typography variant="h6" gutterBottom style={{ color: "rbg(204,204,204)" }}>
  Meet the incredible talents that form the heart and soul of Disco Stranger:
</Typography>

<ul>
  <li>
    <Typography variant="body1" style={{color:"white"}}>
      <strong>Drew Stogsdill:</strong> Lead Vocals and Rhythm Guitar
    </Typography>
  </li>
  <li>
    <Typography variant="body1" style={{color:"white"}}>
      <strong>AJ Seadler:</strong> Lead Guitar
    </Typography>
  </li>
  <li>
    <Typography variant="body1" style={{color:"white"}}>
      <strong>Colton Walkup:</strong> Bass
    </Typography>
  </li>
  <li>
    <Typography variant="body1" style={{color:"white"}}>
      <strong>Nathaniel Lee:</strong> Drums
    </Typography>
  </li>
</ul>

{/* <Typography variant="body1" paragraph style={{color:"white"}}>
  Drew, the voice that resonates with emotion and skill, leading the melody and setting the rhythm. Aj, the maestro of strings, crafting mesmerizing tunes with every strum. Colton, the anchor, grounding the music with deep and pulsating bass lines. Nathaniel, the heartbeat, infusing life into the sound with dynamic and rhythmic drumming.
</Typography> */}

<Typography variant="body1" style={{color:"white"}}>
  Together, they are more than a band; they are the architects of an auditory journey. Get ready to experience the magic of Disco Stranger.
</Typography>
        </Grid>

        {/* Right Column with Images */}
        <ImageContainer item xs={12} md={6} container justifyContent="c" style={{marginTop:'3.5%'}}>
          {images.map((image, index) => (
            <Grid item key={index}>
              <img
                src={image}
                alt={`Image ${index}`}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '100%', // Adjust the maximum width based on your design
                  borderRadius: '8px',
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.1)', // Scale up on hover
                  },
                }}
              />
            </Grid>
          ))}
        </ImageContainer>
      </Grid>
    </AboutUsPaper>
  );
};

export default AboutUs;
