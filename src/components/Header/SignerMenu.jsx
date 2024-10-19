import React from "react";
import { Link } from "react-router-dom";

function SignerMenu() {
  return (
    <div className=" items-center justify-evenly w-[100%] text-[1.2rem] mt-[15px]  p-3 z-10 text-[--textSecondary] hidden lg:flex"  >
      <div className="flex items-center gap-8">
        <Link>Key Feaatures </Link>
        <Link>FAQ</Link>
        <Link>Support</Link>
        <Link to="/">Tonkeeper</Link>
      </div>
      <div className="flex items-center gap-8">
      <Link>News </Link>
        <Link>Chat</Link>
        <Link>Twitter</Link>
        <Link >Discord </Link>
      </div>
    </div>
  );
}

export default SignerMenu;
