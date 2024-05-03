import { cn } from "@/lib";
import Image from "next/image";
import React from "react";

interface Props {
  posts: any;
}

function ListRelatedPosts({ posts }: Readonly<Props>) {
  return (
    <section
      className={cn(`flex flex-col md:flex-row sm:justify-between gap-8`)}
    >
      {posts.length > 0 ? (
        posts.map((post: any) => {
          return (
            <a
              key={post.slug}
              href={`/post/${post.slug}/`}
              className="flex flex-wrap gap-2 hover:underline"
            >
              <div className="min-h-full">
                <Image
                  src={post.image}
                  width={200}
                  height={200}
                  className="w-16 h-16 object-cover rounded-full  "
                  alt={`img of ${post.title}`}
                />
              </div>
              <header className="flex justify-center items-center">
                <span className="font-medium">{post.title}</span>
              </header>
            </a>
          );
        })
      ) : (
        <span className="text-gray-500">
          There are no related posts yet. 😢
        </span>
      )}
    </section>
  );
}

export default ListRelatedPosts;
