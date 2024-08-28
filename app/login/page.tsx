import NextTopLoader from "nextjs-toploader";
import Headerdiv from "../_components/headerbox";
import { Inter_font, Irish } from "../page";
import Link from "next/link";
import ProfileMenu from "../_components/profile";
import { auth } from "@/_lib/auth.ts";
import Image from "next/image";
import Logo from "../icon.png";
import SignInButton from "./signInButton";

export default async function SignIn() {
  const session = await auth();

  return (
    <div
      className={`flex ${Inter_font.className} flex-col min-h-[100vh] bg-[#FFFDD0]  w-full`}
    >
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
        <ProfileMenu session={session} />
      </Headerdiv>
      <div className="mt-24 max-sm:mt-[70px] flex-1 w-[83%] max-lg:w-[90%] mx-auto">
        <div className="flex bg-[#F5F5DC] px-8 py-4 max-sm:border max-sm:border-yellow-500 max-sm:px-4 flex-row justify-center items-center w-full max-sm:rounded-lg   gap-4">
          <div className="flex flex-col justify-center  gap-[1.6vw] flex-1 max-w-[600px] leading-[1.2]">
            <span> Sign in to access the full service</span>
            <SignInButton />
          </div>
          <div className="relative aspect-square min-w-[100px] max-w-[500px] flex-1 ">
            {" "}
            <Image src={Logo} className="object-cover" fill alt="MainImage" />
          </div>
        </div>
      </div>
    </div>
  );
}
