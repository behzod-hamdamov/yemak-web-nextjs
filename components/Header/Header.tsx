import Image from "next/image";

import logoIcon from "../../public/icons/logo-icon.svg";
import searchIcon from "../../public/icons/search-icon.svg";
import recieptIcon from "../../public/icons/receipt-icon.svg";
import basketIcon from "../../public/icons/basket-icon.svg";
import loginIcon from "../../public/icons/login-icon.svg";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="max-h-20 p-[19px_0] border-b border-[#F0F0F0] bg-white">
      <div className="container max-w-290 w-full p-[0_40px] m-[0_auto] flex justify-between">
        <div className="flex gap-6 ">
          <Link href="/">
            <Image src={logoIcon} width={132} height={40} alt="logo" />
          </Link>
          <div className="flex items-center rounded-[10px] overflow-hidden relative max-h-10">
            <input
              type="text"
              className="p-[12px_38px] bg-[#F7F7F7] outline-0 placeholder:text-[#B0B7BA] font-semibold leading-4.25 text-[14px] caret-[#EDC843] h-full"
              placeholder="Izlash"
            />
            <Image
              src={searchIcon}
              width={20}
              height={20}
              alt="search-icon"
              className="absolute left-2.5"
            />
            <button className="p-[10px_32px] text-white bg-[#EDC843] cursor-pointer">
              Izlash
            </button>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <button className="flex flex-col gap-0.75 items-center cursor-pointer">
            <Image
              src={recieptIcon}
              width={24}
              height={24}
              alt="reciept-icon"
            />
            <span className="text-[#5A696E] font-semibold text-[12px] leading-3.75">
              Buyurtmalar
            </span>
          </button>
          <span className="h-7.5 w-px bg-[#F0F0F0]"></span>
          <button className="flex flex-col gap-0.75 items-center cursor-pointer">
            <Image src={basketIcon} width={24} height={24} alt="basket-icon" />
            <span className="text-[#5A696E] font-semibold text-[12px] leading-3.75">
              Savatcha
            </span>
          </button>
          <span className="h-7.5 w-px bg-[#F0F0F0]"></span>
          <button className="flex items-center gap-1 bg-[#15CC69] rounded-[10px] p-[9px_44px] cursor-pointer">
            <Image src={loginIcon} width={24} height={24} alt="login-icon" />
            <span className="text-white font-semibold text-[15px] leading-4.75 pt-px">
              Kirish
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
