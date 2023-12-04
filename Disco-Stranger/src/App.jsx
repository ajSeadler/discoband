// App.jsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home'; // Replace with your actual component imports

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes for your other components */}
      </Routes>
    </div>
  );
}

export default App;
