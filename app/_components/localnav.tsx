import React from "react";
import { Inter_font } from "../page";

export default function Localnav() {
  return (
    <div
      className={`w-full mt-5 bg-[#f5f5dc73] ${Inter_font.className} font-[500] py-2 px-[5vh] text-[#f5f5dc73] rounded-[40px] flex flex-row justify-between`}
    >
      <span>Top Seller</span>
      <span>Local Food </span>
      <span>Internationals</span>
      <span className="text-[#32CD32]">Top Seller</span>
      <span>Top Seller</span>
      <span>Top Seller</span>
      <span>Drinks</span>
      <span>Top Seller</span>
    </div>
  );
}
// bg-[#f5f5dc73]
