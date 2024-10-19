import React from "react";
import SignerHeader from "../components/Header/SignerHeader";
import SignerCard from "../components/SignerCard";
import Footer from "../components/Fotter/Footer";
import Button from "../components/button";
import TextCard from "../components/TextCard";

function Signer() {
  return (
    <div className="flex flex-col flex-1 items-stretch gap-[60px]  ">
      <SignerHeader />
      <div className="flex flex-col max-w-[1082px] mx-auto gap-[3rem]">
        <h2 className="text-[52px] font-bold">Key Features</h2>
        <div className="grid grid-cols-2 gap-[24px]  max-w-[1082px] mx-auto ">
          <SignerCard
            img="./images/svgexport-3.svg"
            title="Seamless Tonkeeper Pairing"
            dec="Pair Signer with Tonkeeper for a smooth and secure transaction experience."
          />
          <SignerCard
            img="./images/svgexport-4.svg"
            title="Transaction Signing"
            dec="Sign transactions easily using QR codes or by pairing with Tonkeeper."
          />
          <SignerCard
            img="./images/svgexport-5.svg"
            title="User-Friendly Interface"
            dec="Navigate the app intuitively and effortlessly for a hassle-free experience."
          />
          <SignerCard
            img="./images/svgexport-6.svg"
            title="High-Security Vault"
            dec="Protect assets with the highest encryption and offline storage standards."
          />
        </div>
      </div>
      <div className="flex items-center relative max-w-[1082px] mx-auto bg-[--backgroundContent] rounded-[32px] overflow-hidden py-[2rem] px-[3rem]  mt-[8rem] ">
        <div className="flex flex-col gap-[15px] signerCard ">
          <img
            src="./images/svgexport-7.svg"
            alt=""
            className="w-[96px]  justify-between h-[100%] "
          />
          <h2 className="text-[3rem] font-bold ">Tonkeeper</h2>
          <p className="text-[20px]   text-[--textSecondary] w-[70%]  ">
            Non-custodial wallet with the best TON blockchain features.
          </p>

          <div className="flex flex-wrap items-center gap-[12px] "></div>
          <Button text="Get Tonkeepr" />
        </div>
        <div className="flex flex-1  items-center w-[60%] ">
          <img src="./images/signer-mobile.png" alt="" />
        </div>
      </div>
      <div className="flex flex-col gap-[80px]  max-w-[1082px] mx-auto items-start ">
        <h3 className="text-[3rem] font-bold  ">FAQ</h3>
        <TextCard
          title="What is Tonkeeper? "
          dec="Tonkeeper is the leading non-custodial TON wallet with over 30M active monthly users. Founded in 2021, Tonkeeper is the ultimate choice for various projects across the TON ecosystem, including NFT collections, decentralized games, and a range of services tailored for digital nomads."
        />
                <TextCard
          title="What is Signer?"
          dec="Signer is a separate app by Tonkeeper that lets users sign TON transactions without having to store private keys in the main Tonkeeper wallet app. This offers an extra layer of security, especially for users with larger crypto balances. Security conscious users can use Signer with offline wallets or pair it with Tonkeeper app on a single device. With Signer, users can approve transactions using QR codes or by pairing them with the Tonkeeper app, all while keeping their private keys offline. It's a great option for security-conscious Tonkeeper power users." />        <TextCard
        title="What is Tonkeeper? "
        dec="Tonkeeper is the leading non-custodial TON wallet with over 30M active monthly users. Founded in 2021, Tonkeeper is the ultimate choice for various projects across the TON ecosystem, including NFT collections, decentralized games, and a range of services tailored for digital nomads."
      />        <TextCard
      title="How do I use Signer? "
      dec="Signer offers users two deployment options to best suit their security needs. Convenience Mode offers a seamless user experience where Signer can be paired with the Tonkeeper wallet app on a single device. This allows for easy access to both apps for signing transactions. Users prioritizing ultimate security can leverage Maximum Security Mode with Signer on a completely offline device (not connected to the internet). This physically isolates private keys, further minimizing the risk of online attacks." />
               <TextCard
          title="What is a Private Key?"
          dec="A private key functions like a digital password necessary to access users' assets and is required for any crypto transactions. It holds the key to accessing and spending users' funds without the need to store private keys on a mobile device or a hardware wallet. Signer provides a way to sign transactions for users' cryptocurrency holdings without storing users' private keys on their phones or a hardware wallet. This separation can potentially reduce the risk of users' private keys being stolen or compromised by hackers or malware."/>  
     
      </div>
      <div className="flex items-center justify-between relative max-w-[1082px] mx-auto bg-[--backgroundContent] py-[2rem] px-[1.5rem] rounded-[32px] gap-[20px] overflow-hidden">
        <div className="flex items-center gap-[12px] signerCard">
          <img src="./images/svgexport-2.svg" alt="" className="w-[92px] " />
          <div className="flex flex-col gap-[12px] ">
            <h3 className="text-[28px] font-medium">Signer</h3>
            <p className="text-[20px] text-[--textSecondary]">Ultimate cold crypto wallet for TON blockchain users.</p>
          </div>
        </div>
      <Button text="Get Signer fot Tonkeeper "  />

      </div>
      <Footer />
    </div>
  );
}

export default Signer;
