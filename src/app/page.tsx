'use client'


import { VRScene } from "../components/VRScene";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={null}>
      <VRScene/>
    </Suspense>
  );
}
