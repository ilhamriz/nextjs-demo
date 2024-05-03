"use client";
import { cn, sluglify } from "@/lib";
import { usePathname } from "next/navigation";

interface Props {
  name?: string;
  activeCategory?: any;
}

function Category({ name = "View All", activeCategory }: Readonly<Props>) {
  const unsluglifyNameCategory = sluglify(name.toLowerCase());
  const currentPath = usePathname();
  const isActive =
    activeCategory?.toLocaleLowerCase() === unsluglifyNameCategory ||
    (currentPath === "/" && name === "View All");

  return (
    <a
      href={
        name === "View All"
          ? "/"
          : sluglify(`/category/${unsluglifyNameCategory}`)
      }
      className={cn(
        `text-gray-600 dark:text-gray-300  pb-2.5 first-letter:uppercase font-medium hover:text-gray-800 border-b-2 border-opacity-0 dark:border-opacity-0 border-black dark:border-white dark:hover:border-white hover:border-opacity-100 transition-colors duration-150 ease-linear  `,
        isActive &&
          `border-black border-b-2 text-black z-10  dark:border-white dark:text-white dark:border-opacity-100 border-opacity-100`
      )}
    >
      {name}
    </a>
  );
}

export default Category;
