import React from "react";
import PostCard from "./PostCard";
import { cn } from "@/lib";

interface Props {
  posts: any;
  FirstBig?: boolean;
}

function ListPosts({ posts, FirstBig }: Readonly<Props>) {
  return (
    <section
      className={cn(
        `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8 mt-3`,
        FirstBig && `md:[&>*:first-child]:col-span-2`
      )}
    >
      {posts.map((post: any) => {
        return <PostCard key={post.slug} data={post} />;
      })}
    </section>
  );
}

export default ListPosts;
