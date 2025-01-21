import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const Vehicle360View = ({ imageURL }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // Create a sphere and apply a texture (your 360-degree image)
    const geometry = new THREE.SphereGeometry(500, 60, 60);
    geometry.scale(-1, 1, 1); // Invert the sphere so it is inside-out
    const texture = new THREE.TextureLoader().load(imageURL);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Position the camera
    camera.position.set(0, 0, 0.1); // Adjust as needed

    // Animation loop to render the scene
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resizing
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onWindowResize);

    return () => {
      window.removeEventListener("resize", onWindowResize);
      container.removeChild(renderer.domElement);
    };
  }, [imageURL]);

  return <div ref={containerRef} style={{ width: "100%", height: "500px" }} />;
};

export default Vehicle360View;
