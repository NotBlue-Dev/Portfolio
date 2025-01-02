import { SocialPlatform } from "lib/types";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiDiscord } from "react-icons/si";

const socialMedia: SocialPlatform[] = [
  {
    title: "Discord",
    Icon: SiDiscord,
    url: "https://discord.com/users/228134038001549312",
  },
  {
    title: "LinkedIn",
    Icon: BsLinkedin,
    url: "https://www.linkedin.com/in/enzo-dubocage/",
  },
  {
    title: "Github",
    Icon: BsGithub,
    url: "https://github.com/NotBlue-Dev/",
  },
  {
    title: "Instagram",
    Icon: AiOutlineInstagram,
    url: "https://www.instagram.com/enzo.dbc/",
  },
];

export default socialMedia;