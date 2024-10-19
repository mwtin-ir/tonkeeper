import React from "react";
import { Link } from "react-router-dom";

function IconSvg({ to, children }) {
  return (
    <Link to={to}>
      <div className="rounded-full p-2.5 lg:p-4  bg-[--backgroundContent]">
        {children}
      </div>
    </Link>
  );
}

export default IconSvg;
