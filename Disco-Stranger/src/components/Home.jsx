// HomePage.jsx
import React from 'react';
import { Paper, Typography, Button, Card, CardMedia, CardContent } from '@mui/material';


const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Paper className='hero-section'
        elevation={3}
        style={{
        //   backgroundImage: 'url(/pics/bluePink.jpg)',
        //   backgroundSize: 'cover',
        //   backgroundPosition: 'center top',
        //   height: '500px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          textAlign: 'center',
          padding: '20px',
          
        }}
      >
        <div className="hero-text">
        <Typography variant="h4" gutterBottom className='hero-text'> 
          Disco Stranger EP Out Now!
        </Typography>
        <Typography variant="body1" paragraph>
          Immerse yourself in the latest sounds and stories from our new EP
        </Typography>
        <Button variant="contained" color="primary">
          Listen on Spotify
        </Button>
        {/* SVG Icons */}
        <div style={{ marginTop: '20px' }} className='svg-icons'>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img
              src="./pics/facebook.svg"
              alt="Facebook"
              style={{ height: '30px', marginRight: '10px' }}
            />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img
              src="./pics/instagram.svg"
              alt="Instagram"
              style={{ height: '30px', marginRight: '10px' }}
            />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <img
              src="./pics/youtube.svg"
              alt="YouTube"
              style={{ height: '30px', marginRight: '10px' }}
            />
          </a>
          <a href="https://www.spotify.com" target="_blank" rel="noopener noreferrer">
            <img
              src="./pics/spotify.svg"
              alt="Spotify"
              style={{ height: '30px', marginRight: '10px' }}
            />
          </a>
        </div>
        </div>
      </Paper>
      <iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/artist/3SwSE7OtWzLOrc32Eq54gO?utm_source=generator&theme=0"
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>

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

        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          {/* First Video */}
          <Card style={{ width: '30%' }} className='video-card'>
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
          <Card style={{ width: '30%' }} className='video-card'>
            <CardMedia
              component="iframe"
              height="200"
              src="https://www.youtube.com/embed/SOe3YmCJxy0"
              title="Second Video"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Description for the second video
              </Typography>
            </CardContent>
          </Card>

          {/* Third Video */}
          <Card style={{ width: '30%' }} className='video-card'>
            <CardMedia
              component="iframe"
              height="200"
              src="https://www.youtube.com/embed/abJ0IQIawzo"
              title="Third Video"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Description for the third video
              </Typography>
            </CardContent>
          </Card>
        </div>
      </Paper>
    </div>
  );
};

export default Home;
