// HomePage.jsx
import React from 'react';
import { Paper, Typography, Button, Card, CardMedia, CardContent } from '@mui/material';
import ThreeScene from './ThreeContactScene';


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
        <Button className="music-btn" variant="contained" color="primary" onClick={() => window.open('https://open.spotify.com/album/0PptqapSMqfkrNGHcWKTIR?si=bAcOqcsdQAKNpvpo6kFvRA', '_blank')}>
          Listen on Spotify
        </Button>

        <Button className="music-btn"variant="contained" color="primary" onClick={() => window.open('https://music.apple.com/us/album/disco-stranger-ep/1647759571', '_blank')}>
          Listen on Apple Music
        </Button>
        {/* SVG Icons */}
        <div style={{ marginTop: '20px' }} className='svg-icons'>
          <a href="https://www.facebook.com/discostrangerband/" target="_blank" rel="noopener noreferrer">
            <img
              src="./pics/facebook.svg"
              alt="Facebook"
              style={{ height: '30px', marginRight: '10px' }}
            />
          </a>
          <a href="https://www.instagram.com/discostranger/?hl=en" target="_blank" rel="noopener noreferrer">
            <img
              src="./pics/instagram.svg"
              alt="Instagram"
              style={{ height: '30px', marginRight: '10px' }}
            />
          </a>
          <a href="https://www.youtube.com/@discostranger7103" target="_blank" rel="noopener noreferrer">
            <img
              src="./pics/youtube.svg"
              alt="YouTube"
              style={{ height: '30px', marginRight: '10px' }}
            />
          </a>
          <a href="https://open.spotify.com/artist/3SwSE7OtWzLOrc32Eq54gO?si=1l5RDObgTtOVgBzaJ-FWPw" target="_blank" rel="noopener noreferrer">
            <img
              src="./pics/spotify.svg"
              alt="Spotify"
              style={{ height: '30px', marginRight: '10px' }}
            />
          </a>
        </div>
        </div>
        
      </Paper>
        
       {/* Parent div for iframes */}
       <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>

          {/* Apple Music iframe */}
          <iframe
            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
            frameBorder="0"
            height="450"
            style={{ width: '100%', maxWidth: '98%', overflow: 'hidden', borderRadius: '10px', margin:'5px' }}
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src="https://embed.music.apple.com/us/album/disco-stranger-ep/1647759571"
          ></iframe>

          {/* Spotify iframe */}
          <iframe
            style={{ borderRadius: '12px', marginBottom: '10px' }}
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
