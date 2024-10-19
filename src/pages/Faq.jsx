import React from "react";
import { BiWorld } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import ArticleItem from "../components/ArticleItem";
function Faq() {
  return (
    <div className="max-w-[1080px] mx-auto flex flex-col  gap-[60px] my-[20px]">
      <header className="flex items-center justify-between px-[10px]  ">
        <div className="flex items-center gap-[12px]">
          <img src="./images/logo.png" alt="" className="w-[48px]" />
          <h3 className="text-[28px] font-medium hidden lg:inline-block">Tonkeeper </h3>
          <h4 className="text-[28px] font-medium text-[--textSecondary]">
            Help Center{" "}
          </h4>
        </div>
        <div className="bg-blue-600 p-1 rounded-lg ">
          <BiWorld className="w-[32px] h-[32px]" />
        </div>
      </header>
      <section className="flex  flex-col items-center gap-[15px] ">
        <h2 className="text-[32px] font-bold ">Looking for Help?</h2>
        <div className="flex items-center gap-8 w-[90%] mx-auto">
          <div className="flex items-center bg-[--backgroundContent] px-6 py-2 gap-4 rounded-lg text-[--textSecondary] w-[320px] text-[18px] hover:border-2  hover:border-blue-400 w-[7%}">
            <span>
              <FaSearch size-36 />
            </span>
            <input
              type="text"
              className="bg-[unset] w-[100%] outline-none border-none"
              placeholder="Search the knowledge base "
            />
            
          </div><div className="rounded p-1.5 bg-blue-400">
              <FaSearch  className="w-[28px] h-[28px]"/>
            </div>
        </div>
      </section>
      <section className="rounded-[32px] bg-[--backgroundContent] px-[25px] py-[20px] flex flex-col items-center gap-[20px] w-[96%] mx-auto">
<span><img src="https://ddejfvww7sqtk.cloudfront.net/faq-assets/tonkeeper/icons/84/bookmark.svg" alt="" /></span>
<h3 className="text-[28px] font-medium"> Most Popular Articles</h3>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <ArticleItem  title='How to access an existing wallet?'/>
    <ArticleItem  title='How to create a  new  wallet?'/>
    <ArticleItem  title='the Battery '/>
    <ArticleItem  title="inactive wallet address "/>
    <ArticleItem  title="Frequent transacion errors "/>
    <ArticleItem  title="What is a speed phrase "/>
    <ArticleItem  title="NFTs and token visibility "/>
    <ArticleItem  title="Connected apps" />
    {/* <ArticleItem  title="What if I can't receive TON on the exchnage?"/> */}
    <ArticleItem  title="Waht is Tonkeeper?"/>

</div>
      </section>
    </div>
  );
}

export default Faq;
