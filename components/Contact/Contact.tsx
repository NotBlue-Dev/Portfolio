import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { popUpFromBottomForText } from "../../content/FramerMotionVariants";
import AnimatedHeading from "../FramerMotion/AnimatedHeading";
import ContactForm from "./ContactForm";
import { useTranslation } from 'next-i18next'

export default function Contact() {
  const {t} = useTranslation('common');

  return (
    <div id="contact" className="!relative">
      {/* Wrapper Container */}
      <section className="flex flex-col w-full px-5 mx-auto lg:flex-row text-white dark:text-white lg:pb-10">
        {/* Left Contact form section */}
        <div className="w-full mx-auto mt-10">
          <AnimatedHeading
            variants={popUpFromBottomForText}
            className="w-full my-2 text-2xl font-bold text-center"
          >
            {t('contactMeButton')}
          </AnimatedHeading>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}