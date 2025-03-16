import Image from "next/image";

const EmployeeNav = () => {
  return (
    <div className="self-start bg-[#1E3A8A] text-white px-[27px] pt-[50px] pb-[38px] rounded-[18px]">
      <h2 className="text-[32px] leading-[100%]">DASHBOARD</h2>
      <div className="flex flex-col gap-[24px] mt-[32px]">
        <div className="border-1 border-[#22D3EE] px-[16px] py-[12px] rounded-[40px] flex items-center gap-[12px]">
          <Image
            src="/manage-accounts.svg"
            alt="manage-accounts icon"
            width={20}
            height={20}
          />
          <p>Manage Employee's</p>
        </div>
        <div className="border-1 border-[#22D3EE] px-[16px] py-[12px] rounded-[40px] flex items-center gap-[12px]">
          <Image src="/tax.svg" alt="tax icon" width={20} height={20} />
          <p>Set Salaries and Tax</p>
        </div>
        <div className="border-1 border-[#22D3EE] px-[16px] py-[12px] rounded-[40px] flex items-center gap-[12px]">
          <Image src="/history.svg" alt="history icon" width={20} height={20} />
          <p>View Payment History</p>
        </div>
        <div className="border-1 border-[#22D3EE] px-[16px] py-[12px] rounded-[40px] flex items-center gap-[12px]">
          <Image
            src="/settings.svg"
            alt="history icon"
            width={20}
            height={20}
          />
          <p>Settings</p>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-[#F9FAFB] text-[#FF3729] font-bold text-[15px] rounded-[40px] px-[16px] py-[12px] mt-[76px]">
            Log Out
        </button>
      </div>
    </div>
  );
};

export default EmployeeNav;
