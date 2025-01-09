import { motion } from "framer-motion";
import { FadeContainer } from "@content/FramerMotionVariants";
import React from "react";
import { useTranslation } from 'next-i18next'


const AboutMe = () => {
    const { t } = useTranslation('common');

    return (
        <div className="flex flex-col lg:flex-row text-white prose dark:prose-invert h-fit justify-center mx-auto my-11 mb-10 max-w-7xl relative p-4 mt-20 lg:mt-24">
            <div className="flex-1 min-w-0">
            <motion.h1
                variants={FadeContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="my-2 text-xl font-bold text-left md:text-3xl text-gray-300"
            >
                {t('aboutMe')}
            </motion.h1>
            <motion.p 
                variants={FadeContainer}         
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-gray-300 leading-6"
            >
                {t('helloMyNameIs')}<strong className="text-white">{t('name')}</strong>{t('Iam')}<strong className="text-white">{t('passionatedFullStack')}</strong>{t('firstLine')}
            </motion.p>
            <motion.p 
                variants={FadeContainer}         
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-gray-300 leading-6"
            >
                {t('student')}<strong className="text-white">{t('iutLannion')}</strong>{t('secondLine')}
            </motion.p>
            <motion.p 
                variants={FadeContainer}         
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-gray-300 leading-6"
            >
                {t('thirdLine')}<strong className="text-white">{t('autodidacte')}</strong>{t('and')}<strong className="text-white">{t('proExp')}</strong>. 
            </motion.p>
            <motion.p 
                variants={FadeContainer}         
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-gray-300 leading-6"
            >
                {t('fourthLine')}<strong className="text-white">{t('countries')}</strong>.
            </motion.p>
            <motion.p 
                variants={FadeContainer}         
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-gray-300 leading-6"
            >
                {t('contactMe')}<strong className="text-white">(notbluue)</strong>{t('whyContactMe')}
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