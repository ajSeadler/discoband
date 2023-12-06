import React from 'react';
import { Container, Paper, Typography, Grid } from '@mui/material';
import ThreeScene from './ThreeContactScene';

const SpotifyIcon = () => (
  <i className="fa fa-spotify" aria-hidden="true" style={{ color: '#1db954', fontSize: '2.5rem' }} />
);

const Footer = () => {
  return (
    <Paper elevation={3} style={{ padding: '20px', marginTop: '20px', backgroundColor: '#282c34' }}>
      <Container maxWidth="md">
        {/* <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-facebook" aria-hidden="true" style={{ color: '#61dafb', fontSize: '2.5rem' }} />
            </a>
          </Grid>
          <Grid item>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-instagram" aria-hidden="true" style={{ color: '#e4405f', fontSize: '2.5rem' }} />
            </a>
          </Grid>
          <Grid item>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-youtube" aria-hidden="true" style={{ color: '#ff0000', fontSize: '2.5rem' }} />
            </a>
          </Grid>
          <Grid item>
            <a href="https://www.spotify.com" target="_blank" rel="noopener noreferrer">
              <SpotifyIcon />
            </a>
          </Grid>
        </Grid> */}
        <Typography variant="body2" align="center" style={{ color: 'white', marginTop: '10px' }}>
          © 2023 Disco Stranger Music. All rights reserved.
        </Typography>
        {/* <ThreeScene /> */}
      </Container>
    </Paper>
  );
};

export default Footer;
