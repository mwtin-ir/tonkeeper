import React from "react";
import Typewriter from "typewriter-effect";
import { RxLaptop } from "react-icons/rx";
import Button from "../button";
import { BiLogoTelegram } from "react-icons/bi";
import { FaApple } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import IconSvg from "../IconSvg";
function TopMain() {
  return (
    <section className="w-[100%] flex flex-col items-center justify-center mt-[50px] lg:mt-[80px]">
      <div className="flex items-center gap-4  justify-center w-[100%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="97"
          height="96"
          fill="none"
          viewBox="0 0 97 96"
          className="hidden lg:block"
        >
          <path
            fill="#45AEF5"
            d="M48.5 45.333 91.167 26 48.5 93.333z"
            opacity="0.75"
          ></path>
          <path
            fill="#45AEF5"
            d="M48.5 45.333 5.833 26 48.5 93.333z"
            opacity="0.5"
          ></path>
          <path
            fill="#45AEF5"
            d="M48.5 45.333 5.833 26 48.5 6.667 91.167 26z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="50"
          fill="none"
          viewBox="0 0 97 96"
          className="lg:hidden"
        >
          <path
            fill="#45AEF5"
            d="M48.5 45.333 91.167 26 48.5 93.333z"
            opacity="0.75"
          ></path>
          <path
            fill="#45AEF5"
            d="M48.5 45.333 5.833 26 48.5 93.333z"
            opacity="0.5"
          ></path>
          <path
            fill="#45AEF5"
            d="M48.5 45.333 5.833 26 48.5 6.667 91.167 26z"
          ></path>
        </svg>
        <h1 className="xl:text-[100px] lg:text-[80px] text-[45px] text-[--textPrimary] font-bold">
          Tonkeeper
        </h1>
      </div>

      <h1 className="xl:text-[7rem] lg:text-[5rem] md:text-[4rem] text-[2.8rem] text-center  text-[--accentBlue] font-bold   mx-auto lg:max-w-[90%] ">
        <Typewriter
          loop={5}
          onInit={(typewriter) => {
            typewriter
              .typeString("open-source")
              .pauseFor(5000)
              .deleteAll()
              .typeString("live on crypto")
              .pauseFor(6000)
              .deleteAll()
              .typeString(" all platforms")
              .pauseFor(6000)
              .deleteAll()
              .typeString("browser widgets")
              .pauseFor(6000)
              .deleteAll()
              .typeString("native mobile apps")
              .pauseFor(6000)
              .deleteAll()
              .start();
          }}
        />
      </h1>
      <p
        className="text-center text-[18px] lg:max-w-[35%] max-w-[80%] mx-auto text-[--textSecondary] my-[30px]
"
      >
        Tonkeeper is your very personal wallet. Receive, buy and spend crypto
        with ease
      </p>
      <div className="flex items-center gap-3 lg:gap-9 flex-col lg:flex-row w-[100%] justify-center">
        <Button
          text="Tonkeeper iOS"
          to="https://apps.apple.com/us/app/tonkeeper-ton-wallet/id1587742107"
        >
          <FaApple className="text-[2rem]" />
        </Button>
        <Button
          text="Tonkeeper Android "
          to="#"
          className="group "
          secIcon={<IoIosArrowDown className="text-[1.5rem]" />}
        >
          <FaAndroid className="text-[2rem]" />
          <div className="group-hover:bock hidden bg-[--backgroundContent]  p-[8px_15px]  ">
         
       
          
          </div>
        </Button>
        <Button text="Tonkeeper Pro" to="#">
          <RxLaptop className="text-[2rem]" />
        </Button>
        <Button text="In Telegram " to="https://t.me/tonkeeper">
          <BiLogoTelegram className="text-[2rem]" />
        </Button>
      </div>

      <p
        className="text-center text-[18px] lg:max-w-[13%] max-w-[80%] mx-auto text-[--textSecondary] my-[30px]
"
      >
        Browsers extensions
      </p>
      <div className="flex items-center gap-[15px] mb-[20px]">
        <IconSvg to="https://chromewebstore.google.com/detail/tonkeeper-%E2%80%94-wallet-for-to/omaabbefbmiijedngplfjmnooppbclkk?utm_source=tonkeeper_index">
          <img
            src="./images/svgexport-8.svg"
            alt="chrome"
            className="size-[28px]"
          />
        </IconSvg>
        <IconSvg to="https://addons.mozilla.org/en-US/firefox/addon/tonkeeper/?utm_source=tonkeeper_index">
          <img
            src="./images/svgexport-9.svg"
            alt="chrome"
            className="size-[28px]"
          />
        </IconSvg>
        <IconSvg to="https://chromewebstore.google.com/detail/tonkeeper-%E2%80%94-wallet-for-to/omaabbefbmiijedngplfjmnooppbclkk?utm_source=tonkeeper_index">
          <img
            src="./images/svgexport-10.svg"
            alt="chrome"
            className="size-[28px]"
          />
        </IconSvg>
        <IconSvg to="https://chromewebstore.google.com/detail/tonkeeper-%E2%80%94-wallet-for-to/omaabbefbmiijedngplfjmnooppbclkk?utm_source=tonkeeper_index">
          <img
            src="./images/svgexport-11.svg"
            alt="chrome"
            className="size-[28px]"
          />
        </IconSvg>
        <IconSvg to="https://chromewebstore.google.com/detail/tonkeeper-%E2%80%94-wallet-for-to/omaabbefbmiijedngplfjmnooppbclkk?utm_source=tonkeeper_index">
          <img
            src="./images/svgexport-12.svg"
            alt="chrome"
            className="size-[28px]"
          />
        </IconSvg>
      </div>
      <div className="l11obuzf"></div>
    </section>
  );
}

export default TopMain;
