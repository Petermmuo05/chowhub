import Image from "next/image";
import { Inter_font } from "../page";
import Shawarma from "../../public/shawarma.png";
import Noodles from "../../public/Noodles.png";
import Fastfood from "../../public/Fastfood.png";
import Jollof from "../../public/jollof.png";
import Bread from "../../public/bread.png";
import Link from "next/link";

function Categories() {
  return (
    <div className="mt-rowgap">
      <p
        className={`${Inter_font.className} text-[#333333] text-primaryheader font-[800] `}
      >
        Popular Categories
      </p>{" "}
      <div className="flex flex-row w-full gap-3 mt-4 scrollbar-hide overflow-x-scroll">
        <Category src={Noodles} description={"Noodles"} />
        <Category src={Bread} description={"Bread"} />
        <Category src={Fastfood} description={"Fast Food"} />
        <Category src={Jollof} description={"Local Food"} />
        <Category src={Shawarma} description={"Shawarma"} />
      </div>
    </div>
  );
}

function Category({ src, description }) {
  return (
    <Link
      href="/restaurants"
      className="flex flex-shrink-0 flex-col w-[250px]  max-sm:w-[200px] max-sm:h-[200px] trans-range:h-[250px] trans-range:w-[250px]  relative h-[250px] rounded-lg overflow-hidden border bg-[#FF8C00]"
    >
      <div className="flex-1 basis-5/6  bg-[#F5F5DC] relative ">
        {" "}
        <Image src={src} className="object-cover" fill alt="MainImage" />
      </div>
      <span className="flex-1 basis-1/6 flex text-[#333333] font-bold justify-center items-center">
        {description}
      </span>
    </Link>
  );
}

export default Categories;
