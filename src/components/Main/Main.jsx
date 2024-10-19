import React from "react";
import TopMain from "./TopMain";

import MiddleMain from "./MiddleMain";
import EndMain from "./EndMain";
import "./main.css";

function Main() {
  return (
    <main className="gap-[60px] flex flex-col justify-center items-center max-w-[1069px] mx-auto ">
      <TopMain />
      <MiddleMain />
      <EndMain />
    </main>
  );
}

export default Main;
