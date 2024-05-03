interface Props {
  tag: string;
}

function Tag({ tag }: Readonly<Props>) {
  return (
    <a href={`/tags/${tag.toLowerCase()}`} aria-label={tag}>
      <span className="bg-indigo-600 font-semibold text-white dark:bg-indigo-900 dark:text-white shadow text-sm w-fit px-2 py-1 md:px-5 md:py-2 rounded-full">
        {tag ?? "Blog Tag"}
      </span>
    </a>
  );
}

export default Tag;
