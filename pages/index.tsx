'use client'


import { VRScene } from "../components/3D/VRScene";
import { useState } from "react";
import { FadeContainer, opacityVariant } from "@content/FramerMotionVariants";
import { motion } from "framer-motion";
import AnimatedDiv from "@components/FramerMotion/AnimatedDiv";
import Image from "next/image";
import classNames from "classnames";
import { months } from "@utils/date";
import fs from "fs";
import path from "path";

type Job = {
  title: string;
  location?: string;
  starts_at: {
    month: number;
    year: number;
  };
  ends_at?: {
    month: number;
    year: number;
  };
  description?: string;
};

type Experience = {
  company_linkedin_profile_url: string;
  logo_url: string;
  company: string;
  job_titles: Job[];
};


export default function Home({ linkedin }: { linkedin: string }) {
  const [animationComplete, setAnimationComplete] = useState(false);
  const parsedLinkedIn = JSON.parse(linkedin);

  return (
    <>
      <section className={`${animationComplete ? "" : "h-screen"}`}>
        <VRScene setAnimationComplete={setAnimationComplete} animationComplete={animationComplete}/>
        {animationComplete && (
          <>
            <div className="flex flex-col lg:flex-row text-white max-w-full prose dark:prose-invert h-fit centered mt-20 lg:mt-24">
              <div className="flex-1 min-w-0">
                <h1
                  className="my-2 text-xl font-bold text-left md:text-3xl"
                >
                  A propos de moi
                </h1>
                <p>
                  Bonjour ! Je m'appelle Enzo Dubocage, je suis développeur full stack passionné par la création de solutions innovantes et performantes. Ma maîtrise des langages tels que Python, JavaScript, Node.js, TypeScript, Electron, HTML, CSS, React et React Native me permet de mener à bien des projets variés et ambitieux.
                </p>
                <p>
                  Je suis actuellement étudiant à l'IUT de Lannion en informatique, où j'ai pu consolider mes compètences développement logiciel, en gestion de projet et en communication.
                </p>
                <p>
                  Ma passion pour l'informatique et le développement a commencer des mon plus jeunes âge, et j'ai depuis lors acquis une expérience significative, grace a mon apprentissage en autodicacte et mes expériences professionnelles. 
                </p>
                <p> 
                  Mon parcours m'a conduit à collaborer avec diverses équipes au travers le monde, Angletere, Etat Unis, France, Asie.
                </p>
                <p>
                  N'hésitez pas à me contacter via Discord (notbluue) pour discuter de vos projets ou de potentielles collaborations. Je suis toujours enthousiaste à l'idée de relever de nouveaux défis et de contribuer à des initiatives innovantes.
                </p> 
              </div>
              <div className="flex justify-center">
                <img src="./images/chassis.png" className="mx-auto lg:my-auto mt-8 lg:ml-8 w-96 h-96" />
              </div>
            </div>

            <div className="flex-col text-white max-w-full prose centered">    
              <motion.h3
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={opacityVariant}
                className="my-2 text-xl text-white font-bold text-left md:text-3xl"
              >
                Recent Experience
              </motion.h3>

              <AnimatedDiv
                variants={FadeContainer}
                className="flex flex-col gap-2 pt-10 pb-5 overflow-x-scroll md:gap-4"
              >
                {parsedLinkedIn.experiences.map((experience: Experience) => {
                  return (
                    <div
                      key={experience.company_linkedin_profile_url}
                      className="p-5 bg-customLight rounded-lg flex flex-start gap-3 shadow flex-col xs:flex-row"
                    >
                      <div className="min-w-[56px] w-14 h-14 max-w-[56px] relative mt-1">
                        <Image
                          src={experience.logo_url}
                          width={400}
                          height={400}
                          className="object-cover"
                          alt={experience.company}
                        />
                      </div>

                      <div
                        className={classNames(
                          "flex flex-col gap-2 flex-grow",
                          experience.job_titles.length > 1 ? "ml-10" : "ml-0"
                        )}
                      >
                        {experience.job_titles.length > 1 && (
                          <h2
                            className={classNames(
                              "text-xl font-semibold text-white",
                              experience.job_titles.length > 1 ? "-ml-10" : "ml-0"
                            )}
                          >
                            {experience.company}
                          </h2>
                        )}
                        {experience.job_titles.map((job: Job) => (
                          <div key={job.title} className="relative w-full group">
                            {experience.job_titles.length > 1 && (
                              <span className="-left-[29px] h-full absolute w-0.5 bg-black dark:bg-gray-500 top-5 peer-last:opacity-0 group-last:opacity-0"></span>
                            )}
                            <div
                              className={
                                "flex flex-col sm:flex-row items-start sm:justify-between"
                              }
                            >
                              <div className="flex flex-col">
                                <h3 className="text-lg font-semibold text-white relative">
                                  {job.title}

                                  {experience.job_titles.length > 1 && (
                                    <span className="absolute -left-[31.5px] h-2 w-2 top-1/2 -translate-y-1/2 rounded-full bg-white dark:bg-gray-500 ring-[3px] ring-black dark:ring-white"></span>
                                  )}
                                </h3>
                                {experience.job_titles.length === 1 && (
                                  <p className="text-base">{experience.company}</p>
                                )}
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                  {job.location}
                                </p>
                              </div>
                              <div>
                                <div className="flex items-center gap-1 text-sm">
                                  <span>
                                    {months[job.starts_at.month - 1]}{" "}
                                    {job.starts_at.year}
                                  </span>
                                  <span> - </span>
                                  <span>
                                    {!job.ends_at ? (
                                      "Present"
                                    ) : (
                                      <>
                                        {months[job.ends_at.month - 1]}{" "}
                                        {job.ends_at.year}
                                      </>
                                    )}
                                  </span>
                                </div>
                              </div>
                            </div>

                            {job.description && (
                              <p className="whitespace-pre-wrap mt-2 text-sm text-black/80 dark:text-white/50">
                                {job.description}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </AnimatedDiv>
            </div>
          </>
        )}
      </section>
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