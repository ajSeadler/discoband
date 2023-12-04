import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Drawer, List, ListItem, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <AppBar position="static" style={{ backgroundColor: '#2196f3' }}>
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography component={Link} to="/" variant="h6" style={{ fontSize: 24, fontWeight: 'bold', textDecoration: 'none', color: 'white' }}>
            Your Logo
          </Typography>
          <div>
            <Button component={Link} to="/" color="inherit" style={{ color: 'white' }}>
              Home
            </Button>
            <Button component={Link} to="/about" color="inherit" style={{ color: 'white' }}>
              About
            </Button>
            <Button component={Link} to="/shows" color="inherit" style={{ color: 'white' }}>
              Shows
            </Button>
            <Button component={Link} to="/contact" color="inherit" style={{ color: 'white' }}>
              Contact
            </Button>
          </div>
          <IconButton onClick={toggleDrawer} color="inherit" style={{ color: 'white', display: { xs: 'block', md: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Button onClick={toggleDrawer} color="inherit" style={{ color: 'white', display: { xs: 'none', md: 'block' } }}>
            Menu
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer} style={{ width: 240 }}>
        <List>
          <ListItem button component={Link} to="/" onClick={toggleDrawer}>
            Home
          </ListItem>
          <ListItem button component={Link} to="/about" onClick={toggleDrawer}>
            About
          </ListItem>
          <ListItem button component={Link} to="/shows" onClick={toggleDrawer}>
            Shows
          </ListItem>
          <ListItem button component={Link} to="/contact" onClick={toggleDrawer}>
            Contact
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default NavBar;
