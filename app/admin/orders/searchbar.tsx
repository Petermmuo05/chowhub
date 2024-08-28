import Image from "next/image";
import Search from "../../../public/search.svg";
import Filter from "../../../public/filter.svg";

export default function SearchBar() {
  return (
    <div className="flex flex-row items-center mt-3 h-10">
      <div className="flex flex-row items-center max-sm:gap-0 gap-2 border-poster px-1 h-10 border rounded-md w-fit">
        <Image src={Search} alt="search" className="h-[17px]" />{" "}
        <input
          type="text"
          placeholder="Search OrderId"
          className="text-[14px] py-1 removefocus w-[50vw] "
        />
      </div>
      <div className="flex flex-row items-center border-poster px-2 h-10 gap-1 border rounded-md w-fit">
        <Image src={Filter} alt="filter" className="h-[17px]" />
        <span className="text-[14px] text-[#b4b4a2]">Filters</span>
      </div>
    </div>
  );
}
