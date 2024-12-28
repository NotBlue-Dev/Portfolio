'use client';
import React, { useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Gltf, ScrollControls, useScroll, useGLTF } from '@react-three/drei';
import { getProject, val } from '@theatre/core';
import theatreState from '../../public/3D/theatreState.json';
import * as THREE from 'three';
import { SheetProvider, PerspectiveCamera, useCurrentSheet } from '@theatre/r3f';
import SnowParticleSystem from './SnowParticleSystem';
import { LoadingScreen } from '../Utils/LoadingScreen';

// Preload the GLTF model
useGLTF.preload('./3D/cv1.glb');

const VRHeadset = ({setLoading} : {setLoading: (bool: boolean) => void}) => {
  const sheet = useCurrentSheet();
  const scroll = useScroll();
  const { materials, scene } = useGLTF('./3D/cv1.glb');

  useEffect(() => {
    if (materials) {
      const ClothMaterial = materials['VR_Oculus_Rift_CV1_clothband'];
      const Lens = materials['Material.003'];
      const Image = materials['Inisiderift.002'];

      Image.opacity = 0;
      Image.transparent = true;
      Image.needsUpdate = true;

      if (ClothMaterial) {
        // @ts-expect-error color isn't defined in the type
        ClothMaterial.color = new THREE.Color(0x3c3c3c);
      }
      if (Lens) {
        Lens.opacity = 1;
        const textureLoader = new THREE.TextureLoader();
        const lensTexture = textureLoader.load('./images/cursed.png');

        // Adjust texture mapping
        lensTexture.offset.set(0, 0.1); // Adjust these values to move the texture
        lensTexture.repeat.set(1, 1); // Adjust these values to scale the texture

        // @ts-expect-error emissiveMap isn't defined in the type
        Lens.emissiveMap = lensTexture;
        // @ts-expect-error emissive isn't defined in the type
        Lens.emissive = new THREE.Color(0xffffff);
        Lens.needsUpdate = true;
      }
    }
  }, [materials]);

  useEffect(() => {
    if (scene) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [scene]);

  useFrame(() => {
    if (!sheet) return;
    const sequenceLength = val(sheet.sequence.pointer.length) as number;
    sheet.sequence.position = scroll.offset * sequenceLength;
  });

  return (
    <>
      <SnowParticleSystem />
      <Gltf src="./3D/cv1.glb" position={[0, 0, 0]} rotation={[0,0,0]} scale={0.1}/>
      <directionalLight position={[-30, 0, 3]} color="#0EC6DA" intensity={2} />
      <directionalLight position={[30, 0, 3]} color="#930677" intensity={3} />
      <directionalLight position={[0, 15, 20]} color="#0EC6DA" intensity={1.6} />
      <directionalLight position={[0, -15, 20]} color="#930677" intensity={2.5} />
      <directionalLight position={[0, 50, 0]} color="#930677" intensity={2.5} />*
      <ambientLight color="#0EC6DA" intensity={0.3} />
      <ambientLight color="#930677" intensity={2} />
      <fog attach="fog" args={['#050004', 80, 250]} />
      <PerspectiveCamera
        theatreKey="Camera"
        makeDefault
        position={[0, 0, 0]}
        fov={50}
        near={0.1}
      />
    </>
  );
};

export const VRScene = React.memo(() => {
  const [loading, setLoading] = React.useState(true);
  const sheet = getProject('VR Headset', { state: theatreState }).sheet('Scene');

  return (
    <>
      <LoadingScreen loading={loading} />
      <div className={loading ? "opacity-0 transition-opacity duration-1000" : "opacity-100 transition-opacity duration-1000"}>
        <h1 className="absolute font-drukWide top-16 right-14 text-4xl lg:text-7xl md:text-6xl sm:text-5xl text-white">Enzo Dubocage</h1>
        <div className="absolute font-drukWide bottom-28 left-14">
          <h1 className="lg:text-7xl md:text-6xl text-4xl sm:text-5xl text-white">Développeur</h1>
          <h1 className="absolute top-full left-1/2 lg:text-7xl md:text-6xl text-4xl sm:text-5xl text-white">Fullstack</h1>
        </div>
        <div className="z-10 absolute top-0 left-0 w-screen h-screen bg-transparent">
            <Canvas onCreated={() => console.log("done")} gl={{ preserveDrawingBuffer: true, alpha: true }} style={{ background: 'transparent' }}>
              <ScrollControls pages={4}>
                <SheetProvider sheet={sheet}>
                  <VRHeadset setLoading={setLoading} />
                </SheetProvider>
              </ScrollControls>
            </Canvas>
        </div>
      </div>
    </>
  );
});

VRScene.displayName = 'VRScene';
VRHeadset.displayName = 'VRHeadset';
