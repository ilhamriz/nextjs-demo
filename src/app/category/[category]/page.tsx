import ListCategories from "@/app/components/ListCategories";
import ListPosts from "@/app/components/ListPosts";
import TitlePage from "@/app/components/TitlePage";
import { unsluglify } from "@/lib";
import { getAllPostsMeta } from "@/lib/mdx";

interface Props {
  params: any;
}

export async function generateMetadata({ params }: any) {
  return { title: `${params.category} • NextJS Demo` };
}

async function page({ params }: Readonly<Props>) {
  const allPosts = await getAllPostsMeta();
  const unsluglifyNameCategory = unsluglify(params.category!.toLowerCase());
  const posts = allPosts.filter(
    (post: any) => post?.category.toLowerCase() === unsluglifyNameCategory
  );

  return (
    <>
      <TitlePage title={unsluglifyNameCategory} />
      <ListCategories activeCategory={params.category} />
      <ListPosts posts={posts} />
      {/* <Pagination page={page} /> */}
    </>
  );
}

export default page;
