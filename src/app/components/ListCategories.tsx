import React from "react";
import Category from "./Category";
import { getCategories } from "@/lib/mdx";

interface Props {
  activeCategory?: string;
}

async function ListCategories({ activeCategory }: Readonly<Props>) {
  const categories = await getCategories();
  return (
    <div className="relative flex flex-wrap min-w-full gap-5">
      <Category />
      {categories.map((category: string, index) => (
        <Category key={index} name={category} activeCategory={activeCategory} />
      ))}

      <div className="hidden sm:block absolute w-full bottom-0 border-b-2 -z-40 dark:border-gray-600"></div>
    </div>
  );
}

export default ListCategories;
