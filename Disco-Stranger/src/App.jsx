// App.jsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home'; 
import AboutUs from './components/AboutUs';
import Shows from './components/Shows';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blob from './components/Blob';

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/shows' element={<Shows />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blob' element={<Blob />} />
        {/* Add more routes for your other components */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
