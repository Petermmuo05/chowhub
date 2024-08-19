"use client";
import Image from "next/image";
import { useApp } from "../_components/appcontext";
import Profilepic from "../../public/profilepic.jpg";
import Menu from "../../public/menu.svg";
import Link from "next/link";

export default function HeaderIcons() {
  const { isSideBar, setSideBar } = useApp();
  return (
    <div className="flex flex-row items-center gap-2">
      <div onClick={() => setSideBar((e) => !e)} className="ml-3 min-sm:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="28px"
          viewBox="0 -960 960 960"
          width="28px"
          fill="white"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </div>
      <Link
        href="/admin/profile"
        className="flex justify-center items-center  rounded-full border border-black overflow-hidden"
      >
        <Image
          src={Profilepic}
          alt="profileImage"
          className="w-[37px] h-[37px] max-sm:w-[25px] max-sm:h-[25px]"
        />
      </Link>
    </div>
  );
}
