import React from "react";
import AvatorImages from "../AvatorImages";
import EndMainCard from "../EndMainCard";
import ConfidentialCard from "./ConfidentialCard";
import Button from "../button";
import { FaAndroid, FaApple } from "react-icons/fa";
import { RxLaptop } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import IconSvg from "../IconSvg";
import { IoMdDownload } from "react-icons/io";
import { Link } from "react-router-dom";
function EndMain() {
  return (
    <section className="flex flex-col gap-[30px] w-[90%] ">
      <h2 className="text-[2.2rem] font-bold">Make Tonkeeper personal</h2>
      <h4 className="text-[1.4rem] text-[--textTertiary]">
        Use your favorite decentralized apps & find new ones, without leaving
        your wallet.
      </h4>
      <a href="https://getgems.io/">
        <div className="flex-col items-center pt-[15px]">
          <div className="flex items-center flex-col-reverse lg:flex-row  overflow-hidden  p-[20px_24px] bg-[--backgroundContent] rounded-[24px] hover:mb-[18px] hover:ml-[22px] gap-[15px]">
            <div className="flex flex-col justify-between">
              <img
                src="./images/svgexport-13.svg"
                alt=""
                className="w-[56px] h-[56px] mb-[150px] hidden lg:block   "
              />
              <div>
                <h4 className="text-[1.6rem] font-semibold">Getgems</h4>
                <h5 className="text-[1.4rem] text-[--textTertiary]">
                  The Home of NFT on The Open Network
                </h5>
              </div>
            </div>
            <div className="flex flex-col  items-start lg:items-end  gap-[15px] lg:-mt-[80px] ">
              <div className="flex gap-[10px]">
                <AvatorImages
                  src="./images/img-gg-1.png"
                  className="w-[56px]"
                />
                <AvatorImages
                  src="./images/img-gg-2.png"
                  className="w-[56px]"
                />
                <AvatorImages
                  src="./images/img-gg-3.png"
                  className="w-[56px]"
                />
              </div>
              <div className="flex gap-[10px]">
                <AvatorImages
                  src="./images/img-gg-4.png"
                  className="w-[56px]"
                />
                <AvatorImages
                  src="./images/img-gg-5.png"
                  className="w-[56px]"
                />
                <AvatorImages
                  src="./images/img-gg-6.png"
                  className="w-[56px]"
                />
                <AvatorImages
                  src="./images/img-gg-7.png"
                  className="w-[56px]"
                />
                <AvatorImages
                  src="./images/img-gg-8.png"
                  className="w-[56px]"
                />
              </div>
              <div className="flex gap-[10px]">
                <AvatorImages
                  src="./images/img-gg-9.png"
                  className="w-[55px]"
                />
                <AvatorImages
                  src="./images/img-gg-10.png"
                  className="w-[55px]"
                />
                <AvatorImages
                  src="./images/img-gg-11.png"
                  className="w-[55px]"
                />
                <AvatorImages
                  src="./images/img-gg-12.png"
                  className="w-[55px]"
                />
              </div>
            </div>
          </div>
        </div>
      </a>
      <div className="flex flex-col lg:flex-row  items-center justify-between gap-[30px] ">
        <EndMainCard
          title="TON Domains"
          dec="Service that allow users to assign a human-readable name to wallets"
          link="https://dns.ton.org/"
          src="./images/svgexport-14.svg"
        >
          <div className="toon rounded-xl">tonkeeper.ton</div>
        </EndMainCard>

        <EndMainCard
          title="TON Diamonds"
          dec="Service that allow users to assign a human-readable name to wallets"
          link="https://dns.ton.org/"
          src="./images/svgexport-15.svg"
        >
          <div className="flex items-center gap-6">
            <AvatorImages src="./images/img-diamond-1.png" />
            <AvatorImages src="./images/img-diamond-2.png" />
            <AvatorImages src="./images/img-diamond-3.png" />
            <AvatorImages src="./images/img-diamond-4.png" />
          </div>
        </EndMainCard>
      </div>
      <div className="flex items-center flex-col lg:flex-row  justify-between gap-[30px]">
        <EndMainCard
          title="STOON.fi"
          dec="Service that allow users to assign a human-readable name to wallets"
          link="https://dns.ton.org/"
          src="./images/svgexport-18.svg"
        >
          <div className="flex items-center flex-1 gap-[8px] justify-start w-[100%]">
            <img
              src="./images/svgexport-16.svg"
              alt=""
              className="w-[95px] rounded-[10%_50%_10%_50%]"
            />
            <img src="./images/svgexport-17.svg" alt="" className="w-[95px]" />
          </div>
        </EndMainCard>

        <EndMainCard
          title="Fragment"
          dec="Service that allow users to assign a human-readable name to wallets"
          link="https://dns.ton.org/"
          src="./images/svgexport-19.svg"
        >
          <div className="flex items-center gap-6">
            <AvatorImages src="./images/img-diamond-1.png" />
            <AvatorImages src="./images/img-diamond-2.png" />
            <AvatorImages src="./images/img-diamond-3.png" />
            <AvatorImages src="./images/img-diamond-4.png" />
          </div>
        </EndMainCard>
      </div>
      <div className="flex flex-col gap-[25px]">
        <h2 className="text-[2.2rem] font-bold">Confidential and Protected</h2>
        <h4 className="text-[1.2rem] w-[80%] text-[--textTertiary]">
          Non-custodial wallets for greater security, control, and privacy to
          users, making them a preferred choice for individuals who prioritize
          the principles of decentralization and self-sovereignty in managing
          their cryptocurrency assets.
        </h4>
        <div className="grid gird-rows-4  lg:grid-cols-2 items-center justify-between gap-[45px] mt-[25px] text-start">
          <ConfidentialCard
            title="Privacy"
            dec="Non-custodial wallets offer enhanced privacy as users do not need to disclose personal information to a service provider to use the wallet."
          >
            <img src="./images/svgexport-20.svg" alt="" />
          </ConfidentialCard>
          <ConfidentialCard
            title="Security
"
            dec="Since the private keys are held by the user, non-custodial wallets are generally considered more secure compared to custodial wallets."
          >
            <img src="./images/svgexport-21.svg" alt="" />
          </ConfidentialCard>
          <ConfidentialCard
            title="Decentralization"
            dec="Non-custodial wallets align with the decentralized nature of blockchain technology, as users can directly interact with the blockchain without intermediaries."
          >
            <img src="./images/svgexport-22.svg" alt="" />
          </ConfidentialCard>
          <ConfidentialCard
            title="Portability"
            dec="Wallet can be accessed and used across different devices, such as desktop computers, smartphones. This portability allows users to manage their funds on the go.."
          >
            <img src="./images/svgexport-23.svg" alt="" />
          </ConfidentialCard>
        </div>
      </div>
      <div className="flex flex-col   items-start justify-start gap-5 grid-cols-2 nnhj">
        <div className="flex items-center gap-[25px]">
          <Button
            text="Tonkeeper iOS"
            to="https://apps.apple.com/us/app/tonkeeper-ton-wallet/id1587742107"
          >
            <FaApple className="text-[2rem]" />
          </Button>
          <Button
            text="Tonkeeper Android "
            
            className="group relative "
            secIcon={<IoIosArrowDown className="text-[1.5rem]" />}
          >
            <FaAndroid className="text-[2rem]" />
            <div className="group-hover:flex absolute top-[53.5px] flex-col  items-start gap-[15px] w-[100%] rounded-lg text-[--textPrimary] hidden bg-[--backgroundContent]  p-[8px_15px] shadow-gray-300 ">
              <div>
                <Link
                  to="https://play.google.com/store/apps/details?id=com.ton_keeper&pli=1"
                  className="flex items-center gap-3"
                >
                  <FaAndroid className="text-[2rem]" />
                  <span>Google Play </span>
                </Link>
              </div>
              <div>
                <Link
                  to="https://play.google.com/store/apps/details?id=com.ton_keeper&pli=1"
                  className="flex items-center gap-3"
                >
                  <IoMdDownload className="text-[2rem]" />
                  <span>Download APK </span>
                </Link>
              </div>
            </div>
          </Button>
        </div>
        <div className="flex gap-x-[25px] items-center ">
          <Button
            text="Tonkeeper Pro"
            to="#"
            className="bg-[--backgroundContent]  mb-5"
          >
            <RxLaptop className="text-[2rem] " />
          </Button>
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
                className="size-[36px]"
              />
            </IconSvg>
          </div>
        </div>
      </div>
      <div className="l11obuzf"></div>
    </section>
  );
}

export default EndMain;
