import Image from "next/image";
import Link from "next/link";

import footerLogoIcon from "../../public/icons/footer-logo-icon.svg";
import appleIcon from "../../public/icons/apple-icon.svg";
import googlePlayIcon from "../../public/icons/google-play-icon.svg";
import huaweiIcon from "../../public/icons/huawei-icon.svg";
import telegramIcon from "../../public/icons/telegram-icon.svg";
import facebookIcon from "../../public/icons/facebook-icon.svg";
import instagramIcon from "../../public/icons/instagram-icon.svg";
import phoneIcon from "../../public/icons/phone-icon.svg";
import emailIcon from "../../public/icons/email-icon.svg";

export const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="p-[24px_0_32px]">
        <div className="max-w-290 w-full p-[0_40px] m-[0_auto] flex items-end justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-126.5 w-full items-start">
            <Link href="/" className="pb-2">
              <Image
                src={footerLogoIcon}
                width={133}
                height={40}
                alt="footer-logo-icon"
              />
            </Link>
            <h3 className="flex gap-4">
              <span className="font-semibold leading-5.25 text-[16px]">
                Biz haqimizda
              </span>
              <span className="font-semibold leading-5.25 text-[16px]">
                Ommaviy oferta
              </span>
              <span className="font-semibold leading-5.25 text-[16px]">
                Bog’lanish
              </span>
            </h3>
            <p className="text-[#5A696E] leading-4.5 text-[14px] font-normal">
              10 dan oshiq restoran, choyxona va kafelarni tanlab oson buyurtma
              berishingiz mumkin. Bularning barchasini telefoningizda turib
              bajarish mumkin
            </p>
          </div>
          <div className="flex gap-3 items-end">
            <button className="p-3 bg-[#F7F7F7] rounded-xl flex gap-2 pr-6 max-w-42">
              <Image src={appleIcon} width={36} height={36} alt="apple-icon" />
              <h5 className="flex flex-col gap-0.5 items-start">
                <span className="font-normal text-[12px] leading-4 text-[#B0B7BA]">
                  Yuklab oling
                </span>
                <span className="font-bold text-[14px] leading-4.5 text-[#12282F]">
                  App Store
                </span>
              </h5>
            </button>
            <button className="p-3 bg-[#F7F7F7] rounded-xl flex gap-2 pr-6 max-w-42">
              <Image
                src={googlePlayIcon}
                width={36}
                height={37}
                alt="google-play-icon"
              />
              <h5 className="flex flex-col gap-0.5 items-start">
                <span className="font-normal text-[12px] leading-4 text-[#B0B7BA]">
                  Yuklab oling
                </span>
                <span className="font-bold text-[14px] leading-4.5 text-[#12282F]">
                  Google Play
                </span>
              </h5>
            </button>
            <button className="p-3 bg-[#F7F7F7] rounded-xl flex gap-2 pr-6 max-w-42">
              <Image
                src={huaweiIcon}
                width={36}
                height={36}
                alt="huawei-icon"
              />
              <h5 className="flex flex-col gap-0.5 items-start">
                <span className="font-normal text-[12px] leading-4 text-[#B0B7BA]">
                  Yuklab oling
                </span>
                <span className="font-bold text-[14px] leading-4.5 text-[#12282F]">
                  App Gallery
                </span>
              </h5>
            </button>
          </div>
        </div>
      </div>
      <div className="p-[12px_0] border-t border-[#F0F0F0]">
        <div className="max-w-290 w-full p-[0_40px] m-[0_auto] flex justify-between items-center">
          <p className="font-normal text-[12px] leading-3.75 text-[#12282F]">
            © Yemak Delivery 2022. Barcha huquqlar himoyalangan.
          </p>
          <div className="flex gap-2">
            <Image
              src={telegramIcon}
              width={20}
              height={20}
              alt="telegram-icon"
            />
            <Image
              src={facebookIcon}
              width={20}
              height={20}
              alt="facebook-icon"
            />
            <Image
              src={instagramIcon}
              width={20}
              height={20}
              alt="instagram-icon"
            />
          </div>
          <div className="flex gap-6">
            <h5 className="flex gap-1 font-normal text-[12px] text-[#12282F] leading-3.75 items-center">
              <Image
                src={phoneIcon}
                width={20}
                height={20}
                alt="phone-icon"
              />
              <span>+998 71 200 70 07</span>
            </h5>
            <h5 className="flex gap-1 font-normal text-[12px] text-[#12282F] leading-3.75 items-center">
              <Image
                src={emailIcon}
                width={20}
                height={20}
                alt="email-icon"
              />
              <span>info@yemak.uz</span>
            </h5>
          </div>
        </div>
      </div>
    </footer>
  );
};
