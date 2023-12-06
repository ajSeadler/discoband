import React from 'react';
import { Container, Paper, Typography, Link, Grid } from '@mui/material';
import ThreeContactScene from './ThreeContactScene';
const Contact = () => {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: '30px', marginTop: '20px', borderRadius: '15px' }}>
        {/* <ThreeContactScene /> */}
        <Typography variant="h4" gutterBottom>
          CONTACT
        </Typography>
        
        <Typography variant="body1" paragraph>
          Want to book us? Reach out!
        </Typography>
        <Typography variant="h6" style={{ marginTop: '0px', display: 'flex', alignItems: 'center', marginBottom:'2%' }}>
          <img src="pics/email.png" alt="Email" style={{ height: '30px', marginRight: '5px', borderRadius: '5px' }} />
          <Link href="mailto:discostrangermusic@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>
            discostrangermusic@gmail.com
          </Link>
        </Typography>
        {/* Social Links */}
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="pics/facebook.svg" alt="Facebook" style={{ height: '40px', borderRadius: '10px' }} />
            </Link>
          </Grid>
          <Grid item>
            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="pics/instagram.svg" alt="Instagram" style={{ height: '40px', borderRadius: '10px' }} />
            </Link>
          </Grid>
          <Grid item>
            <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <img src="pics/youtube.svg" alt="YouTube" style={{ height: '40px', borderRadius: '10px' }} />
            </Link>
          </Grid>
          <Grid item>
            <Link href="https://www.spotify.com" target="_blank" rel="noopener noreferrer">
              <img src="pics/spotify.svg" alt="Spotify" style={{ height: '40px', borderRadius: '10px' }} />
            </Link>
          </Grid>
        </Grid>

        {/* Email Address */}
        {/* <Typography variant="h6" style={{ marginTop: '20px', display: 'flex', alignItems: 'center' }}>
          <img src="pics/email.png" alt="Email" style={{ height: '30px', marginRight: '10px', borderRadius: '5px' }} />
          <Link href="mailto:discostrangermusic@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>
            discostrangermusic@gmail.com
          </Link>
        </Typography> */}
      </Paper>
    </Container>
  );
};

export default Contact;
