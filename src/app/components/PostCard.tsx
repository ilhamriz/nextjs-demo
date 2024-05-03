import Image from "next/image";
import React from "react";
import ArrowUp from "./icons/ArrowUp";
import FormattedDate from "./FormattedDate";

interface Props {
  data: {
    title: string;
    description: string;
    publishDate: any;
    readTime: number;
    image: string;
    image_width: number;
    image_height: number;
    category: string;
    slug: string;
  };
}

function PostCard({ data }: Readonly<Props>) {
  const { title, description, image, category, slug } = data;

  return (
    <article className="grid grid-rows-[300px_auto] md:grid-rows-[300px_220px] min-h-full group">
      <a className="relative overflow-hidden" href={`/post/${slug}/`}>
        <Image
          src={image}
          width={600}
          height={200}
          alt={`img of ${title}`}
          className="h-full min-w-full object-cover hover:scale-[101%] transition-all duration-200 rounded-[2px]"
        />

        <div className="z-30 absolute bottom-0 w-full h-20">
          <div className="-z-10 absolute bottom-0 glass w-full min-h-full"></div>
          <div className="flex items-center justify-between gap-x-1 text-white px-6 py-4">
            <div className="flex flex-col gap-1 items-center justify-center">
              <FormattedDate date={data.publishDate} />
              <span className="text-sm"> {data.readTime} min read</span>
            </div>

            <span className="pb-4">{category}</span>
          </div>
        </div>
      </a>

      <div className="flex justify-between flex-col gap-4 md:gap-0 py-6 pl-1">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <a
              className="text-2xl font-semibold -tracking-wider"
              href={`/post/${slug}/`}
            >
              {title}
            </a>
          </div>

          <p className="overflow-hidden line-clamp-3 text-gray-700 dark:text-white mb-5 font-[400] md:pr-[15%]">
            {description}
          </p>
        </div>

        <footer className="flex justify-between items-center">
          <a
            href={`/post/${slug}/`}
            className="flex justify-center items-center dark:text-white rounded-full hover:translate-x-1 transition-transform duration-150 ease-in-out font-semibold gap-1 group"
            aria-label={`go to ${title}`}
          >
            Read Post{" "}
            <span className="mt-[1px] group-hover:rotate-45 transition-transform duration-250 ease-in-out">
              <ArrowUp width="18" height="18" />
            </span>
          </a>
        </footer>
      </div>
    </article>
  );
}

export default PostCard;
