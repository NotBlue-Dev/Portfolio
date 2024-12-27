'use client'
import React, { useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, ScrollControls, useScroll, useTexture } from "@react-three/drei";
import { Suspense } from "react";
import { useLayoutEffect } from "react";
import * as THREE from "three";
// @ts-ignore
import { lerp } from "three/src/math/MathUtils";

const VRHeadset = ({scale, position, setScrollEnded, scrollEnded}: {scale: number, position: number[], setScrollEnded: (ended: boolean) => void, scrollEnded: boolean}) => {
  const { scene, materials } = useGLTF("/assets/3D/cv1.glb");
  const scroll = useScroll();

  const cameraKeyframes = [
    // Front of the object
    { offset: 0, position: [0, 10, 15], lookAt: [0, 2, 0] },
    
    // Left side of the object
    { offset: 0.5, position: [-8, 8, -6], lookAt: [0, 0, 5] },
    
    // Zoom into one of the lenses
    { offset: 1, position: [2, 4.5, 5.5], lookAt: [5, 0, 35] },
  ];

  const ClothMaterial = materials["VR_Oculus_Rift_CV1_clothband"];
  const Lens = materials["Material.003"];

  ClothMaterial.color.set(new THREE.Color(0x3C3C3C));
  Lens.transparent = true;
  Lens.opacity = 0.2;

  const interpolate = (keyframes: {offset:number, position:number[], lookAt:number[]}[], offset: number) => {
    let start, end;
    for (let i = 0; i < keyframes.length - 1; i++) {
      if (offset >= keyframes[i].offset && offset <= keyframes[i + 1].offset) {
        start = keyframes[i];
        end = keyframes[i + 1];
        break;
      }
    }
  
    if (!start || !end) return keyframes[0];
    const t = (offset - start.offset) / (end.offset - start.offset);
    return {
      position: start.position.map((val, idx) => lerp(val, end.position[idx], t)),
      lookAt: start.lookAt.map((val, idx) => lerp(val, end.lookAt[idx], t)),
    };
  };

  useFrame((state) => {
    const { position, lookAt } = interpolate(cameraKeyframes, scroll.offset);
  
    if (scroll.offset >= 0.999 && !scrollEnded) {
      setScrollEnded(true);
    } else {
      setScrollEnded(false);
    }

    // Set camera position
    state.camera.position.set(position[0], position[1], position[2]);
    
    // Use destructuring to pass x, y, z to lookAt
    state.camera.lookAt(lookAt[0], lookAt[1], lookAt[2]);
  });

  return <primitive object={scene} scale={scale} position={position} />;
};

export const VRScene = ({ setScrollEnded, scrollEnded }: { setScrollEnded: (ended: boolean) => void, scrollEnded: boolean }) => {
  return (
    <Canvas style={{height: '100vh'}} shadows camera={{ position: [0, 0, 10] }} >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Suspense fallback={null}>
        <ScrollControls pages={4}>
          <VRHeadset scale={0.022} position={[0, 0, 0]} setScrollEnded={setScrollEnded} scrollEnded={scrollEnded} />
        </ScrollControls>
      </Suspense>
      <OrbitControls enableRotate={false} enableZoom={false} />
    </Canvas>
  );
};

useGLTF.preload("/assets/3D/cv1.glb");