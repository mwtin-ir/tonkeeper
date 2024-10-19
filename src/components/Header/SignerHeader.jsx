import React from "react";
import SignerMenu from "./SignerMenu";
import Button from "../button";
import { Link } from "react-router-dom";

function SignerHeader() {
  return (
    <div className="flex flex-col items-center relative overflow-hidden px-[15px] py-[20px] ">
      <div className="signer-bg"></div>
      <SignerMenu />
      <div className="flex flex-col lg:flex-row  items-center justify-between z-10 max-w-[1080px]">
        <div className="flex flex-col justify-center items-start w-[90%] mx-auto lg:w-[40%] gap-[25px]">
          <Link to="/">
            {" "}
            <img src="./images/svgexport-2.svg" alt="" />
          </Link>
          <h1 className="text-[5rem] font-bold">Signer</h1>
          <p className="text-[1.1rem] lg:text-[1.4rem] text-start ">
            Securely sign transactions and store private keys separately from
            the Tonkeeper wallet with Signer. Use Signer with the Tonkeeper app
            on the same device - or a completely offline one for maximum
            security.
          </p>
          <Button>Get signer for Tonkeeper </Button>
        </div>
        <div className="flex items-center lg:w-[60%]">
          <img src="./images/signer.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default SignerHeader;
