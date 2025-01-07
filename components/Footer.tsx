import Link from "next/link";
import Image from "next/image";
import socialMedia from "content/socialMedia";
import {
  FadeContainer,
  popUp,
} from "../content/FramerMotionVariants";
import { navigationRoutes } from "../utils/utils";
import { motion } from "framer-motion";
import { SiSpotify } from "react-icons/si";
import useSWR from "swr";
import fetcher from "lib/fetcher";
import { Song } from "lib/types";
import { useTranslation } from 'next-i18next';

export default function Footer() {
  const { data: currentSong } = useSWR("/api/now-playing", fetcher);
  const navigationRoutesCleanedUp = navigationRoutes.filter((route) => route !== "cv");
  
  return (
    <footer className="justify-center mx-auto my-11 mb-10 max-w-7xl relative p-4 text-gray-600 dark:text-gray-400/50 font-inter print:hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={FadeContainer}
        viewport={{ once: true }}
        className="flex flex-col max-w-full gap-5 p-5 mx-auto text-sm border-t-2 border-gray-200 dark:border-gray-400/10 sm:text-base"
      >
        <div>
          {currentSong?.isPlaying ? (
            <WhenPlaying song={currentSong} />
          ) : (
            <NotPlaying />
          )}
        </div>

        <section className="grid grid-cols-3 gap-10">
          <div className="flex flex-col gap-4 capitalize">
            {navigationRoutesCleanedUp.slice(0, 5).map((text, index) => {
              return <FooterLink key={index} route={text} text={text} />;
            })}
          </div>
          <div className="flex flex-col gap-4 capitalize">
            {navigationRoutesCleanedUp
              .slice(5, navigationRoutesCleanedUp.length)
              .map((route, index) => {
                return <FooterLink key={index} route={route} text={route} />;
              })}
          </div>
          <div className="flex flex-col gap-4 capitalize">
            {socialMedia.slice(0, 5).map((platform, index) => {
              return (
                <Link
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.p
                    className="hover:text-black dark:hover:text-white w-fit"
                    variants={popUp}
                  >
                    {platform.title}
                  </motion.p>
                </Link>
              );
            })}
          </div>
        </section>
      </motion.div>
    </footer>
  );
}

function FooterLink({ route, text }: { route: string; text: string }) {
  const {t} = useTranslation('common');

  return (
    <Link href={`/${route}`}>
      <motion.p
        className="hover:text-black dark:hover:text-white w-fit"
        variants={popUp}
      >
        {t(text)}
      </motion.p>
    </Link>
  );
}

function NotPlaying() {
  const {t} = useTranslation('common');

  return (
    <div className="flex flex-row-reverse items-center justify-between gap-2 sm:flex-row sm:justify-start">
      <SiSpotify className="w-6 h-6" />
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
        <div className="font-semibold text-black md:text-lg dark:text-white">
          {t('notPlaying')}
        </div>
        <span className="hidden md:inline-flex">—</span>
        <p className="text-xs text-gray-500 sm:text-sm">Spotify</p>
      </div>
    </div>
  );
}

function WhenPlaying({ song }: { song: Song }) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-lg font-semibold dark:text-gray-300">Now Playing</h4>
      <Link
        href={song.songUrl}
        className="flex items-center justify-between p-3 bg-gray-200 rounded-sm dark:bg-customLight sm:p-4"
      >
        <div className="flex items-center gap-2 ">
          <div className="w-10 h-10">
            <Image
              alt={song.title}
              src={song.albumImageUrl}
              width={40}
              height={40}
              quality={50}
              placeholder="blur"
              blurDataURL={song.albumImageUrl}
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
            <h3 className="font-semibold text-black md:text-lg dark:text-white animate-">
              {song.title}
            </h3>
            <span className="hidden md:inline-flex dark:text-gray-300">—</span>

            <p className="text-xs text-gray-600 dark:text-gray-400 sm:text-sm">
              {song.artist}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <SiSpotify className="w-6 h-6 text-green-500 animate-[spin_2s_linear_infinite]" />
        </div>
      </Link>
    </div>
  );
}

