import React from "react";
import { BiWorld } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import ArticleItem from "../components/ArticleItem";
import Footer from "../components/Fotter/Footer";
import { Link } from "react-router-dom";
function Faq() {
  return (
    <div className="max-w-[1080px] mx-auto flex flex-col  gap-[60px] my-[20px]">
      <header className="flex items-center justify-between px-[10px]  ">
        <div className="flex items-center gap-[12px]">
          <Link to="/">
            {" "}
            <img src="./images/logo.png" alt="" className="w-[48px]" />
            <h3 className="text-[28px] font-medium hidden lg:inline-block">
              Tonkeeper
            </h3>
          </Link>
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
        <div className="flex items-center gap-8 w-[90%] lg:w-auto  mx-auto">
          <div className="flex items-center bg-[--backgroundContent] px-6 py-2 gap-4 rounded-lg text-[--textSecondary] w-[320px] text-[18px] hover:border-2  hover:border-blue-400">
            <span>
              <FaSearch size-36 />
            </span>
            <input
              type="text"
              className="bg-[unset] w-[100%] outline-none border-none"
              placeholder="Search the knowledge base "
            />
          </div>
          <div className="rounded p-1.5 bg-blue-400">
            <FaSearch className="w-[28px] h-[28px]" />
          </div>
        </div>
      </section>
      <section className="rounded-[32px] bg-[--backgroundContent] px-[25px] py-[20px] flex flex-col items-center gap-[20px] w-[96%] mx-auto">
        <span>
          <img
            src="https://ddejfvww7sqtk.cloudfront.net/faq-assets/tonkeeper/icons/84/bookmark.svg"
            alt=""
          />
        </span>
        <h3 className="text-[28px] font-medium"> Most Popular Articles</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ArticleItem title="How to access an existing wallet?" />
          <ArticleItem title="How to create a  new  wallet?" />
          <ArticleItem title="the Battery " />
          <ArticleItem title="inactive wallet address " />
          <ArticleItem title="Frequent transacion errors " />
          <ArticleItem title="What is a speed phrase " />
          <ArticleItem title="NFTs and token visibility " />
          <ArticleItem title="Connected apps" />
          {/* <ArticleItem  title="What if I can't receive TON on the exchnage?"/> */}
          <ArticleItem title="Waht is Tonkeeper?" />
        </div>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-[18px] ">
        <FaqCard
          img="https://ddejfvww7sqtk.cloudfront.net/faq-assets/tonkeeper/icons/84/ton.svg"
          titile="About Tonkeeper "
          x={16}
        />
        <FaqCard
          img="https://keeper-helpscout.fra1.cdn.digitaloceanspaces.com/ic-faq-84.svg"
          titile="About Ton blockchain "
          x={3}
        />
        <FaqCard
          img="https://keeper-helpscout.fra1.cdn.digitaloceanspaces.com/ic-inforamtion-circle-84.svg"
          titile="Crypto Basics "
          x={7}
        />
        <FaqCard
          img="https://ddejfvww7sqtk.cloudfront.net/faq-assets/tonkeeper/icons/84/shield.svg"
          titile="Security "
          x={3}
        />
        <FaqCard
          img="https://keeper-helpscout.fra1.cdn.digitaloceanspaces.com/ic-troubleshooting-84.svg"
          titile="Troubleshooting "
          x={8}
        />
        <FaqCard
          img="https://ddejfvww7sqtk.cloudfront.net/faq-assets/tonkeeper/icons/84/stack.svg"
          titile="NFTs & Token "
          x={4}
        />
      </section>
      <Footer />
    </div>
  );
}

export default Faq;

export function FaqCard({ img, titile, x }) {
  return (
    <div className="flex flex-col gap-[10px] items-center bg-[--backgroundContent] rounded-[32px]  px-[25px] py-[25px] hover:bg-[--backgroundTint] w-[96%] mx-auto ">
      <img src={img} alt="" />
      <h3 className="text-[28px] text-center font-semibold">{titile}</h3>
      <p className="text-[20px] text-[--textSecondary]">
        {x} {x > 1 ? "articles" : "article "}
      </p>
    </div>
  );
}
