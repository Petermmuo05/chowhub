import Image from "next/image";
import Cooldata from "./cooldata";

function Poster({ img, Inter_font, children }) {
  return (
    <div className="flex bg-[#F5F5DC] px-8 rounded-lg py-4 max-sm:border max-sm:border-yellow-500 max-sm:px-4 flex-row justify-center items-center w-full max-sm:rounded-lg   gap-4">
      <div className="flex flex-col justify-center  gap-[1.6vw] flex-1 max-w-[600px] leading-[1.2]">
        {children}
        <div
          className={`${Inter_font.className} cool-button text-[#333333] shadowbutton font-bold w-fit  text-medium px-12 py-3 max-sm:w-full max-sm:text-center max-sm:text-[10px] max-sm:px-[3vw] max-sm:py-2 bg-[#FF8C00] rounded-[25px] `}
        >
          Experience Delivery
        </div>
      </div>
      <div className="relative aspect-square min-w-[100px] max-w-[500px] flex-1 ">
        {" "}
        <Image src={img} className="object-cover" fill alt="MainImage"/>
      </div>
    </div>
  );
}

export default Poster;
