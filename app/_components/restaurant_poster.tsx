import Image from "next/image";
import MainImage from "../../public/realistic.png";

export default function RestaurantPoster({ children }) {
  return (
      //You've Come to the Right Place.
    <div className="flex bg-[#F5F5DC] px-8  py-4 max-sm:px-4 max-sm:py-2 flex-row justify-center items-center w-full z-[-1]  gap-4">
      <div className="flex flex-col justify-center  gap-[1.6vw] flex-1 max-w-[600px] leading-[1.2]">
        {children}
      </div>
      <div className="relative aspect-square min-w-[100px] max-w-[500px] flex-1 ">
        {" "}
        <Image src={MainImage} className="object-cover" fill alt="MainImage" />
      </div>
    </div>
  );
}
