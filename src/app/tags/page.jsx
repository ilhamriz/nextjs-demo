import { getTags } from "@/lib/mdx";
import TitlePage from "../components/TitlePage";

export async function generateMetadata() {
  return { title: `Tags • NextJS Demo` };
}

const Page = async () => {
  const tags = await getTags();
  return (
    <>
      <TitlePage title="Tags" />
      <div className="flex justify-center flex-wrap gap-4">
        {tags.map((tag) => (
          <a
            key={tag}
            href={`/tags/${tag}`}
            className="inline-block bg-gray-200  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            #{tag}
          </a>
        ))}
      </div>
    </>
  );
};

export default Page;
