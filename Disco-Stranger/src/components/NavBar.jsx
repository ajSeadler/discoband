import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const NavBar = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const navLinks = (
    <List style={{ position: "relative", height: "100%" }}>
      <ListItem button component={Link} to="/">
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button component={Link} to="/about">
        <ListItemText primary="About" />
      </ListItem>
      <ListItem button component={Link} to="/shows">
        <ListItemText primary="Shows" />
      </ListItem>
      <ListItem button component={Link} to="/contact">
        <ListItemText primary="Contact" />
      </ListItem>
      {/* Logo as a footer */}
      <ListItem style={{ position: "absolute", bottom: 0, width: "100%" }}>
        <img className="logodes"
          src="/pics/discologo.PNG"
          alt="Your Band Logo"
          style={{ height: "40px", width: "auto", margin: "auto" }}
        />
      </ListItem>
    </List>
  );

  return (
    <AppBar position="sticky" sx={{ background: "#333" }}>
      <Toolbar>
        {isMobile ? (
          <>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={drawerOpen}
              onClick={toggleDrawer(false)}
              style={{
                width: "60%",
                position: "absolute", // Use absolute positioning
                top: "80%", // Position the top of the Drawer at the bottom of the nav bar
                marginTop: "25px", // Adjust the margin as needed
              }}
            >
              {navLinks}
            </Drawer>
          </>
        ) : (
          <>
            {/* Logo image */}
            <img
              src="/pics/discologo.PNG"
              alt="Your Band Logo"
              style={{ height: "40px", marginRight: "auto" }}
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
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
