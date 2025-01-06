import React, { useState } from "react";
import Project from "components/Project";
import AnimatedDiv from "@components/FramerMotion/AnimatedDiv";
import { FadeContainer } from "@content/FramerMotionVariants";
import { getProjects } from "lib/supabase";
import { ProjectType } from "lib/types";
import CreateAnIssue from "components/CreateAnIssue";
import AnimatedHeading from "@components/FramerMotion/AnimatedHeading";
import AnimatedText from "@components/FramerMotion/AnimatedText";
import { fromLeftVariant, opacityVariant } from "@content/FramerMotionVariants";

const DEFAULT_PROJECT_COUNT = 5; // Default number of projects to show

export default function Projects({
  projects,
  error,
}: {
  projects: ProjectType[];
  error: boolean;
}) {
  const [visibleProjects, setVisibleProjects] = useState(DEFAULT_PROJECT_COUNT);

  if (error) return <CreateAnIssue />;

  const handleShowMore = () => {
    setVisibleProjects((prevCount) => prevCount + DEFAULT_PROJECT_COUNT);
  };

  return (
    <>
      <section className="justify-center mx-auto my-11 mb-10 max-w-7xl relative p-4">
        <AnimatedHeading
          variants={fromLeftVariant}
          className={`text-4xl  md:text-5xl mt-16 font-bold text-neutral-900 dark:text-neutral-200`}
        >
          Projets
        </AnimatedHeading>
        <AnimatedText
          variants={opacityVariant}
          className="text-lg text-gray-600 mt-4 dark:text-gray-400"
        >
          J'ai créer divers types de projets allant d'architecture basiques à des projets complexes. Jusqu'à présent, j'ai réalisé{" "}
          <span className="font-bold text-gray-600 dark:text-gray-200">
            {projects.length}+
          </span>{" "}
          projets.
        </AnimatedText>

        <AnimatedDiv
          variants={FadeContainer}
          className="grid grid-cols-1 gap-4 mt-16 mx-auto md:ml-[20%] xl:ml-[24%]"
        >
          {projects.slice(0, visibleProjects).map((project) => {
            if (project.name === "" && project.githubURL === "") return null;
            return <Project key={project.id} project={project} />;
          })}
        </AnimatedDiv>

        {visibleProjects < projects.length && (
          <div className="text-center mt-6">
            <button
              onClick={handleShowMore}
              className="px-4 py-2 text-white bg-customLight rounded-md hover:bg-customLight focus:outline-none focus:ring"
            >
              Show More
            </button>
          </div>
        )}
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
