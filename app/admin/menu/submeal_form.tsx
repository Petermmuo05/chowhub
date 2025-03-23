"use client";
import { deleteSingleSubMeal, updateSubMeals } from "@/_lib/actions";
import { useApp } from "@/app/_components/appcontext";
import Blurdiv from "@/app/_components/blurdiv";
import { useEffect } from "react";
import { Form, useForm } from "react-hook-form";

export default function SubMealForm() {
  const { subMealFormData, setSubMealFormData } = useApp();

  const { name, id, price, meal_image, minQty, meal_id } = subMealFormData;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      id,
      name,
      price,
      minQty,
      meal_image,
      meal_id,
      file_data: "",
    },
  });
  useEffect(() => {
    reset(subMealFormData);
  }, [reset, subMealFormData]);

  async function handleCallDelete(id) {
    try {
      const data = await deleteSingleSubMeal(id);
      console.log("Deleted record:", data);
    } catch (error) {
      console.error("Delete failed:", error.message);
    }
    setSubMealFormData({}); //close the form popup
  }

  function isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
  }

  return (
    !isEmptyObject(subMealFormData) && (
      <Blurdiv setter={setSubMealFormData} value={{}}>
        <form
          action={updateSubMeals}
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col max-sm:centerXY w-[300px] px-4 py-5 h-[320px] bg-poster shadow-2xl rounded-xl fixed max-sm:right-1/2 max-sm:bottom-1/2 max-sm:transform max-sm:translate-x-1/2 max-sm:translate-y-1/2 bottom-2 right-[360px] "
        >
          <span className="text-[20px] font-bold">Edit Sub Meal:</span>

          <div className="w-full flex flex-col justify-center mt-3 gap-2">
            <input type="text" hidden {...register("id")} />
            <input type="text" hidden {...register("meal_id")} />
            <input
              type="text"
              placeholder="Sub-Meal Name"
              className="w-full rounded-md bg-poster py-1 px-3 border border-[#333333]"
              {...register("name", { required: "Name is required" })}
            />
            <input
              type="number"
              placeholder="Price(number)"
              className="bg-poster border-[#333333] border py-1 px-3 rounded-md"
              {...register("price", { required: "Price is required" })}
            />
            <input
              type="number"
              placeholder="Minimum Quantity(number)"
              className="bg-poster border-[#333333] border py-1 px-3 rounded-md"
              {...register("minQty", { required: "Min-quantity is required" })}
            />
            <div className="flex flex-col mt-3">
              <span className="font-semibold">Meal-Image:</span>
              <input type="file" {...register("file_data")} accept=".avif" />
              <input type="text" {...register("meal_image")} hidden />
            </div>
            <div className="flex w-full px-3 absolute bottom-2 centerX flex-row items-center justify-between">
              <div
                onClick={() => id && handleCallDelete(id)}
                className={`py-2 px-3 font-semibold  ${
                  id ? "bg-red-500" : "bg-gray-300"
                } border rounded-md cool-s-button `}
              >
                Delete Meal
              </div>
              <button
                type="submit"
                className="py-2 px-3 font-semibold bg-lime rounded-md  border cool-s-button"
              >
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </Blurdiv>
    )
  );
}
