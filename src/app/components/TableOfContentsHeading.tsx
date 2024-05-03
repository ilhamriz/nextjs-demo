import { cn } from "@/lib";
import React from "react";

function TableOfContentsHeading({ heading }: any) {
  return (
    <li className="flex flex-col">
      <a
        href={"#" + heading.slug}
        className={cn(
          `bg-slate-200 dark:bg-slate-800 dark:hover:bg-indigo-400 hover:bg-indigo-300 hover:text-white  py-1 px-4 dark:text-white rounded-full mb-2 first-letter:uppercase w-fit line-clamp-2`
        )}
      >
        {heading.text}
      </a>
      {heading.subheadings.length > 0 && (
        <ul className="ml-3">
          {heading.subheadings.map((subheading: any) => (
            <TableOfContentsHeading key={subheading} heading={subheading} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default TableOfContentsHeading;
