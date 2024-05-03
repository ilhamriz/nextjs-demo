import { getAllPostsMeta } from "@/lib/mdx";
import ListPosts from "./components/ListPosts";
import TitlePage from "./components/TitlePage";
import ListCategories from "./components/ListCategories";

async function Home() {
  const MAX_POSTS = 5; // max number of posts to show on the home page
  // const posts = await getPosts(MAX_POSTS);
  const posts = await getAllPostsMeta();

  return (
    <>
      <TitlePage title="Blog Title" />
      <ListCategories />

      <div>
        <h2 className="text-lg font-medium tracking-wide text-end">
          Latest Posts
        </h2>
        <ListPosts FirstBig={true} posts={posts} />
      </div>
    </>
  );
}

export default Home;
