import React from "react";

function EasyCard({ title, obj, img }) {
  return (
    <div className="flex flex-col  gap-[24px] items-start justify-center rounded-3xl pt-4 px-[30px] pb-[24px]  bg-[--backgroundContent] min-w-[300px] max-w-[380px] w-[28%] flex-1 border border-solid border-[--borderPrimary]">
      <h3 className="text-[2rem] ">{title}</h3>
      <p className="text-[16px] ">{obj}</p>
      <img src={img} alt="" className="" />
    </div>
  );
}

export default EasyCard;
