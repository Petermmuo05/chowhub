import Dropdown from "../../public/forward.svg";
import Image from "next/image";
import Bags from "../../public/bags.svg";
import Person from "../../public/person.svg";
import Exit from "../../public/exit.svg";
import Link from "next/link";
import { useApp } from "./appcontext.tsx";
import SignOut from "../login/signOutButton.tsx";

export default function UserMenu() {
  const { isMenuOpen, setisMenuOpen } = useApp();

  return (
    <div
      className={`flex flex-col  bg-white w-[200px] h-48 right-[7%] rounded-lg max-sm:right-[7px] max-sm:top-[75px] text-[17px] px-3 py-3 justify-evenly top-[94px] absolute `}
      onClick={(e) => e.stopPropagation()}
    >
      <Link
        href={"/orders"}
        onClick={() => setisMenuOpen(false)}
        className="flex flex-row items-center rounded-lg hover:bg-[#afafaf] px-2 py-2 justify-between"
      >
        <div className="flex-row gap-1 flex items-center">
          <Image src={Bags} alt="bags" className="w-5 h-5" />

          <span>Orders</span>
        </div>{" "}
        <Image src={Dropdown} alt="dropdown" className="w-4 h-4" />
      </Link>
      <Link
        href={"/profile"}
        onClick={() => setisMenuOpen(false)}
        className="flex flex-row items-center rounded-lg hover:bg-[#afafaf] px-2 py-2 justify-between"
      >
        <div className="flex-row gap-1 flex items-center">
          <Image src={Person} alt="bags" className="w-5 h-5" />

          <span>Account</span>
        </div>{" "}
        <Image src={Dropdown} alt="dropdown" className="w-4 h-4" />
      </Link>
      <SignOut />
    </div>
  );
}
