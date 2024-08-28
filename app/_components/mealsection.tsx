"use client";
import Image from "next/image";
import MainImage from "../../public/homepageimage.png";
import Star from "../../public/star.svg";

import Add from "../../public/add.png";
import { useApp } from "./appcontext.tsx";
import React from "react";
import { useMediaQuery } from "react-responsive";

function Mealsection({ font: Inter_font, Category, MealsData }) {
  const { id, name } = Category;
  const { cartdata, setcartdata } = useApp();
  console.log(MealsData);
  let meals_data = MealsData.filter(
    ({ category_id, allow_order }) => category_id === id && allow_order
  );
  if (meals_data.length === 0) {
    return;
  }
  console.log("meals_data", meals_data);
  return (
    <>
      <p
        className={`${Inter_font.className} mt-10 text-[#333333] text-[25px] max-sm:text-[22px] font-[800] `}
      >
        {name}
      </p>{" "}
      <div className="grid gap-4 grid-cols-3 trans-meal:grid-cols-2 max-sm:grid-cols-2  max-800:grid-cols-1 w-full mt-5">
        {meals_data.map((data) => (
          <Meal
            key={data.id}
            font={Inter_font}
            setcartdata={setcartdata}
            cartdata={cartdata}
            mealdata={data}
          />
        ))}
      </div>
    </>
  );
}
function handleAddMeal(meal_data, cartdata, setcartdata) {
  const { id, name, price } = meal_data;

  let isInCart = false;
  const newCart = cartdata.map((meal) => {
    const { id: mealId, qty } = meal;
    console.log("meal", meal);
    if (mealId === id) {
      isInCart = true;
      return { ...meal, qty: qty + 1 };
    }
    return meal;
  });
  isInCart
    ? setcartdata([...newCart])
    : setcartdata((c) => [...c, { ...meal_data, qty: 1 }]);
}
function Meal({ font: Inter_font, setcartdata, cartdata, mealdata }) {
  // const isBigScreen = useMediaQuery({ query: "(min-width: 600px)" });

  const { name, id, price, description, meal_image } = mealdata;
  const newItem = { ...mealdata, qty: 1 };

  return (
    <div
      className={`grid grid-rows-6  items-center transform ${Inter_font.className} transition-transform duration-300 sm:hover:scale-105  hover:shadow-lg bg-poster p-3 h-[26vh] max-sm:h-[22vh] rounded-lg border w-full gap-2`}
    >
      {" "}
      <div className="flex flex-row row-start-1 row-span-5 gap-2">
        <div className="flex justify-center items-center  flex-1 max-w-[120px]">
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

          <p className="text-[13px] text-[#686767]">{description}</p>
        </div>
      </div>
      <div className="flex flex-row row-span-1 row-start-6 justify-between">
        <div className="text-[18px] max-sm:text-[15px] font-[500] flex justify-center items-center ">
          &#8358;{price}
        </div>
        <button
          className={`flex justify-center w-6 h-6 max-800:w-8 max-800:h-8 items-center bg-white  transform transition-transform duration-300 sm:hover:scale-150 hover:shadow-lg rounded-full`}
          onClick={() => handleAddMeal(mealdata, cartdata, setcartdata)}
        >
          <Image
            src={Add}
            alt="add"
            className="w-4 h-4 max-800:w-5 max-800:h-5"
          />
        </button>
      </div>
    </div>
  );
}

// {Restaurant_data.map(({ name, restaurant_image, id }) => (
//     <div className="flex flex-col w-full gap-3" key={id}>
//       {" "}
//       <div className="relative aspect-video overflow-hidden  bg-red-200 w-full rounded-lg">
//         <Image
//           src={restaurant_image}
//           fill
//           alt="name"
//           className="object-cover"
//         />
//       </div>
//       <span
//         className={`font-bold ${Inter_font.className} font-[600]  max-sm:font-[500] text-medium`}
//       >
//         {name}
//       </span>
//     </div>
//   ))}

export default Mealsection;
