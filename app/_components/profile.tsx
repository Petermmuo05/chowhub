"use client";
import Image from "next/image";
import Profilepic from "../../public/profilepic.jpg";
import { useContext, useState } from "react";
import { useApp } from "./appcontext.tsx";
import Blurdiv from "./blurdiv.tsx";
import UserMenu from "./usermenu.tsx";

export default function ProfileMenu({ session }) {
  const { isMenuOpen, setisMenuOpen } = useApp();
  return (
    <div>
      {isMenuOpen && (
        <Blurdiv setter={setisMenuOpen} value={false}>
          <UserMenu />
        </Blurdiv>
      )}
      <div className="flex justify-center items-center  rounded-full border border-black overflow-hidden">
        {session?.user?.image ? (
          <img
            src={session?.user?.image}
            alt="profileImage"
            referrerPolicy="no-referrer"
            className="w-[57px] h-[59px] max-sm:w-[40px] max-sm:h-[41px]"
            onClick={(e) => {
              setisMenuOpen(true);
            }}
          />
        ) : (
          <Image
            src={Profilepic}
            alt="profileImage"
            className="w-[57px] h-[59px] max-sm:w-[40px] max-sm:h-[41px]"
            onClick={(e) => {
              setisMenuOpen(true);
            }}
          />
        )}
      </div>
    </div>
  );
}
