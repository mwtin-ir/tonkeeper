import React from "react";

function EndMainCard({ link, children, title, src, dec }) {
  return (
    <a href={link} className="w-[100%]">
      <div className="relative h-[360px] lg:h-[337px]   lg:overflow-hidden  z-10 w-[100%]  grid grid-rows-2 justify-between grid-flow-col items-center bg-[--backgroundContent] rounded-[30px] shadow-xl py-[20px] px-[15px] gap-[15px] hover:mb-[15px]  hover:ml-[10px] transition duration-800 ">
        {children}
        <div className="flex flex-col gap-5">
          <h3 className="text-[1.8rem] font-bold">{title}</h3>
          <div className="flex items-center">
            <p className="text-[1.1rem] font-medium lg:text-[1.3rem]  text-[--textTertiary] w-[99%]">
              {dec}
            </p>
            <img
              src={src}
              alt=""
              className="w-[15%] rounded-xl hidden lg:block "
            />
          </div>
        </div>
      </div>
    </a>
  );
}

export default EndMainCard;
