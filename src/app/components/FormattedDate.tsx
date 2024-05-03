import React from "react";

interface Props {
  date: Date;
}

function FormattedDate({ date }: Readonly<Props>) {
  const newDate = new Date(date);

  return (
    <time
      className="text-sm font-bold text-opacity-60"
      dateTime={newDate.toISOString()}
    >
      {newDate.toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}
    </time>
  );
}

export default FormattedDate;
