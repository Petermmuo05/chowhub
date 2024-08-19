import Image from "next/image";
import { Inter_font } from "../page";
import TrendingUp from "../../public/trendingup.svg";
import Threedots from "../../public/threedots.svg";

export default function DashboardAnalytics() {
  return (
    <div className="grid grid-cols-4 gap-3 trans-range:gap-1 max-800:grid-cols-2 trans-range:grid-cols-3 pb-3 px-0 w-full">
      <div className="w-full flex flex-col p-3 px-6 max-sm:px-1 h-[120px] max-sm:h-[100px] text-poster rounded-lg justify-between bg-gray-950">
        <div className="flex flex-row justify-between text-[14px] max-sm:px-2 items-center">
          <span>Total Customers</span>
          <Image src={Threedots} alt="threedots" className="h-[17px]" />{" "}
        </div>
        <div className="flex flex-row justify-between items-center">
          <span className="text-[45px] font-bold text-poster max-sm:text-[40px] trans-range:text-[40px]">
            1,390
          </span>
          <div className="flex items-center gap-1 h-fit px-1 py-0 justify-center rounded-lg  bg-gray-600 font-bold text-[12px] text-white">
            <Image
              src={TrendingUp}
              alt="profileImage"
              className="w-[12px] h-[12px]"
            />
            <span className={`${Inter_font.className}`}>40%</span>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col p-3 px-6 max-sm:px-1 h-[120px] max-sm:h-[100px] text-poster rounded-lg justify-between bg-gray-950">
        <div className="flex flex-row justify-between text-[14px] max-sm:px-2 items-center">
          <span>Total Customers</span>
          <Image src={Threedots} alt="threedots" className="h-[17px]" />{" "}
        </div>
        <div className="flex flex-row justify-between items-center">
          <span className="text-[45px] font-bold text-poster max-sm:text-[40px]">
            1,390
          </span>
          <div className="flex items-center gap-1 h-fit px-1 py-0 justify-center rounded-lg  bg-gray-600 font-bold text-[12px] text-white">
            <Image
              src={TrendingUp}
              alt="profileImage"
              className="w-[12px] h-[12px]"
            />
            <span className={`${Inter_font.className}`}>40%</span>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col p-3 px-6 max-sm:px-1 h-[120px] max-sm:h-[100px] text-poster rounded-lg justify-between bg-gray-950">
        <div className="flex flex-row justify-between text-[14px] max-sm:px-2 items-center">
          <span>Total Customers</span>
          <Image src={Threedots} alt="threedots" className="h-[17px]" />{" "}
        </div>
        <div className="flex flex-row justify-between items-center">
          <span className="text-[45px] font-bold text-poster max-sm:text-[40px]">
            1,390
          </span>
          <div className="flex items-center gap-1 h-fit px-1 py-0 justify-center rounded-lg  bg-gray-600 font-bold text-[12px] text-white">
            <Image
              src={TrendingUp}
              alt="profileImage"
              className="w-[12px] h-[12px]"
            />
            <span className={`${Inter_font.className}`}>40%</span>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col p-3 px-6 max-sm:px-1 h-[120px] max-sm:h-[100px] text-poster rounded-lg justify-between bg-gray-950">
        <div className="flex flex-row justify-between text-[14px] max-sm:px-2 items-center">
          <span>Total Customers</span>
          <Image src={Threedots} alt="threedots" className="h-[17px]" />{" "}
        </div>
        <div className="flex flex-row justify-between items-center">
          <span className="text-[45px] font-bold text-poster max-sm:text-[40px]">
            1,390
          </span>
          <div className="flex items-center gap-1 h-fit px-1 py-0 justify-center rounded-lg  bg-gray-600 font-bold text-[12px] text-white">
            <Image
              src={TrendingUp}
              alt="profileImage"
              className="w-[12px] h-[12px]"
            />
            <span className={`${Inter_font.className}`}>40%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
