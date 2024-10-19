import React, { useState } from "react";
import Menu from "./Menu";

export default function Header() {
  const [showItems, setShowItems] = useState(false);
  return (
    <header className=" flex items-center flex-1  relative">
      <div className="bg"></div>
      <Menu setShowItems={setShowItems} showItems={showItems} />
    </header>
  );
}
