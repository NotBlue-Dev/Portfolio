'use client'

import { VRScene } from "../components/3D/VRScene";
import fs from "fs";
import path from "path";
import Layout from "../layout/Layout";
import AboutMe from "components/Home/AboutMe";
import Experiences from "components/Home/Experiences";
import TopSkills from "components/Home/TopSkills";
import { useState } from "react";

export default function About({ linkedin }: { linkedin: string }) {
  const [animationComplete, setAnimationComplete] = useState(false);

  const parsedLinkedIn = JSON.parse(linkedin);

  return (
      <Layout animationComplete={animationComplete}>
        <section
          className={`${
            animationComplete ? "" : "h-screen"
          }`}
        >
          <VRScene
            setAnimationComplete={setAnimationComplete}
            animationComplete={animationComplete}
          />
        </section>
        {animationComplete && (
          <section>
            <AboutMe />
            <TopSkills />
            <Experiences parsedLinkedIn={parsedLinkedIn} />
          </section>
        )}
      </Layout>
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