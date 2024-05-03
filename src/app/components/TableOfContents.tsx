import React, { Fragment } from "react";
import TableOfContentsHeading from "./TableOfContentsHeading";

interface Props {
  headings: TableOfContent[];
}

type TableOfContent = {
  depth: number;
  text: string;
  slug: string;
  subheadings: TableOfContent[];
};

function TableOfContents({ headings }: Readonly<Props>) {
  const toc = buildToc(headings);
  function buildToc(headings: TableOfContent[]) {
    let toc: TableOfContent[] = [];
    let parentHeadings = new Map();
    headings.forEach((h) => {
      let heading = { ...h, subheadings: [] };
      parentHeadings.set(heading.depth, heading);
      // Change 2 to 1 if your markdown includes your <h1>
      if (heading.depth === 1 || heading.depth === 2) {
        toc.push(heading);
      } else {
        parentHeadings.get(heading.depth - 1).subheadings.push(heading);
      }
    });
    return toc;
  }
  return (
    <nav className="max-w-xs dark:text-black">
      <h1 className="font-bold mb-3 text-2xl dark:text-white">Index</h1>
      <ul className="[text-wrap:balance] flex flex-col gap-1">
        {toc.map((heading) => (
          <Fragment key={heading.slug}>
            <TableOfContentsHeading heading={heading} />
          </Fragment>
        ))}
      </ul>
    </nav>
  );
}

export default TableOfContents;
