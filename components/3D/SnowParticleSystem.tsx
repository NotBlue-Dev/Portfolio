'use client';

import { useEffect } from 'react';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';

const SnowParticleSystem = () => {
  const { scene, camera, gl } = useThree();
  useEffect(() => {
    const maxParticleCount = 7000;

    // Initialize buffers and variables
    const positionBuffer = new Float32Array(maxParticleCount * 3);
    const scaleBuffer = new Float32Array(maxParticleCount);

    for (let i = 0; i < maxParticleCount; i++) {
      const x = Math.random() * 300 - 150;
      const y = Math.random() * 500 - 100;
      const z = Math.random() * 200 - 100;

      positionBuffer.set([x, y, z], i * 3);
      scaleBuffer[i] = Math.random() * 0.8 + 0.2;
    }

    // Geometry and material
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positionBuffer, 3));
    gl.setClearColor(0x000000, 0); // Set clear color to black and alpha to 0 for transparency
    // Create an array to hold the spheres
    const particles = new THREE.Group();

    for (let i = 0; i < maxParticleCount; i++) {
      const sphereGeometry = new THREE.SphereGeometry(scaleBuffer[i] * 0.15, 4, 4);
      const sphereMaterial = new THREE.MeshBasicMaterial({
        color: i < maxParticleCount / 2 ? 0x00c0db : 0x930677,
        transparent: true,
        opacity: 1,
      });
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      sphere.position.set(positionBuffer[i * 3], positionBuffer[i * 3 + 1], positionBuffer[i * 3 + 2]);
      particles.add(sphere);
    }

    scene.add(particles);

    // Animation loop
    const animate = () => {
      particles.rotation.y += 0.001;
      // Update each sphere's position if needed
    };

    gl.setAnimationLoop(animate);

    // Clean up
    return () => {
      scene.remove(particles);
      geometry.dispose();
    };
  }, [scene, camera, gl]);
  return null;
};

export default SnowParticleSystem;
