import Image from "next/image";

const AuthNav = () => {
  return (
    <div className="flex border-b rounded-[100px] justify-between items-center p-4 md:py-8 md:px-16 border-b border-[#8F8F8F]">
      <Image
        aria-hidden
        src="/logo.png"
        alt="PayStream Logo"
        width={190}
        height={38}
      />
      <div className="flex gap-[24px]">
        <div>
          <p className="text-[#667085] text-[14px]">Balance</p>
          <span className="flex items-center font-semibold ">
            100{" "}
            <Image
              aria-hidden
              src="/usdt.png"
              alt="USDT Logo"
              width={26}
              height={26}
            />{" "}
          </span>
        </div>
        <div className="flex gap-[8px]">
          <button className="border-[4px] border-[#E9ECF6] rounded-[1000px]">
            <button className="rounded-[1000px] bg-[#F6F6FD] border-1 border-[#FFFFFF] px-[20px] py-[12px]">
              Deposit
            </button>
          </button>
          <button className="border-[4px] border-[#E2E9FF] rounded-[1000px]">
            <button className="rounded-[1000px] bg-[#1E3A8A] border-1 border-[#FFFFFF] px-[20px] py-[12px] text-white">
              Withdraw
            </button>
          </button>
        </div>
      </div>
      <div>
        <button className="bg-[#1E3A8A] px-[26px] py-[12px] rounded-[24px] text-white flex items-center gap-[8px]">
          <Image
            aria-hidden
            src="/metamask-logo.png"
            alt="metamask Logo"
            width={20}
            height={20}
          />
          OxgYVLSK...SS12U
        </button>
      </div>
    </div>
  );
};

export default AuthNav;
