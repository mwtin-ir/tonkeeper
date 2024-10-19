import React from "react";

function TextCard({ title, dec }) {
  return (
    <div className="flex flex-col gap-[15px] max-w-[816px] ">
      <h3 className="text-[28px] font-medium">{title}</h3>
      <p className="text-[20px] text-[--textSecondary]">{dec}</p>
    </div>
  );
}

export default TextCard;
