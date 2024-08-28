"use client";
import Image from "next/image";
import MainImage from "../../../public/testmealimage.jpg";
import Add from "../../../public/add.svg";
import { useApp } from "@/app/_components/appcontext";
import Blurdiv from "@/app/_components/blurdiv";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { deleteSingleMeal, updateMeals } from "@/_lib/actions";

export default function MealForm({ categories }) {
  const { setMealFormData, mealFormData, setSubMealFormData } = useApp();
  function isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
  }

  const { name, id, price, description, meal_image, category_id } =
    mealFormData;
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
      description,
      meal_image,
      file_data: "",
      category_id,
    },
  });
  useEffect(() => {
    reset(mealFormData);
  }, [reset, mealFormData]);

  async function onSubmit(formdata, event) {
    event.preventDefault();
    const image =
      typeof formdata.meal_image === "string"
        ? formdata.meal_image
        : formdata.meal_image[0];
    const newdata = { ...formdata, meal_image: image };
    console.log(newdata);
    // const updated = await updateMeals(formdata);
  }

  async function handleCallDelete(id) {
    try {
      const data = await deleteSingleMeal(id);
      console.log("Deleted record:", data);
    } catch (error) {
      console.error("Delete failed:", error.message);
    }
    setMealFormData({}); //close the form popup
  }
  return (
    !isEmptyObject(mealFormData) && (
      <Blurdiv setter={setMealFormData} value={{}}>
        <form
          action={updateMeals}
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col w-[350px] px-4 py-5 h-[600px] bg-poster shadow-2xl max-sm:right-1/2 max-sm:bottom-1/2 max-sm:transform max-sm:translate-x-1/2 max-sm:translate-y-1/2 rounded-xl fixed bottom-2 right-2 "
        >
          <span className="text-[25px] font-bold">Edit Meal:</span>
          <div className="w-full flex flex-col justify-center mt-3">
            <input
              type="text"
              placeholder="Meal Name"
              className="w-full rounded-md bg-poster py-1 px-3 border border-[#333333]"
              {...register("name", { required: "Name is required" })}
            />
            <input type="text" hidden {...register("id")} />
            <textarea
              id=""
              name=""
              placeholder="Enter Meal Description"
              className="bg-poster border-[#333333] border px-3 py-1 mt-1 rounded-md"
              rows={4}
              cols={50}
              {...register("description", {
                required: "Description is required",
              })}
            ></textarea>
            <div className="flex flex-row items-center gap-1 mt-1">
              {/* <span>Price:</span> */}
              <input
                type="number"
                placeholder="Price(number)"
                className="bg-poster border-[#333333] border py-1 px-3 rounded-md"
                {...register("price", { required: "Price is required" })}
              />
            </div>
            <select
              className="bg-poster mt-1 border-[#333333] border py-1 px-2 rounded-md"
              {...register("category_id", { required: "Category is required" })}
            >
              {categories.map(({ name, id }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </select>

            <div className="flex flex-col mt-3">
              <span className="font-semibold">Meal-Image:</span>
              <input type="file" {...register("file_data")} accept=".avif" />
              <input type="text" {...register("meal_image")} hidden />
            </div>
            <span className="font-semibold mt-3">Sub-Meals:</span>

            {/* sub meals section You have to add scroll to this div */}
            <div className="w-full flex flex-col  ">
              <div
                onClick={() => setSubMealFormData({})}
                className="flex flex-row font-medium items-center justify-between border-[#333333] border px-2 bg-[#FFFDD0] py-[2px] rounded-xl cool-s-button"
              >
                <div className="flex flex-row font-medium items-center gap-1">
                  <div className="flex justify-center  items-center rounded-full overflow-hidden">
                    <Image
                      src={MainImage}
                      className="w-[35px] h-[35px]"
                      alt="MainImage"
                    />
                  </div>
                  <span className="">Fried Eggs</span>
                </div>
                <span className="">#5000</span>
              </div>
            </div>
            {/*end of sub meals section */}
            <div className="w-full flex flex-row justify-end mt-2">
              <div
                onClick={() => setSubMealFormData({})}
                className="px-5 py-2 bg-[#FFFDD0] text-[#32CD32] cool-button font-bold text-[12px] rounded-xl items-center flex flex-row justify-center"
              >
                <Image
                  src={Add}
                  className="w-[14px] h-[14px]"
                  alt="MainImage"
                />
                <span> Add Sub Meal</span>
              </div>
            </div>
          </div>
          <div className="flex w-full px-3 absolute bottom-2 centerX flex-row items-center justify-between">
            <div
              onClick={() => id && handleCallDelete(id)}
              className={`py-2 px-5 font-semibold  ${
                id ? "bg-red-500" : "bg-gray-300"
              } border rounded-md cool-s-button `}
            >
              Delete Meal
            </div>
            <button
              type="submit"
              className="py-2 px-5 font-semibold bg-lime rounded-md  border cool-s-button"
            >
              Save Changes
            </button>
          </div>
        </form>
      </Blurdiv>
    )
  );
}
