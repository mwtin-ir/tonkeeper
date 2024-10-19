import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
function Menu() {
  const [showItems, setShowItems] = useState(false);
  const divRef = useRef(null);
  const iconRef= useRef(null )
  const handleClickOutSide = (e) => {
      if (divRef.current && !divRef.current.contains(e.target) && iconRef.current && !iconRef.current.contains(e.target)) {
        setShowItems(false);
      }
    
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutSide);
    return () => {
      document.removeEventListener("click", handleClickOutSide);
    };
  }, []);
  return (
    <div className="flex items-center justify-end lg:justify-center w-[100%]  text-[--textPrimary] p-[35px_25px] xl:p-[50px_20px] relative  ">
      <ul className="hidden lg:flex items-center gap-[45px]  text-[18px]">
        <Link to="/signer">Signer for Tonkeeper</Link>
        <Link to="/suport">FAQ</Link>
        <Link>Support</Link>
        <Link>Documentation</Link>
        <Link>Bug Bounty</Link>
        <Link to="blog">Blog</Link>
        <Link>GitHub</Link>
      </ul>
<span ref={iconRef}>      <FiMenu
        className="text-[1.8rem] lg:hidden"
        onClick={() => setShowItems(true)}
        
      /></span>
      {showItems && (
        <div className="absolute top-[25px] right-[20px] z-10  flex flex-col bg-[--backgroundContent] p-[20px_22px] rounded-xl gap-[20px] text-[18px] " ref={divRef}>
          <Link to="/signer">Signer for Tonkeeper</Link>
          <Link to="/suport">FAQ</Link>
          <Link>Support</Link>
          <Link>Documentation</Link>
          <Link>Bug Bounty</Link>
          <Link to="blog">Blog</Link>
          <Link>GitHub</Link>
        </div>
      )}
    </div>
  );
}

export default Menu;
