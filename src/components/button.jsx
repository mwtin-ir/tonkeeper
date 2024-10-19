import React from "react";
import { Link } from "react-router-dom";

function Button({ to, children, className, text,secIcon }) {
  return (
    <Link to={to}>
      <button className={`p-[10px_15px] bg-white ${className} flex items-center text-[20px] rounded-full justify-center text-[--constantBlack]  gap-1 font-semibold w-[320px] lg:w-auto text-center  `}>
        {children}
        {text}
        {secIcon}
      </button>
    </Link>
  );
}

export default Button;
