import React from 'react';
import { Container } from 'react-bootstrap';

const SpotifyIcon = () => (
  <i className="fa fa-spotify" aria-hidden="true" style={{ color: '#1db954', fontSize: '2.5rem' }} />
);

const Footer = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: 'transparent' }}>
      <Container>
        <p className="text-white text-center mb-0">
          © 2023 Disco Stranger Music. All rights reserved.
          <SpotifyIcon className="ml-2" />
        </p>
      </Container>
    </div>
  );
};

export default Footer;
