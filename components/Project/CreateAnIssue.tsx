import Link from "next/link";
import React from "react";

export default function CreateAnIssue() {
  return (
    <div className="grid w-full h-screen px-10 sm:px-20 place-items-center dark:text-gray-200">
      <p>
        Quelque chose c&apos;est mal passer ? Vous pouvez me le faire savoir en {" "}
        <Link
          href="https://github.com/NotBlue-Dev/Portfolio/issues/new"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold underline hover:text-blue-500 "
        >
          créant une issue
        </Link>{" "}
        sur Github.
      </p>
    </div>
  );
}