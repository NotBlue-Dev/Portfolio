import React from "react";
import Project from "components/Project";
import AnimatedDiv from "@components/FramerMotion/AnimatedDiv";
import { FadeContainer } from "@content/FramerMotionVariants";
import { getProjects } from "lib/supabase";
import { ProjectType } from "lib/types";
import CreateAnIssue from "components/CreateAnIssue";
import AnimatedHeading from "@components/FramerMotion/AnimatedHeading";
import AnimatedText from "@components/FramerMotion/AnimatedText";
import { fromLeftVariant, opacityVariant } from "@content/FramerMotionVariants";

export default function Projects({
  projects,
  error,
}: {
  projects: ProjectType[];
  error: boolean;
}) {
  if (error) return <CreateAnIssue />;

  return (
    <>
      <section className="pageTop">
        <AnimatedHeading
            variants={fromLeftVariant}
            className={`text-4xl  md:text-5xl font-bold text-neutral-900 dark:text-neutral-200`}
        >
            Statistiques
        </AnimatedHeading>
        <AnimatedText
            variants={opacityVariant}
            className="text-lg text-gray-600 dark:text-gray-400"
        >
            I've been making various types of projects some of them were basics
            and some of them were complicated. So far I've made{" "}
            <span className="font-bold text-gray-600 dark:text-gray-200">
                {projects.length}+
            </span>{" "}
            projects.
        </AnimatedText>

        <AnimatedDiv
          variants={FadeContainer}
          className="grid grid-cols-1 gap-4 mx-auto md:ml-[20%] xl:ml-[24%]"
        >
          {projects.map((project) => {
            if (project.name === "" && project.githubURL === "") return null;
            return <Project key={project.id} project={project} />;
          })}
        </AnimatedDiv>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const { projects, error } = await getProjects();
  return {
    props: {
      projects,
      error,
    },
  };
}