import { Experience, Job } from "lib/types";
import { FadeContainer } from "@content/FramerMotionVariants";
import { motion } from "framer-motion";
import Image from "next/image";
import classNames from "classnames";
import { months } from "@utils/date";
import { useTranslation } from 'next-i18next'


const Experiences = ({ parsedLinkedIn } : {parsedLinkedIn: Experience[]}) => {
    const { t } = useTranslation('common');

    return (
        <div className="flex-col text-white prose justify-center mx-auto my-11 mb-10 max-w-7xl relative p-4">    
            <h3
                className="my-2 text-xl text-white font-bold text-left md:text-3xl"
            >
                {t('myExperiences')}
            </h3>
            <motion.div
                variants={FadeContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col gap-2 pt-10 pb-5 overflow-x-scroll md:gap-4"
            >
                {parsedLinkedIn.map((experience: Experience) => {
                return (
                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={FadeContainer}
                    viewport={{ once: true }}
                    key={experience.company_linkedin_profile_url}
                    className="p-5 bg-customLight rounded-lg flex flex-start gap-3 shadow flex-col xs:flex-row"
                    >
                    <div className="min-w-[56px] w-14 h-14 max-w-[56px] relative mt-1">
                        <Image
                        src={experience.logo_url}
                        width={400}
                        height={400}
                        className="object-cover"
                        alt={experience.company}
                        />
                    </div>

                    <div
                        className={classNames(
                        "flex flex-col gap-2 flex-grow",
                        experience.job_titles.length > 1 ? "ml-10" : "ml-0"
                        )}
                    >
                        {experience.job_titles.length > 1 && (
                        <h2
                            className={classNames(
                            "text-xl font-semibold text-white",
                            experience.job_titles.length > 1 ? "-ml-10" : "ml-0"
                            )}
                        >
                            {experience.company}
                        </h2>
                        )}
                        {experience.job_titles.map((job: Job) => (
                        <div key={job.title} className="relative w-full group">
                            {experience.job_titles.length > 1 && (
                            <span className="-left-[29px] h-full absolute w-0.5 bg-black dark:bg-gray-500 top-5 peer-last:opacity-0 group-last:opacity-0"></span>
                            )}
                            <div
                            className={
                                "flex flex-col sm:flex-row items-start sm:justify-between"
                            }
                            >
                            <div className="flex flex-col">
                                <h3 className="text-lg font-semibold text-white relative">
                                {job.title}

                                {experience.job_titles.length > 1 && (
                                    <span className="absolute -left-[31.5px] h-2 w-2 top-1/2 -translate-y-1/2 rounded-full bg-white dark:bg-gray-500 ring-[3px] ring-black dark:ring-white"></span>
                                )}
                                </h3>
                                {experience.job_titles.length === 1 && (
                                <p className="text-base">{experience.company}</p>
                                )}
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                {job.location}
                                </p>
                            </div>
                            <div>
                                <div className="flex items-center gap-1 text-sm">
                                <span>
                                    {months[job.starts_at.month - 1]}{" "}
                                    {job.starts_at.year}
                                </span>
                                <span> - </span>
                                <span>
                                    {!job.ends_at ? (
                                    t('present')
                                    ) : (
                                    <>
                                        {months[job.ends_at.month - 1]}{" "}
                                        {job.ends_at.year}
                                    </>
                                    )}
                                </span>
                                </div>
                            </div>
                            </div>

                            {job.description && (
                            <p className="whitespace-pre-wrap mt-2 text-sm text-black/80 dark:text-white/50">
                                {job.description}
                            </p>
                            )}
                        </div>
                        ))}
                    </div>
                    </motion.div>
                );
                })}
            </motion.div>
        </div>
    );
}

export default Experiences;