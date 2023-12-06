// ThreeHelixScene.jsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { CatmullRomCurve3 } from 'three';


const ThreeContactScene = () => {
  const sceneRef = useRef();

  useEffect(() => {
    // Three.js scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff); // Set background color to white

    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 10);
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Enable alpha for a transparent background

    renderer.setSize(200, 200); // Set a larger size for the helix
    renderer.setClearAlpha(0); // Make the renderer background transparent
    sceneRef.current.appendChild(renderer.domElement);

    // Create a DNA helix
    const helix = createHelix();
    scene.add(helix);
    camera.position.z = 5;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      helix.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      // Optionally clean up resources
    };
  }, []);

  // Function to create a DNA helix geometry
  const createHelix = () => {
    const helix = new THREE.Group();
  
    const radius = 0.5;
    const tubeRadius = 0.1;
    const radialSegments = 32;
    const tubularSegments = 100;
  
    // Create a curve for the helix using CatmullRomCurve3
    const curve = new CatmullRomCurve3([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(1, 1, 1), // Adjust control points as needed
      new THREE.Vector3(2, 0, 0),
      new THREE.Vector3(3, -1, 1),
      // Add more control points if needed
    ]);
  
    const helixGeometry = new THREE.TubeGeometry(curve, tubularSegments, tubeRadius, radialSegments, false);
  
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const helixMesh = new THREE.Mesh(helixGeometry, material);
  
    helix.add(helixMesh);
  
    return helix;
  };

  return <div ref={sceneRef} style={{ width: '200px', height: '200px' }} />;
};

export default ThreeContactScene;
