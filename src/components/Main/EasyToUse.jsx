import React from "react";
import EasyCard from "./EasyCard";

function EasyToUse({ title, dec, children }) {
  return (
    <section className="flex flex-col items-start justify-center p-4  ">
      <h1 className="text-[2.2rem] lg:text-[3rem]  font-bold">{title}</h1>
      <p className="text-start text-[18px] lg:max-w-[60%] text-[--textSecondary] my-[30px]">
        {dec}
      </p>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-[20px] pb-[30px] ">
        {children}
      </div>
    </section>
  );
}

export default EasyToUse;
