// NavBar.jsx
import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <AppBar position="static" sx={{ background: '#333' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Logo image */}
        <img
          src="/pics/discologo.PNG"  // Adjust the path based on your project structure
          alt="Your Band Logo"
          style={{ height: '40px' }}
        />
        {/* Navigation buttons */}
        <div>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/shows">
            Shows
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
