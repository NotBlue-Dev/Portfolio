import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { popUpFromBottomForText } from "../../content/FramerMotionVariants";
import AnimatedText from "../FramerMotion/AnimatedText";
import AnimatedHeading from "../FramerMotion/AnimatedHeading";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div id="contact" className="dark:bg-darkPrimary !relative">
      {/* Wrapper Container */}
      <section className="flex flex-col w-full px-5 mx-auto lg:flex-row dark:bg-darkPrimary dark:text-white lg:pb-10">
        {/* Left Contact form section */}
        <div className="w-full mx-auto mt-10">
          <AnimatedHeading
            variants={popUpFromBottomForText}
            className="w-full my-2 text-2xl font-bold text-center"
          >
            Me contacter
          </AnimatedHeading>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}