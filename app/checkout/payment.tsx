import Dropdown from "../../public/arrowdown.svg";
import Card from "../../public/card.svg";

import Image from "next/image";
export default function Payments() {
  return (
    <div className="flex flex-col mt-10 font-bold w-full ">
      <span className={` font-[600] max-sm:text-[20px] text-[30px]`}>
        Payment method
      </span>
      <div className="bg-poster w-full flex flex-row px-3 rounded-lg items-center justify-between py-4 ">
        <div className="flex flex-row gap-3 items-center">
          {" "}
          <Image
            src={Card}
            alt="cardpic"
            className="w-10 h-10 max-sm:w-7 max-sm:h-7"
          />{" "}
          <span>Pay by Card</span>
        </div>
        <Image
          src={Dropdown}
          alt="dropdown"
          className="w-10 h-10 self-end max-sm:w-7 max-sm:h-7"
        />
      </div>
    </div>
  );
}
