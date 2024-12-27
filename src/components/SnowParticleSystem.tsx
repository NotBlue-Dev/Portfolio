'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';
import Stats from 'stats-gl';

const SnowParticleSystem = () => {
  const { scene, camera, gl } = useThree();
  const statsRef = useRef<Stats | null>(null);

  useEffect(() => {
    const maxParticleCount = 5000;

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
    geometry.setAttribute('scale', new THREE.BufferAttribute(scaleBuffer, 1));

    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        pointTexture: { value: new THREE.TextureLoader().load('./assets/particle.webp') },
        emissive: { value: new THREE.Color(0x800080) },
      },
      vertexShader: `
        attribute float scale;
        uniform float time;
        varying vec3 vColor;

        void main() {
          vColor = vec3(0.6, 0.8, 1.0);
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = scale * (200.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform sampler2D pointTexture;
        uniform vec3 emissive;
        varying vec3 vColor;

        void main() {
          vec4 texColor = texture2D(pointTexture, gl_PointCoord);
          gl_FragColor = vec4(vColor, 1.0) * texColor + vec4(emissive, 1.0);
        }
      `,
      transparent: true,
    });

    // Particle mesh
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Animation loop
    const clock = new THREE.Clock();

    const animate = () => {
      material.uniforms.time.value = clock.getElapsedTime();
      particles.rotation.y += 0.001;
    };

    gl.setAnimationLoop(animate);

    // Clean up
    return () => {
      scene.remove(particles);
      geometry.dispose();
      material.dispose();
    };
  }, [scene, camera, gl]);

  // Attach stats panel
  useEffect(() => {
    statsRef.current = new Stats();
    statsRef.current.showPanel(0);
    document.body.appendChild(statsRef.current.domElement);
    return () => {
      if (statsRef.current) {
        document.body.removeChild(statsRef.current.domElement);
      }
    };
  }, []);

  return null;
};

export default SnowParticleSystem;
