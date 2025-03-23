"use client";

import { useApp } from "@/app/_components/appcontext";

export default function FilterBar() {
  const { setStatusFilter, statusFilter } = useApp();
  return (
    <div className="flex flex-col gap-[6px] w-full">
      <div className="flex flex-row items-center gap-5 font-semibold text-[14px] ">
        <span
          onClick={() => setStatusFilter(null)}
          className={`${statusFilter ? "text-[grey]" : "text-[black]"}`}
        >
          All Orders
        </span>
        <span
          onClick={() => setStatusFilter("placed")}
          className={`${statusFilter !== "placed" && "text-[grey]"}`}
        >
          Placed
        </span>
        <span
          onClick={() => setStatusFilter("cooking")}
          className={`${statusFilter !== "cooking" && "text-[grey]"}`}
        >
          Cooking
        </span>
        <span
          onClick={() => setStatusFilter("fulfilled")}
          className={`${statusFilter !== "fulfilled" && "text-[grey]"}`}
        >
          Completed
        </span>
      </div>
      <div className="w-[320px] h-[2px] bg-poster"></div>
    </div>
  );
}
