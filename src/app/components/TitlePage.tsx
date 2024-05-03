import Shape from "./icons/Shape";

interface Props {
  title: string;
}

function TitlePage({ title }: Readonly<Props>) {
  return (
    <div className="flex justify-start items-center gap-2 title">
      <Shape />
      <h1 className="text-5xl font-bold first-letter:uppercase">
        {title}
      </h1>
    </div>
  );
}

export default TitlePage;
