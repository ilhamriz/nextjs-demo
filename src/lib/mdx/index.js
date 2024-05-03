import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

const rootDirectory = path.join(process.cwd(), "src", "app", "content");

export const getPostBySlug = async (slug) => {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);
  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true },
  });

  return { meta: { ...frontmatter, slug: realSlug }, content };
};

export const getAllPostsMeta = async () => {
  const files = fs.readdirSync(rootDirectory);

  let posts = [];

  for (const file of files) {
    const { meta } = await getPostBySlug(file);
    posts.push(meta);
  }

  return posts;
};

export const getCategories = async () => {
  const posts = await getAllPostsMeta();
  const categories = posts.map((post) => post.category).sort();
  return Array.from(new Set(categories));
};

export const getTags = async () => {
  const posts = await getAllPostsMeta();
  const tags = new Set();
  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      tags.add(tag.toLowerCase());
    });
  });

  return Array.from(tags);
};

export const getPostByTag = async (tag) => {
  const posts = await getAllPostsMeta();
  const lowercaseTag = tag.toLowerCase();
  return posts.filter((post) => {
    return post.tags.some(
      (postTag) => postTag.toLowerCase() === lowercaseTag
    );
  });
};

export const renderToString = async (component) => {
  const ReactDOMServer = (await import("react-dom/server")).default;
  const staticMarkup = ReactDOMServer.renderToStaticMarkup(component);
  return staticMarkup;
};

export const getHeadings = (source) => {
  const regex = /<h(\d)>(.*?)<\/h(\d)>/g;

  if (source.match(regex)) {
    return source.match(regex).map((heading) => {
      const head = heading.match(/<h(\d)>/g);
      const depth = head[0].charAt(2);
      const headingText = heading
        .replace(`<h${depth}>`, "")
        .replace(`</h${depth}>`, "");

      const slug = headingText.replace(/ /g, "-").toLowerCase();

      return {
        depth: Number(depth),
        text: headingText,
        slug,
      };
    });
  }

  return [];
};
