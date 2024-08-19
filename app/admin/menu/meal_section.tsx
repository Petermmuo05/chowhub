"use client";
import Image from "next/image";
import MainImage from "../../../public/testmealimage.jpg";

import { useApp } from "@/app/_components/appcontext";
import { useState } from "react";
import { updateSingleMeal } from "@/_lib/actions";

export default function MealSection({ Category, MealsData, Restaurant_data }) {
  const { id, name } = Category;


  let meals_data = MealsData.filter(({ category_id }) => category_id === id);
  if (meals_data.length === 0) {
    return;
  }

  return (
    <div className="flex flex-col px-0 gap-2 ">
      <span className="font-bold"> {name}</span>
      <div className="grid gap-4 grid-cols-3 trans-meal:grid-cols-2 max-sm:grid-cols-2 px-[2%] max-800:grid-cols-1 w-full mt-1">
        {meals_data.map((data) => (
          <Meal key={data.id} mealdata={data} />
        ))}
      </div>
    </div>
  );
}
async function handleClick(allow_order, id) {
  try {
    const data = await updateSingleMeal({ allow_order: !allow_order }, id);
    console.log("Updated Meal:", data);
  } catch (error) {
    console.error("Update failed:", error.message);
  }
}
function Meal({ mealdata }) {
  const { setMealFormData } = useApp();
  const [isActive, setActive] = useState(true);
  const { name, id, price, description, meal_image, allow_order } = mealdata;

  return (
    <div
      onClick={() => setMealFormData(mealdata)}
      className={`grid grid-rows-6  items-center transform  z-1 cool-s-button  hover:shadow-lg bg-poster p-3 h-[26vh] max-sm:h-[22vh] rounded-lg border w-full gap-2`}
    >
      {" "}
      <div className="flex flex-row row-start-1 row-span-5 gap-2">
        <div className="flex justify-center items-center  flex-1 ">
          {" "}
          <div className="flex justify-center items-center flex-1 border p-2 rounded-lg">
            {" "}
            <div className="relative aspect-square rounded-lg bg-white p-2 min-w-[100px] max-w-[500px] flex-1 ">
              {" "}
              <Image
                src={meal_image}
                className="object-cover"
                fill
                alt="MainImage"
              />
            </div>
          </div>
        </div>

        <div className="flex-col flex">
          <span className="text-[20px] font-[600] max-sm:text-[17px]">
            {name}
          </span>

          <p className="text-[13px] text-[#686767]">{description} </p>
        </div>
      </div>
      <div className="flex flex-row row-span-1 row-start-6 justify-between">
        <div className="text-[18px] max-sm:text-[15px] font-[500] flex justify-center items-center ">
          &#8358;{price}
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
            handleClick(allow_order, id);
          }}
          className={`px-3 cool-button py-1 ${
            allow_order ? "bg-lime" : "bg-vibrantred"
          } text-poster font-bold text-[14px] rounded-xl items-center flex justify-center`}
        >
          {allow_order ? "Active" : "Inactive"}
        </div>
      </div>
    </div>
  );
}
