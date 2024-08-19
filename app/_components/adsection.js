import Image from "next/image";
import { Inter_font } from "../page";

function AdSection({ Rider, Partners }) {
  return (
    <>
      <h1
        className={`${Inter_font.className} mx-auto text-[#333333] mt-rowgap text-primaryheader font-[800] `}
      >
        Wanna Work With Us?
      </h1>
      <div className="flex w-full justify-evenly text-center mt-4 flex-row max-sm:flex-col max-lg:gap-10 ">
        <Blobsection
          src={Rider}
          title={"Ride for us... Pretty Please :)🥺"}
          description={
            "Want flexibility, freedom, and extra cash? Deliver on your own schedule with ChowHub, where safety and speed are top priorities."
          }
        />
        <Blobsection
          src={Partners}
          title={"📣 Got something cool to share?"}
          description={
            "Got something cool to share or want to boost your biz? With ChowHub, you can reach hundreds of hungry customers looking for their next favorite spot."
          }
        />
      </div>
    </>
  );
}
function Blobsection({ src, title, description }) {
  return (
    <div className="flex flex-col basis-1/3 gap-4">
      <div className="blob relative mx-auto max-lg:w-[180px] max-lg:h-[170px]">
        <Image src={src} className="object-cover" fill alt="MainImage" />
      </div>
      <div>
        <h1
          className={`${Inter_font.className} text-[#333333] text-[23px] max-sm:text-[18px] font-[800] `}
        >
          {title}
        </h1>
        <p className="max-sm:px-7"> {description}</p>
        <div
          className={`${Inter_font.className}  text-[#333333] cool-button font-semibold w-fit mt-5 px-12 py-2 bg-[#FF8C00] rounded-[25px] mx-auto`}
        >
          Register here
        </div>
      </div>
    </div>
  );
}
export default AdSection;
