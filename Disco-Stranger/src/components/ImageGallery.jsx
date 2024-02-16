import React, { useState, useEffect } from 'react';
import { ClipLoader } from 'react-spinners';

const ImageGallery = () => {
  const images = [
    './pics/greenblue.jpg',
    './pics/bluePink.jpg',
    './pics/discocrit.jpg',
    './pics/vanguard1.jpg',
    './pics/drew3.JPG',
    './pics/drewnajbcdark.JPEG',
    './pics/colgreenbc.JPEG',
    './pics/drewnajclosebc.JPEG',
    './pics/deepellum.jpeg',
    './pics/drewdeepE.jpg',
    './pics/coltondeepE.jpg',
    './pics/ajdeepE.jpg',
    './pics/drew2bc.JPEG',
  ];

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const promises = images.map((image) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = image;
        img.onload = resolve;
      });
    });

    Promise.all(promises).then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <div className="bg-transparent p-5">
      <div className="container">
        <div className="row justify-content-center">
          {loading && (
            <div className="col-md-12 text-center" style={{ fontFamily: 'YourCustomFont', color: 'white' }}>
              <p>Stream our music while you wait...</p>
              <ClipLoader color="#36D7B7" size={50} />
            </div>
          )}
          {!loading &&
            images.map((image, index) => (
              <div key={index} className="col-md-4 mb-4">
                <img
                  src={image}
                  alt={`Image ${index}`}
                  className="img-fluid rounded"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
