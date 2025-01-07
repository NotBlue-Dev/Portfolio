import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { flags } from "@components/assets";
import { motion } from 'framer-motion';
import { useLanguageContext } from "context/LanguageContext";
import Link from "next/link";
import { useRouter } from "next/router";

const LanguagePicker = () => {
    const { language, setLanguage } = useLanguageContext();
    const [currentLang, setCurrentLang] = useState(language === "fr" ? "FR" : "EN");
    const [isOtherLangVisible, setIsOtherLangVisible] = useState(false); // New state to control visibility
    const router = useRouter();

    const otherLang = currentLang === "FR" ? "EN" : "FR";
    const ref = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsOtherLangVisible(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        setLanguage(currentLang == "FR" ? "fr" : "en-US");
    }, [currentLang, language]);


    return (
      (flags[currentLang] && flags[otherLang]) && (
        <div ref={ref} className="relative inline-block ml-4 mt-0.5"> 
            {/* Current language flag with animation */}
            <motion.div
                className="cursor-pointer"
                onClick={() => setIsOtherLangVisible(!isOtherLangVisible)} // Toggle visibility
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Image
                src={flags[currentLang].img}
                alt={flags[currentLang].alt}
                className="w-7 h-5"
                />
            </motion.div>

            {/* Other language flag (toggled on click) with animation */}
            <motion.div className={`absolute top-12 left-0 ${isOtherLangVisible ? "block" : "hidden"}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: isOtherLangVisible ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            >
                <Link className="cursor-pointer" href={router.asPath} replace locale={otherLang == "FR" ? "en-US" : "fr"} onClickCapture={() => {
                    setCurrentLang(otherLang);
                    setIsOtherLangVisible(false); 
                }}>
                    <Image
                        src={flags[otherLang].img}
                        alt={flags[otherLang].alt}
                        className="w-7 h-5"
                    />
                </Link>
            </motion.div>
        </div>
      )
    );
  }

export default LanguagePicker;