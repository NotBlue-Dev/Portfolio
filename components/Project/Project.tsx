import { BsGithub } from "react-icons/bs";
import { MdOutlineLink } from "react-icons/md";
import Link from "next/link";
import OgImage from "@components/Utils/OgImage";
import { ProjectType } from "lib/types";
import { getFormattedDate } from "@utils/date";

export default function Project({ project }: { project: ProjectType }) {
  return (
    <div className="card">
      <OgImage src={project?.coverImage as string} alt={project.name} />

      <div className="flex flex-col justify-start gap-3 w-full">
        <div className="flex flex-row justify-between">
          <h1 className="font-bold text-neutral-900 dark:text-neutral-200">
            {project.name}
          </h1>
          <h2 className="font-semibold text-neutral-900 dark:text-neutral-200">
            {getFormattedDate(new Date(project.date))}
          </h2>
        </div>
        <p className="text-sm text-gray-400 dark:text-neutral-400 line-clamp-5">
          {project.description}
        </p>

        <div className="flex flex-wrap items-center gap-1">
          {project.tools!.map((tool, index) => {
            return (
              <span
                key={`${tool}-${index}`}
                className="px-2 py-1 text-xs text-gray-700 bg-gray-100 rounded dark:bg-custom"
              >
                {tool}
              </span>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center gap-1">
          {project.skill!.map((tool, index) => {
            return (
              <span
                key={`${tool}-${index}`}
                className="px-2 py-1 text-xs text-gray-300 bg-customBlue rounded dark:bg-custom"
              >
                {tool}
              </span>
            );
          })}
        </div>

        <div className="flex items-center gap-4 p-2 mt-auto w-fit">
          {project.githubURL && (
            <Link
              href={project.githubURL}
              title="Source Code on GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black dark:hover:text-white"
            >
              <BsGithub className="w-6 h-6 transition-all hover:scale-110 active:scale-90" />
            </Link>
          )}

          {project.previewURL && (
            <Link
              href={project.previewURL}
              title="Live Preview"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black dark:hover:text-white"
            >
              <MdOutlineLink className="w-6 h-6 transition-all hover:scale-110 active:scale-90" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}