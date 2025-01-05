import { FadeContainer, popUp } from "../../content/FramerMotionVariants";
import { motion } from "framer-motion";
import * as WindowsAnimation from "lib/windowsAnimations";
import skills from "content/skillsData";
import React from "react";
import { SkillType } from "lib/types";
import AnimatedHeading from "components/FramerMotion/AnimatedHeading";
import { headingFromLeft } from "../../content/FramerMotionVariants";

export default function SkillSection() {
  return (
    <section className="flex-col text-white prose justify-center mx-auto my-11 mb-10 max-w-7xl relative p-4">
      <AnimatedHeading
        className="w-full my-2 text-2xl text-white sm:text-3xl font-bold text-left font-inter"
        variants={headingFromLeft}
        >
        Mes skills
      </AnimatedHeading>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={FadeContainer}
        viewport={{ once: true }}
        className="grid grid-cols-3 gap-4 my-10"
      >
        {skills.map((skill: SkillType, index: number) => {
          const Icon = skill.Icon;
          return (
            <motion.div
              variants={popUp}
              key={index}
              title={skill.name}
              onMouseMove={(e: React.MouseEvent<HTMLDivElement>) =>
                WindowsAnimation.showHoverAnimation(e)
              }
              onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) =>
                WindowsAnimation.removeHoverAnimation(e)
              }
              className="flex items-center justify-center gap-4 p-4 origin-center transform rounded-md sm:justify-start bg-gray-50 hover:bg-white dark:bg-customLight hover:dark:bg-customLight dark:border-neutral-700 md:origin-top group"
            >
              <div className="relative transition pointer-events-none select-none group-hover:scale-110 sm:group-hover:scale-100">
                {/* @ts-ignore */}
                <Icon className="w-8 h-8" />
              </div>
              <p className="hidden text-sm font-semibold pointer-events-none select-none sm:inline-flex md:text-base">
                {skill.name}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}