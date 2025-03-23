"use client";

import { useApp } from "@/app/_components/appcontext";

export default function DateFilter() {
  const { dateFilter, setDateFilter } = useApp();
  console.log(dateFilter);

  return (
    <div className="flex flex-row gap-1 items-center ">
      {" "}
      <div
        className={`px-2 border border-poster rounded-lg cool-button text-[14px] ${
          dateFilter === "today" ? "bg-poster" : "bg-white"
        } font-bold py-1`}
        onClick={() => setDateFilter("today")}
      >
        Today
      </div>
      <div
        className={`px-2 border border-poster rounded-lg cool-button text-[14px] ${
          dateFilter === "this week" ? "bg-poster" : "bg-white"
        } font-bold py-1`}
        onClick={() => setDateFilter("this week")}
      >
        This Week
      </div>
      <div
        className={`px-2 border border-poster rounded-lg cool-button text-[14px] ${
          !dateFilter ? "bg-poster" : "bg-white"
        } font-bold py-1`}
        onClick={() => setDateFilter(null)}
      >
        All
      </div>
    </div>
  );
}
