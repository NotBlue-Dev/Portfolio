'use client'


import { VRScene } from "../components/3D/VRScene";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Suspense fallback={null}>
        <h1 className="absolute font-drukWide top-16 right-14 text-4xl lg:text-7xl md:text-6xl sm:text-5xl text-white">Enzo Dubocage</h1>
        <div className="absolute font-drukWide bottom-28 left-14">
          <h1 className="lg:text-7xl md:text-6xl text-4xl sm:text-5xl text-white">Développeur</h1>
          <h1 className="absolute top-full left-1/2 lg:text-7xl md:text-6xl text-4xl sm:text-5xl text-white">Fullstack</h1>
        </div>
        <div className="z-10 absolute top-0 left-0 w-screen h-screen bg-transparent">
          <VRScene/>
        </div>
      </Suspense>
    </>
  );
}
