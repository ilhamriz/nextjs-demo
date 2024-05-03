import ListRelatedPosts from "@/app/components/ListRelatedPosts";
import MDXWrapper from "@/app/components/MDXWrapper";
import Share from "@/app/components/Share";
import TableOfContents from "@/app/components/TableOfContents";
import BlogPost from "@/app/layouts/BlogPost";
import {
  getAllPostsMeta,
  getHeadings,
  getPostBySlug,
  renderToString,
} from "@/lib/mdx";

export async function generateMetadata({ params }) {
  const { meta } = await getPostBySlug(params.slug);
  return { title: meta.title, description: meta.description };
}

const Page = async ({ params }) => {
  const { meta, content } = await getPostBySlug(params.slug);
  const posts = await getAllPostsMeta();
  const MAX_POSTS = 3;

  const getRelatedPosts = (post) => {
    const lowercaseTags = post.tags.map((tag) => tag.toLowerCase());
    const relatedPosts = posts.filter(
      (p) =>
        p.slug !== post.slug &&
        p.tags.some((t) => lowercaseTags.includes(t.toLowerCase()))
    );
    return relatedPosts.slice(0, MAX_POSTS);
  };

  const contentString = await renderToString(content);
  const headings = getHeadings(contentString);

  return (
    <BlogPost data={meta}>
      <div className="grid grid-cols-1 md:grid-cols-[20%_auto] gap-10 mt-8">
        {/* ASIDE */}
        <aside className="md:flex flex-col gap-8 hidden">
          <Share />
          <div className="sticky top-24 self-start hidden md:block transition-all duration-200">
            {headings && headings.length > 0 && (
              <TableOfContents headings={headings} />
            )}
          </div>
        </aside>

        <article className="max-w-full w-full">
          <MDXWrapper headings={headings}>
            <div
              id="mdx-wrapper"
              className="prose prose-lg md:prose-xl dark:prose-invert mb-12 min-w-full dark:prose-pre:bg-[#111827]"
            >
              {content}
            </div>
          </MDXWrapper>

          <footer>
            <h2 className="font-bold text-lg dark:text-white mb-6">
              Artículos Relacionados
            </h2>
            <ListRelatedPosts posts={getRelatedPosts(meta)} />
          </footer>
        </article>
      </div>
    </BlogPost>
  );
};

export default Page;
