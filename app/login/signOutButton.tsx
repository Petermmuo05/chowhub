import { signOutAction } from "@/_lib/actions";
import Image from "next/image";
import Dropdown from "../../public/forward.svg";
import Exit from "../../public/exit.svg";

export default function SignOut() {
  return (
    <form action={signOutAction} className="w-full">
      <button
        type="submit"
        className="flex w-full flex-row items-center rounded-lg  hover:bg-[#afafaf] px-2 py-2 justify-between"
      >
        <div className="flex-row gap-1 flex items-center">
          <Image src={Exit} alt="bags" className="w-5 h-5" />

          <span>Log Out</span>
        </div>{" "}
        <Image src={Dropdown} alt="dropdown" className="w-4 h-4" />
      </button>
    </form>
  );
}
