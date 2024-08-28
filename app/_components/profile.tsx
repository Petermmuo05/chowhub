"use client";
import Image from "next/image";
import Profilepic from "../../public/profilepic.jpg";
import { useContext, useState } from "react";
import { useApp } from "./appcontext.tsx";
import Blurdiv from "./blurdiv.tsx";
import UserMenu from "./usermenu.tsx";
import { signInAction } from "@/_lib/actions.tsx";
import Link from "next/link";

export default function ProfileMenu({ session }) {
  const { isMenuOpen, setisMenuOpen } = useApp();

  return (
    <div>
      {isMenuOpen && (
        <Blurdiv setter={setisMenuOpen} value={false}>
          <UserMenu />
        </Blurdiv>
      )}
      {session?.user?.image ? (
        <div className="flex justify-center items-center rounded-full border border-black overflow-hidden">
          <img
            src={session?.user?.image}
            alt="profileImage"
            referrerPolicy="no-referrer"
            className="w-[57px] h-[59px] max-sm:w-[40px] max-sm:h-[41px]"
            onClick={(e) => {
              setisMenuOpen(true);
            }}
          />
        </div>
      ) : (
        // <Image
        //   src={Profilepic}
        //   alt="profileImage"
        //   className="w-[57px] h-[59px] max-sm:w-[40px] max-sm:h-[41px]"
        //   onClick={(e) => {
        //     setisMenuOpen(true);
        //   }}
        // />
        <Link
          href="/login"
          className={`cool-button text-[#333333] shadow-sm font-semibold w-fit text-[16px] px-8 py-2  max-sm:text-center max-sm:text-[12px] max-sm:px-[4vw] max-sm:py-2 bg-[#FF8C00] rounded-[25px] `}
        >
          Get Started
        </Link>
      )}
    </div>
  );
}
