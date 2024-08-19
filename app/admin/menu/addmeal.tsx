"use client";
import Image from "next/image";
import Add from "../../../public/add.svg";
import { useApp } from "@/app/_components/appcontext";

export default function AddMeal() {
  const { setMealFormData } = useApp();
  return (
    <div className="flex flex-row justify-between w-full mb-5">
      <span className="font-bold text-[26px]">Menu</span>
      <div
        onClick={() =>
          setMealFormData({ name: "", price: "", description: "" })
        }
        className="px-5 py-1 bg-[#FFFDD0] text-[#32CD32] cool-button font-bold text-[12px] rounded-xl items-center flex flex-row justify-center"
      >
        <Image src={Add} className="w-[14px] h-[14px]" alt="MainImage" />
        <span> Add New Meal</span>
      </div>
    </div>
  );
}
