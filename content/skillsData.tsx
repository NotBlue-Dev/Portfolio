import { SkillType } from "lib/types";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNextdotjs,
  SiPython,
  SiGit,
  SiMysql,
  SiTypescript,
  SiReact,
  SiFigma,
  SiNodedotjs,
  SiElectron,
} from "react-icons/si";

import { TbBrandCSharp as SiSharp } from "react-icons/tb";

const skills: SkillType[] = [
  {
    name: "HTML",
    Icon: SiHtml5,
  },
  {
    name: "CSS",
    Icon: SiCss3,
  },
  {
    name: "Javascript",
    Icon: SiJavascript,
  },
  {
    name: "Typescript",
    Icon: SiTypescript,
  },
  {
    name: "React",
    Icon: SiReact,
  },
  {
    name: "Next.js",
    Icon: SiNextdotjs,
  },
  {
    name: "C#",
    Icon: SiSharp,
  },
  {
    name: "Python",
    Icon: SiPython,
  },
  {
    name: "Electron",
    Icon: SiElectron,
  },
  {
    name: "MySQL",
    Icon: SiMysql,
  },
  {
    name: "Git",
    Icon: SiGit,
  },
  {
    name: "Node.js",
    Icon: SiNodedotjs,
  },
  {
    name: "Figma",
    Icon: SiFigma,
  },
];

export default skills;