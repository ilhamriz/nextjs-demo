"use client";
import { useEffect } from "react";

function MDXWrapper({ headings, children }: any) {
  useEffect(() => {
    setID();
    fnObserver();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setID = () => {
    const depths = headings.map((h: any) => h.depth);
    const newDepths = Array.from(new Set(depths));

    const wrapper = document.getElementById("mdx-wrapper");
    newDepths.forEach((depth) => {
      const head = wrapper?.querySelectorAll(`h${depth}`);
      head?.forEach((tag) => {
        const data = headings.find((h: any) => h.text === tag.innerHTML);
        tag.setAttribute("id", data.slug);
      });
    });
  };

  const fnObserver = () => {
    function handleIntersection(
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) {
      entries.forEach((entry) => {
        const index = document.querySelector(
          `aside a[href="#${entry.target.id}"]`
        );

        if (entry.isIntersecting) {
          index?.classList.remove("bg-slate-200", "dark:bg-slate-800"); // remove bg
          index?.classList.add(
            "bg-indigo-600",
            "dark:bg-indigo-700",
            "text-white",
            "font-bold",
            "transition-colors",
            "duration-200"
          );
        } else {
          index?.classList.add("bg-slate-200", "dark:bg-slate-800"); // add bg
          index?.classList.remove(
            "bg-indigo-600",
            "dark:bg-indigo-700",
            "text-white",
            "font-bold",
            "transition-colors",
            "duration-200"
          );
        }
      });
    }

    const headings = document.querySelectorAll(
      "div.prose h1, div.prose h2, div.prose h3, div.prose h4, div.prose h5, div.prose h6"
    );

    const options = {
      root: null,
      rootMargin: " 15% 0px 0% 0px ",
      threshold: 1,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    headings.forEach((heading) => {
      observer.observe(heading);
    });
  };

  return <>{children}</>;
}

export default MDXWrapper;
