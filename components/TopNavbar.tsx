/* Importing Modules */
import React, { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import {
  FadeContainer,
  hamFastFadeContainer,
  mobileNavItemSideways,
  popUp,
} from "../content/FramerMotionVariants";
import { navigationRoutes } from "../utils/utils";
import { useAnimationContext } from "../context/AnimationContext";
import { useLanguageContext } from "../context/LanguageContext";
import { useTranslation } from "next-i18next";
import LanguagePicker from "./Utils/LanguagePicker";

/* TopNavbar Component */
export default function TopNavbar() {
  const navRef = useRef<HTMLDivElement>(null);

  const control = useAnimation();
  const [navOpen, setNavOpen] = useState(false);

  // Adding Shadow, backdrop to the navbar as user scroll the screen
  const addShadowToNavbar = useCallback(() => {
    if (window.scrollY > 10) {
      if (navRef.current) { // Check if navRef.current is not null
        navRef.current.classList.add(
          "shadow",
          "backdrop-blur-xl",
          "bg-customBlue"
        );
        control.start("visible");
      }
    } else {
      if (navRef.current) { // Check if navRef.current is not null
        navRef.current.classList.remove(
          "shadow",
          "backdrop-blur-xl",
          "bg-customBlue"
        );
        control.start("hidden");
      }
    }
  }, [control]);

  useEffect(() => {
    window.addEventListener("scroll", addShadowToNavbar);
    return () => {
      window.removeEventListener("scroll", addShadowToNavbar);
    };
  }, [addShadowToNavbar]);

  // to lock the scroll when mobile is open
  function lockScroll() {
    const root = document.getElementsByTagName("html")[0];
    root.classList.toggle("lock-scroll"); // class is define in the global.css
  }

  /* To Lock  the Scroll when user visit the mobile nav page */
  function handleClick() {
    lockScroll();
    setNavOpen(!navOpen);
  }

  return (
    <div
    className="fixed w-full dark:text-white top-0 flex items-center justify-between px-4 py-[10px] sm:px-6 z-50 print:hidden"
    ref={navRef}
    >
      {/* Mobile Navigation Hamburger and MobileMenu */}
      <HamBurger open={navOpen} handleClick={handleClick} />
      <AnimatePresence>
        {navOpen && (
          <MobileMenu links={navigationRoutes} handleClick={handleClick} />
        )}
      </AnimatePresence>

      <Link href="/" className="mr-3" aria-label="Link to Home Page">
        <div className="relative hidden w-8 h-8 sm:inline-flex items-center">
          <motion.p
            animate={control}
            className="font-montserrat"
          >
             notblue
          </motion.p>
        </div>
      </Link>

      {/* Top Nav list */}
      <motion.nav className="z-10 hidden sm:flex md:inset-0 md:justify-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={FadeContainer}
          className="flex items-center md:gap-2"
        >
          {navigationRoutes.slice(0, 7).map((link: string, index: number) => {
            return <NavItem key={index} text={link} href={`/${link}`}/>;
          })}
          <LanguagePicker  />
        </motion.div>
      </motion.nav>
    </div>
  );
}

// NavItem Container
function NavItem({ href, text }: { href: string; text: string }) {
  const router = useRouter();
  const {language} = useLanguageContext();
  const {t} = useTranslation('common');
  const { animationComplete, setAnimationComplete } = useAnimationContext();
  const link = (href === "/home" ? "/" : href);
  const isActive = animationComplete && router.asPath === "/" && href === "/about" || router.asPath === link && !animationComplete;
  const className = `${isActive ? "font-bold text-gray-800 dark:text-gray-100" : "text-gray-600 dark:text-gray-300"} sm:inline-block transition-all text-[17px] px-2 md:px-3 py-[3px] hover:bg-black/10 dark:hover:bg-neutral-700/50 rounded-md`

  return (
    <Link
      onClickCapture={(e) => {
        // Prevent default only if the current path matches the link and specific conditions are met
        if ((router.asPath === link && href === "/home") || (router.asPath === "/" && href === "/about")) {
          e.preventDefault();
          const newAnimationState = href === "/about";
          if (animationComplete !== newAnimationState) {
            setAnimationComplete(newAnimationState);
            console.log(`clicked ${href}, setting animationComplete to ${newAnimationState}`);
          }
        }

        if(href === "/cv") {
          e.preventDefault();
          window.open("/images/resume.png", "_blank");
        }

        setTimeout(() => {
          if(href === "/about") {
            setAnimationComplete(true);
          } else {
            setAnimationComplete(false);
          }
        }, 500);
      }}
      locale={language}
      className={className}
      href={href === "/home" || href === "/about" ? "/" : href}
    >
      <motion.p className="capitalize" variants={popUp}>
        {t(text)}
      </motion.p>
    </Link>
  );
}

// Hamburger Button
function HamBurger({
  open,
  handleClick,
}: {
  open: boolean;
  handleClick: () => void;
}) {
  return (
    <motion.div
      style={{ zIndex: 1000 }}
      initial="hidden"
      animate="visible"
      variants={popUp}
      className="sm:hidden"
    >
      {!open ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 duration-300 transform rounded-md cursor-pointer select-none active:scale-50"
          onClick={handleClick}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 duration-300 transform rounded-md cursor-pointer select-none active:scale-50"
          onClick={handleClick}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      )}
    </motion.div>
  );
}

// Mobile navigation menu
const MobileMenu = ({
  links,
  handleClick,
}: {
  links: string[];
  handleClick: () => void;
}) => {
  return (
    <motion.div
      className="absolute top-0 left-0 z-10 w-screen h-screen font-normal dark:bg-customBlue sm:hidden"
      variants={hamFastFadeContainer}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.nav className="flex flex-col mx-8 mt-28">
        {links.slice(0, 8).map((link, index) => {
          const navlink =
            link.toLowerCase() === "home" ? "/" : `/${link.toLowerCase()}`;
          return (
            <Link
              href={navlink}
              key={`mobileNav-${index}`}
              onClick={handleClick}
              className="flex w-auto py-4 text-base font-semibold text-gray-900 capitalize border-b border-gray-300 cursor-pointer dark:border-gray-700 dark:text-gray-100"
            >
              <motion.p variants={mobileNavItemSideways}>
                {link === "rss" ? link.toUpperCase() : link}
              </motion.p>
            </Link>
          );
        })}
      </motion.nav>
    </motion.div>
  );
};

// Credits to Jatin Sharma for the TopNavbar component