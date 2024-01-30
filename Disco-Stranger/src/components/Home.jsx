// HomePage.jsx
import React, { useState } from "react";
import {
  Paper,
  Button,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Dialog,
  DialogContent,
} from "@mui/material";
import { styled } from "@mui/system";
import ContactUs from "./ContactUs";

const HeroSection = styled(Paper)({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
  textAlign: "center",
  padding: "20%",
  boxShadow: "none",
  marginTop: "-5%",
  borderRadius: 0,
  border: "none",
  background: `url('grnblob.svg')`,
  backgroundSize: "cover",
  "@media (max-width: 768px)": {
    height: "75vh",
  },
});

const ImageContainer = styled("div")({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});

const Images = styled("div")({
  display: "flex",
  gap: "10px",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
});

const Image = styled("img")({
  width: "20%",
  height: "20%",
  borderRadius: "50%",
  transition: "transform 0.3s ease-in-out",

  "&:hover": {
    transform: "scale(1.1)", // Increase img size on hover
  },
  "@media (max-width: 768px)": {
    width: "45%",
    height: "45%",
  },
});

const ModalContainer = styled(DialogContent)({
  display: "flex",
  background: `radial-gradient(circle, #2196F3, #E91E63)`,
  flexDirection: "column",
  alignItems: "center",
});

const Modal = ({ isOpen, onClose, image, name, bio, inst }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth={false}>
      <ModalContainer>
        <Card>
          <CardMedia
            component="img"
            height="200"
            width="50"
            image={image}
            alt={name}
          />
          <CardContent>
            <Typography variant="h5">{name}</Typography>
            <Typography variant="body1">{inst}</Typography>
            <Typography variant="body2">{bio}</Typography>
          </CardContent>
        </Card>
      </ModalContainer>
    </Dialog>
  );
};

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/pics/Nat.jpg",
    "/pics/drewhead.jpg",
    "/pics/aj.jpg",
    "/pics/col.jpg",
  ];
  const names = [
    "Nathaniel Lee",
    "Drew Stogsdill",
    "AJ Seadler",
    "Colton Walkup",
  ];
  const bios = [
    "", //nat
    "", //drew
    "", //aj
    "", //col
  ];
  const inst = [
    "Drums",
    "Lead Vocals and Guitar",
    "Lead Guitar",
    "Bass Guitar",
  ];

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setMousePos({ x: clientX, y: clientY });
  };

  const handleImageClick = (index) => {
    setSelectedImage(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="home-pg">
      {/* Hero Section */}
      <HeroSection
        elevation={1}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        isHovered={isHovered}
        mouseX={mousePos.x}
        mouseY={mousePos.y}
      >
        <div className="custom-font">
          <h3>DISCO STRANGER</h3>
        </div>
        <div className="images-container">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
        {/* <Typography variant="h4" style={{ marginTop: '150%', display: 'block', textAlign: 'center' }}>STRANGER</Typography> */}

        <div className="hero-text-fade-in">
          {/* idk if i'll use this section */}
        </div>
      </HeroSection>

      {/* Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        image={images[selectedImage]}
        name={names[selectedImage]}
        bio={bios[selectedImage]}
        inst={inst[selectedImage]}
      />

      {/* This section follows the hero section */}
      <Paper
        className="video-section"
        elevation={1}
        style={{
          padding: "20px",
          marginTop: "0px",
          background: `url(/2.svg)`,
          backgroundSize: "cover",
          borderRadius: 0,
          boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
          border: "none",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          style={{ color: "white", fontFamily: "Bebas Neue" }}
        >
          Watch Our Latest Videos
        </Typography>
        <div className="video-home" style={{border:'none', boxShadow:'none', }}>
          {/* First Video */}

          <Card className="video-card" sx={{ boxShadow: 'none', border: 'none', }}>
            <CardMedia
              component="iframe"
              height="200"
              src="https://www.youtube.com/embed/Imyu7VLuy98"
              title="First Video"
              sx={{ boxShadow: 'none', border: 'none' }}
            />
            <CardContent style={{ backgroundColor: "#2A7F62" }}>
              <Typography
                variant="body1"
                color="white"
                style={{ fontFamily:'YourCustomFont'}}
              >
                Disco Stranger - LIVE @ Speakeasy / Special Jam
              </Typography>
            </CardContent>
          </Card>

          {/* Second Video */}
          <Card className="video-card" sx={{ boxShadow: 'none', border: 'none' }}>
            <CardMedia
              component="iframe"
              height="200"
              src="https://www.youtube.com/embed/SOe3YmCJxy0"
              title="Second Video"
            />
            <CardContent style={{ backgroundColor: "#2A7F62" }}>
              <Typography
                variant="body1"
                color="white"
                style={{ fontFamily:'YourCustomFont'}}
              >
                Disco Stranger - The Less I Think (Lyric video)
              </Typography>
            </CardContent>
          </Card>

          {/* Third Video */}
          <Card className="video-card" sx={{ boxShadow: 'none', border: 'none' }}>
            <CardMedia
              component="iframe"
              height="200"
              src="https://www.youtube.com/embed/abJ0IQIawzo"
              title="Third Video"
            />
            <CardContent style={{ backgroundColor: "#2A7F62" }}>
              <Typography
                variant="body1"
                color="white"
                style={{ fontFamily:'YourCustomFont'}}
              >
                Disco Stranger - Evil, In a Sense (Music Video)
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "20px",
          }}
        >
          {/* Spotify iframe */}
          <iframe
            style={{ borderRadius: "0px", marginBottom: "10px", margin: "5px" }}
            src="https://open.spotify.com/embed/artist/3SwSE7OtWzLOrc32Eq54gO?utm_source=generator&theme=0"
            width="98%"
            height="450"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          {/* Apple Music iframe */}
          <iframe
            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
            frameBorder="0"
            height="450"
            style={{
              width: "100%",
              maxWidth: "98%",
              overflow: "hidden",
              borderRadius: "0px",
              margin: "5px",
            }}
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src="https://embed.music.apple.com/us/album/disco-stranger-ep/1647759571"
            loading="lazy"
          ></iframe>
        </div>
        <ContactUs />
      </Paper>
    </div>
  );
};

export default Home;
