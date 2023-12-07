// HomePage.jsx
import React, { useState } from 'react';
import { Paper, Button, Typography, Card, CardMedia, CardContent } from '@mui/material';
import { styled } from '@mui/system';

const HeroSection = styled(Paper)(({ isHovered, mouseX, mouseY }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
  textAlign: 'center',
  padding: '20%',
  background: `radial-gradient(circle at ${mouseX}px ${mouseY}px, #2196F3, #E91E63)`, // Dynamic radial gradient
  transition: 'filter 0.5s ease',
  filter: isHovered ? 'blur(0px)' : 'blur(0)',
}));

const ImageContainer = styled('div')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

const Images = styled('div')({
  display: 'flex',
  gap: '10px',
  flexDirection: 'row', // Set to 'row' for left-to-right arrangement
  justifyContent: 'center', // Optional: adjust as needed
  alignItems: 'center', // Optional: adjust as needed
  flexWrap: 'wrap', // Clear flexWrap for 1x4 arrangement on mobile
});

const Image = styled('img')({
  width: '100px', // Adjust the size as needed
  height: '100px',
  borderRadius: '50%', // Make it rounded
  '@media (max-width: 768px)': {
    width: '60px', // Adjust the size for mobile devices
    height: '60px',
  },
});

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const images = ['/pics/Nat.jpg', '/pics/drewhead.jpg', '/pics/col.jpg', '/pics/aj.jpg'];

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setMousePos({ x: clientX, y: clientY });
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        elevation={3}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        isHovered={isHovered}
        mouseX={mousePos.x}
        mouseY={mousePos.y}
      >
        <ImageContainer>
          <Images>
            {/* Render 4 fixed images */}
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
              />
            ))}
          </Images>
        </ImageContainer>

        <div className="hero-text-fade-in">
          {/* <Button
            className="music-btn"
            variant="contained"
            color="primary"
            onClick={() =>
              window.open(
                'https://open.spotify.com/album/0PptqapSMqfkrNGHcWKTIR?si=bAcOqcsdQAKNpvpo6kFvRA',
                '_blank'
              )
            }
          >
            Listen on Spotify
          </Button>

          <Button
            className="music-btn"
            variant="contained"
            color="primary"
            onClick={() =>
              window.open(
                'https://music.apple.com/us/album/disco-stranger-ep/1647759571',
                '_blank'
              )
            }
          >
            Listen on Apple Music
          </Button> */}
        </div>
      </HeroSection>
       {/* Parent div for iframes */}
       <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>

          {/* Apple Music iframe */}
          <iframe
            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
            frameBorder="0"
            height="450"
            style={{ width: '100%', maxWidth: '98%', overflow: 'hidden', borderRadius: '0px', margin:'5px' }}
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src="https://embed.music.apple.com/us/album/disco-stranger-ep/1647759571"
          ></iframe>

          {/* Spotify iframe */}
          <iframe
            style={{ borderRadius: '0px', marginBottom: '10px' }}
            src="https://open.spotify.com/embed/artist/3SwSE7OtWzLOrc32Eq54gO?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>

          
        </div>
      

      {/* Video Section */}
      <Paper className='video-section'
        elevation={3}
        style={{
          padding: '20px',
          marginTop: '20px',
          backgroundColor:'#333'
        }}
      >
        <Typography variant="h4" gutterBottom style={{color:'white'}}>
          Watch Our Latest Videos
        </Typography>

        <div className='video-home'>
          {/* First Video */}
          <Card className='video-card'>
            <CardMedia
              component="iframe"
              height="200"
              src="https://www.youtube.com/embed/Imyu7VLuy98"
              title="First Video"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
              Disco Stranger - LIVE @ Speakeasy / Special Jam
              </Typography>
            </CardContent>
          </Card>

          {/* Second Video */}
          <Card  className='video-card'>
            <CardMedia
              component="iframe"
              height="200"
              src="https://www.youtube.com/embed/SOe3YmCJxy0"
              title="Second Video"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Disco Stranger - The Less I Think (Lyric video)
              </Typography>
            </CardContent>
          </Card>

          {/* Third Video */}
          <Card className='video-card'>
            <CardMedia
              component="iframe"
              height="200"
              src="https://www.youtube.com/embed/abJ0IQIawzo"
              title="Third Video"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Disco Stranger - Evil, In a Sense (Music Video)
              </Typography>
            </CardContent>
          </Card>
        </div>
      </Paper>
    </div>
  );
};

export default Home;
