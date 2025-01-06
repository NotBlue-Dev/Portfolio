'use client'

import { VRScene } from "../components/3D/VRScene";
import fs from "fs";
import path from "path";
import AboutMe from "components/Home/AboutMe";
import Experiences from "components/Home/Experiences";
import TopSkills from "components/Home/TopSkills";
import { useAnimationContext } from '../context/AnimationContext';

export default function Home({ linkedin }: { linkedin: string }) {
  const { animationComplete } = useAnimationContext();

  const parsedLinkedIn = JSON.parse(linkedin);

  return (
      <>
        <section
          className={`${
            animationComplete ? "" : "h-screen"
          }`}
        >
          <VRScene/>
        </section>
        {animationComplete && (
          <section>
            <AboutMe />
            <TopSkills />
            <Experiences parsedLinkedIn={parsedLinkedIn} />
          </section>
        )}
      </>
  );
}

export async function getStaticProps() {
  // Path to your JSON file, adjust the path as necessary
  const filePath = path.join(process.cwd(), 'pages', 'data.json');
  const linkedin = fs.readFileSync(filePath, 'utf8');
  
  return {
    props: {
      linkedin
    }
  };
}