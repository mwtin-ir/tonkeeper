import React from "react";

function SignerCard({ img, title, dec }) {
  return (
    <div className="rounded-[32px] bg-[--backgroundContent] overflow-hidden relative py-[2rem] px-[30px] w-[96%] mx-auto">
      <div className="flex flex-col signerCard gap-[15px]">
        <img src={img} alt="" className="w-[64px]" />
        <div className="flex flex-col ">
          <h3 className="text-[28px] ">{title}</h3>
          <p className="text-[20px]  text-[--textSecondary] ">{dec}</p>
        </div>
      </div>
    </div>
  );
}

export default SignerCard;
