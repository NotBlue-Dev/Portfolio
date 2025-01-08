'use client'

import { VRScene } from "../components/3D/VRScene";
import AboutMe from "components/Home/AboutMe";
import Experiences from "components/Home/Experiences";
import TopSkills from "components/Home/TopSkills";
import { useAnimationContext } from '../context/AnimationContext';
import { Experience } from "lib/types";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticPropsContext } from "next";
import { getUserDataValue } from 'lib/supabase';
import Metadata from "@components/MetaData";
import pageMeta from "@content/pageMeta";

export default function Home({ linkedin } : { linkedin : {value: {experiences: Experience[]}}[]}) {
  const { animationComplete } = useAnimationContext();
  const parsedLinkedIn = linkedin[0].value.experiences;

  return (
      <>
        <Metadata
          title={pageMeta.projects.title}
          description={pageMeta.projects.description}
          previewImage={pageMeta.projects.image}
          keywords={pageMeta.projects.keywords}
        />
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

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const { data: linkedin } = await getUserDataValue("linkedin", locale || 'fr');

  return {
    props: {
      linkedin,
      ...(await serverSideTranslations(locale || 'fr', ["common"])),
    },
    revalidate: 60 * 60 * 24 , // everyday
  };
}
