'use client';
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Gltf, ScrollControls, useScroll, Sky, Points, PointMaterial } from '@react-three/drei';
import { getProject, val } from '@theatre/core';
import theatreState from '../../public/assets/theatreState.json';
import * as THREE from 'three';
import { SheetProvider, PerspectiveCamera, useCurrentSheet } from '@theatre/r3f';
import SnowParticleSystem from './SnowParticleSystem';

const VRHeadset = () => {
  const sheet = useCurrentSheet();
  const scroll = useScroll();

  // Update light intensity dynamically based on scroll position
  useFrame(() => {
    if (!sheet) return;
    const sequenceLength = val(sheet.sequence.pointer.length) as number;
    sheet.sequence.position = scroll.offset * sequenceLength;

  });

  return (
    <>
      <color attach="background" args={['#0c0c0c']} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[-5, 10, -3]} color="#0000FF" intensity={2.5} />
      <directionalLight position={[5, 10, -8]} color="#4B00FF" intensity={2.5} />
      <fog attach="fog" args={['#0c0c0c', 40, 120]} />
      <directionalLight position={[-5, 0, 2]} color="#8000FF" intensity={2.5} />
      <directionalLight position={[5, 0, 10]} color="#BF00FF" intensity={2.5} />

      <Gltf src="./assets/3D/cv1.glb" position={[0, -2, 0]} scale={0.1} />
      <SnowParticleSystem />
      
      <PerspectiveCamera
        theatreKey="Camera"
        makeDefault
        position={[0, 0, 0]}
        fov={45}
        near={0.1}
      />
    </>
  );
};

export const VRScene = React.memo(() => {
  const sheet = getProject('VR Headset', { state: theatreState }).sheet('Scene');
  return (
    <Canvas gl={{ preserveDrawingBuffer: true }}>
      <ambientLight intensity={0.5} />
      <ScrollControls pages={4}>
        <SheetProvider sheet={sheet}>
          <VRHeadset />
        </SheetProvider>
      </ScrollControls>
    </Canvas>
  );
});
