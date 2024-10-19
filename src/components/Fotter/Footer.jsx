import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className=" grid grid-cols-2   lg:grid-cols-5 grid-rows-4 lg:grid-rows-2   p-[25px_30px]  gap-[30px] mt-[50px] justify-center items-center mx-auto max-w-[1096px] ">
      <div className="flex flex-col gap-5 text-[--textSecondary]">
        <h4 className="text-[1.2rem] font-bold text-[--textPrimary]">
          Company
        </h4>
        <h5>News</h5>
        <h5>Chat</h5>
        <h5>Twitter</h5>
      </div>
      <div className="flex flex-col gap-5  text-[--textSecondary]">
        <h4 className="text-[1.2rem] font-bold text-[--textPrimary]">
          Resources
        </h4>
        <Link to="/suport">FAQ</Link>
        <h5>Support</h5>
        <h5>Suggest a Feature</h5>
      </div>
      <div className="flex flex-col gap-5  text-[--textSecondary]">
        <h4 className="text-[1.2rem] font-bold text-[--textPrimary]">
          Developers
        </h4>
        <h5>Documenttation</h5>
        <h5>Bug Bounty</h5>
        <Link to="https://github.com/tonkeeper">GitHub</Link>
      </div>
      <div className="flex flex-col gap-5  text-[--textSecondary]">
        <h4 className="text-[1.2rem] font-bold text-[--textPrimary]">Legal</h4>
        <h5>Terms</h5>
        <h5>Pravacy </h5>
      </div>
      <div className="lg:col-span-1 col-span-2 self-center justify-self-center">
        <img
          src="https://ton.app/a2/badge/topapp?appName=tonkeeper"
          alt="Tonkeeper — #1 Wallet in Ton App"
          loading="lazy"
        />
      </div>
      <h4 className="col-span-2 self-center justify-center lg:col-span-5">
        <strong className="text-[19px]  font-bold text-white">
          © 2024 Tonkeeper. All rights reserved.
        </strong>
        
        All trademarks are the property of their respective owners.
      </h4>
    </div>
  );
}

export default Footer;
