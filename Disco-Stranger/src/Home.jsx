// HomePage.jsx
import React from 'react';
import { Paper, Typography, Button, Card, CardMedia, CardContent } from '@mui/material';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Paper
        elevation={3}
        style={{
          backgroundImage: 'url(/pics/bluePink.jpg)', // Adjust the path based on your project structure
          backgroundSize: 'cover',
          backgroundPosition: 'center top', // Adjust the background position
          height: '500px', // Adjust the height as needed
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" gutterBottom>
          Disco Stranger EP Out Now!
        </Typography>
        <Typography variant="body1" paragraph>
          Immerse yourself in the latest sounds and stories from our new EP. A musical journey awaits!
        </Typography>
        <Button variant="contained" color="primary">
          Listen on Spotify
        </Button>
        {/* SVG Icons */}
        <div style={{ position: 'absolute',
            display: 'flex',
            marginTop: "29%",
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            width: '100%',
            padding: '10px', }}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img
              src="./pics/facebook.svg"  // Adjust the path based on your project structure
              alt="Facebook"
              style={{ height: '30px', marginRight: '10px' }}
            />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img
              src="./pics/instagram.svg"  // Adjust the path based on your project structure
              alt="Instagram"
              style={{ height: '30px', marginRight: '10px' }}
            />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <img
              src="./pics/youtube.svg"  // Adjust the path based on your project structure
              alt="YouTube"
              style={{ height: '30px', marginRight: '10px' }}
            />
          </a>
          <a href="https://www.spotify.com" target="_blank" rel="noopener noreferrer">
            <img
              src="./pics/spotify.svg"  // Adjust the path based on your project structure
              alt="Spotify"
              style={{ height: '30px', marginRight: '10px' }}
            />
          </a>
        </div>
      </Paper>

      {/* Video Section */}
      <Paper
        elevation={3}
        style={{
          padding: '20px',
          marginTop: '20px',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Watch Our Latest Videos
        </Typography>

        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          {/* First Video */}
          <Card style={{ width: '30%' }}>
            <CardMedia
              component="iframe"
              height="200"
              src="https://www.youtube.com/embed/Imyu7VLuy98"
              title="First Video"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Description for the first video
              </Typography>
            </CardContent>
          </Card>

          {/* Second Video */}
          <Card style={{ width: '30%' }}>
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
          <Card style={{ width: '30%' }}>
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
