import { motion } from "framer-motion";
import { FadeContainer } from "@content/FramerMotionVariants";
import React from "react";


const AboutMe = () => {
    return (
        <div className="flex flex-col lg:flex-row text-white prose dark:prose-invert h-fit justify-center mx-auto my-11 mb-10 max-w-7xl relative p-4 mt-20 lg:mt-24">
            <div className="flex-1 min-w-0">
            <motion.h1
                variants={FadeContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="my-2 text-xl font-bold text-left md:text-3xl"
            >
                A propos de moi
            </motion.h1>
            <motion.p 
                variants={FadeContainer}         
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-gray-300"
            >
                Bonjour ! Je m'appelle <strong className="text-white">Enzo Dubocage</strong>, je suis <strong className="text-white">développeur full stack passionné</strong> par la création de solutions innovantes et performantes. Ma maîtrise des langages tels que Python, JavaScript, Node.js, TypeScript, Electron, HTML, CSS, React et React Native me permet de mener à bien des projets variés et ambitieux.
            </motion.p>
            <motion.p 
                variants={FadeContainer}         
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-gray-300"
            >
                Je suis actuellement étudiant à l'<strong className="text-white">IUT de Lannion</strong> en informatique, où j'ai pu consolider mes compètences développement logiciel, en gestion de projet et en communication.
            </motion.p>
            <motion.p 
                variants={FadeContainer}         
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-gray-300"
            >
                Ma passion pour l'informatique et le développement a commencer des mon plus jeunes âge, et j'ai depuis lors acquis une expérience significative, grace a mon <strong className="text-white">apprentissage en autodicacte</strong> et <strong className="text-white">mes expériences professionnelles</strong>. 
            </motion.p>
            <motion.p 
                variants={FadeContainer}         
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-gray-300"
            >
                Mon parcours m'a conduit à collaborer avec diverses équipes au travers le monde, <strong className="text-white">Angletere, Etat Unis, France, Asie</strong>.
            </motion.p>
            <motion.p 
                variants={FadeContainer}         
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-gray-300"
            >
                N'hésitez pas à me contacter via Discord <strong className="text-white">(notbluue)</strong> pour discuter de vos projets ou de potentielles collaborations. Je suis toujours enthousiaste à l'idée de relever de nouveaux défis et de contribuer à des initiatives innovantes.
            </motion.p> 
            </div>
            <div className="flex justify-center">
            <motion.img
                src="./images/chassis.png"
                className="mx-auto lg:my-auto mt-8 lg:ml-8 w-96 h-96" 
                variants={FadeContainer}         
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            />
            </div>
        </div>
    )
}

export default AboutMe;