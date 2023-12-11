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
      <Typography
        variant="h6"
        style={{ textAlign: "center", margin: "10px", color: "#333", fontFamily:'Bebas Neue' }}
      >
        Disco Stranger
      </Typography>
     <ListItem button component={Link} to="/">
      <ListItemText primary="Home" style={{ fontFamily: 'Gasoek One' }} />
    </ListItem>
    <ListItem button component={Link} to="/about">
      <ListItemText primary="About" style={{ fontFamily: 'Gasoek One' }} />
    </ListItem>
    <ListItem button component={Link} to="/shows">
      <ListItemText primary="Shows" style={{ fontFamily: 'Gasoek One' }} />
    </ListItem>
    <ListItem button component={Link} to="/contact">
      <ListItemText primary="Contact" style={{ fontFamily: 'Gasoek One' }} />
    </ListItem>
    {/* Logo as a footer */}
    <ListItem style={{ position: "absolute", bottom: 0, width: "100%" }}>
      <img
        className="logodes"
        src="/pics/discologo.PNG"
        alt="Band Logo"
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
                position: "absolute",
                top: "80%",
                marginTop: "25px",
                fontFamily:'Gasoek One'
              }}
              PaperProps={{
                style: {
                  backgroundColor: "#C6D2ED",
                
                  
                },
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
              <Button color="inherit" style={{fontFamily:'Gasoek One'}} component={Link} to="/">
                Home
              </Button>
              <Button style={{fontFamily:'Gasoek One'}} color="inherit" component={Link} to="/about">
                About
              </Button>
              <Button style={{fontFamily:'Gasoek One'}}color="inherit" component={Link} to="/shows">
                Shows
              </Button>
              <Button style={{fontFamily:'Gasoek One'}}color="inherit" component={Link} to="/contact">
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
