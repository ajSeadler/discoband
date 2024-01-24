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

  const navWaveSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
  </svg>
`;

  return (
    <AppBar
      position="sticky"
      sx={{
        background: `url("/navtopwave.svg")`, // Use the imported NavWave SVG
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        border: "none", // Remove border
        boxShadow: "none", // Remove shadow
        zIndex: 1
      }}
    >
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
                fontFamily:'Gasoek One',
              }}
              PaperProps={{
                style: {
                  backgroundColor: "#f5f5f5",
                
                  
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
              src="/pics/whitelogo.PNG"
              alt="Your Band Logo"
              style={{ height: "50px", marginRight: "auto" }}
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
