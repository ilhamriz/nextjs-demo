import React from "react";
import FormattedDate from "../components/FormattedDate";
import Image from "next/image";
import Tag from "../components/Tag";

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
    tags: string[];
    slug: string;
  };
  children: React.ReactNode;
}

function BlogPost({ data, children }: Readonly<Props>) {
  const { title, publishDate, readTime, image, tags } = data;

  return (
    <article className="min-w-full md:py-4 sm:max-w-none md:max-w-none">
      <header className="mb-3 flex flex-col justify-center items-center gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-center gap-x-1">
            <p className="text-center text-sm text-opacity-50">
              Published <FormattedDate date={publishDate} />
            </p>
            <p className="text-center text-sm text-opacity-50 font-bold">
              - {readTime} min read
            </p>
          </div>
          <h1 className="text-center text-4xl md:text-6xl md:pb-2.5 font-semibold">
            {title}
          </h1>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-2 gap-y-4 md:gap-5">
          {tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
      </header>

      {image && (
        <Image
          src={image}
          width={1000}
          height={500}
          quality={100}
          loading="eager"
          className="rounded-md w-full max-h-[300px]  md:max-h-[500px] my-8 object-cover"
          alt={`img of ${title}`}
        />
      )}

      <hr />

      <div>{children}</div>
    </article>
  );
}

export default BlogPost;
