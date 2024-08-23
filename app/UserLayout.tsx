import NextTopLoader from "nextjs-toploader";
import Headerdiv from "./_components/headerbox";
import Link from "next/link";
import { Inter_font, Irish } from "./page";
import ProfileMenu from "./_components/profile";
import Blurdiv from "./_components/blurdiv";
import { Children } from "react";
import AdSection from "./_components/adsection";
import Footer from "./_components/footerpart";
import Logo from "./icon.png";
import Rider from "../public/rider.png";
import Partners from "../public/partners.png";
import UserMenu from "./_components/usermenu";
import { auth } from "@/_lib/auth";

export default async function UserLayout({ children }) {
  const session = await auth();
  console.log(session)
  return (
    <div className="flex flex-col min-h-[100vh] bg-[#FFFDD0]  w-full">
      <NextTopLoader color="#FF8C00" height={3} showSpinner={false} />
      <Headerdiv>
        <Link
          href="/"
          className={`${Irish.className} text-[#333333] text-[45px] max-sm:text-[30px]`}
        >
          ChowHub
        </Link>
        {/* <div
            className={`${Inter_font.className} text-[#333333] font-semibold text-[18px] max-sm:text-[12px] px-8 py-2 bg-[#FF8C00] rounded-[25px] shadowbutton`}
          >
            Get Started
          </div> */}
        <ProfileMenu session={session}/>
      </Headerdiv>
      <div className="mt-24 max-sm:mt-[70px] flex-1 w-[83%] max-lg:w-[90%] mx-auto">
        {children}
      </div>
      <AdSection Rider={Rider} Partners={Partners} />
      <Footer className={Inter_font.className} img={Logo} />
    </div>
  );
}
