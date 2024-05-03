import ListPosts from "@/app/components/ListPosts";
import TitlePage from "@/app/components/TitlePage";
import { getPostByTag } from "@/lib/mdx";
import React from "react";

export async function generateMetadata({ params }) {
  return { title: `${params.tag} • NextJS Demo` };
}

async function page({ params }) {
  const posts = await getPostByTag(params.tag);
  return (
    <>
      <TitlePage title={params.tag} />
      <ListPosts posts={posts} />
    </>
  );
}

export default page;
