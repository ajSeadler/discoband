import React from 'react';
import { Container, Paper, Typography } from '@mui/material';

const SpotifyIcon = () => (
  <i className="fa fa-spotify" aria-hidden="true" style={{ color: '#1db954', fontSize: '2.5rem' }} />
);

const Footer = () => {
  return (
    <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#333', }}>
      <Container maxWidth="md">
        <Typography variant="body2" align="center" style={{ color: 'white', marginTop: '0px' }}>
          © 2023 Disco Stranger Music. All rights reserved.
        </Typography>
      </Container>
    </Paper>
  );
};

export default Footer;
