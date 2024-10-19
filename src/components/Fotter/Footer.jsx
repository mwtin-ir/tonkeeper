function Footer() {
  return (
    <div className="grid gird-cols-2 lg:grid-cols-5 lg:grid-rows-1 p-[25px_30px] grid-rows-3 gap-[30px] mt-[50px] justify-center items-start mx-auto max-w-[1096px] ">
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
        <h5>FAQ</h5>
        <h5>Support</h5>
        <h5>Suggest a Feature</h5>
      </div>
      <div className="flex flex-col gap-5  text-[--textSecondary]">
        <h4 className="text-[1.2rem] font-bold text-[--textPrimary]">
          Developers
        </h4>
        <h5>Documenttation</h5>
        <h5>Bug Bounty</h5>
        <h5>GitHub</h5>
      </div>
      <div className="flex flex-col gap-5  text-[--textSecondary]">
        <h4 className="text-[1.2rem] font-bold text-[--textPrimary]">Legal</h4>
        <h5>Terms</h5>
        <h5>Pravacy </h5>
      </div>
      <div className="self-center">
        <img
          src="https://ton.app/a2/badge/topapp?appName=tonkeeper"
          alt="Tonkeeper — #1 Wallet in Ton App"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default Footer;
