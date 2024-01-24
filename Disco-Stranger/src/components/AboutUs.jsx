// AboutUs.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutUs = () => {
  const images = ['./pics/greenblue.jpg', './pics/bluePink.jpg']; // Add more image paths if needed

  return (
    <div className='about-pg'>
      
      
      <div className="bio text-white p-5">
        
        {/* Bio Section */}
        <div className="container mx-auto">
        
          <div className="row">
            <div className="col-md-6 mx-auto">
              <h4 className="mb-4">ABOUT US</h4>
              <img
                src="/pics/IMG_2050.JPG"
                alt="Band Image"
                className="img-fluid rounded mb-4"
              />
              <p className="mb-4">
                After years of band attempts and projects dating back to high school days, a career in music for the members
                of Disco Stranger didn’t look so promising. After a few long months and a little bit of luck, the origin of
                the group was born.
              </p>
              <p className="mb-4">
                Disco Stranger originally started out as a cover band under the name "Steve French and Company" until they
                heard one too many “PLAY KID ROCK!” requests and decided to write their own original material. The band name
                is an ode to the Eagles and their song “Disco Strangler”, a band they covered quite a bit and grew up on. 
              </p>
              <h6 className="mb-4">
                Meet the incredible talents that form the heart and soul of Disco Stranger:
              </h6>
              <ul>
                <li className="mb-2">
                  <strong>Drew Stogsdill:</strong> Lead Vocals and Rhythm Guitar
                </li>
                <li className="mb-2">
                  <strong>AJ Seadler:</strong> Lead Guitar
                </li>
                <li className="mb-2">
                  <strong>Colton Walkup:</strong> Bass
                </li>
                <li className="mb-2">
                  <strong>Nathaniel Lee:</strong> Drums
                </li>
              </ul>
              <p>
                Together, they are more than a band; they are the architects of an auditory journey. Get ready to experience the magic of Disco Stranger.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SVG Wave Divider */}
      <div class="custom-shape-divider-bottom-1706069005">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
</div>
      {/* Images Section */}
      <div className="bg-transparent p-5">
        <div className="container">
          <div className="row justify-content-center">
            {images.map((image, index) => (
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
    </div>
  );
};

export default AboutUs;
