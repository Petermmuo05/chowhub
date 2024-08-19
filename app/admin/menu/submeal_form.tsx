"use client";
import { useApp } from "@/app/_components/appcontext";
import Blurdiv from "@/app/_components/blurdiv";

export default function SubMealForm() {
  const {
    subMealFormData,
    setSubMealFormData,

  } = useApp();
  function isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
  }
  return (
    !isEmptyObject(subMealFormData) && (
      <Blurdiv setter={setSubMealFormData} value={{}}>
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col max-sm:centerXY w-[300px] px-4 py-5 h-[320px] bg-poster shadow-2xl rounded-xl fixed max-sm:right-1/2 max-sm:bottom-1/2 max-sm:transform max-sm:translate-x-1/2 max-sm:translate-y-1/2 bottom-2 right-[360px] "
        >
          <span className="text-[20px] font-bold">Edit Sub Meal:</span>

          <div className="w-full flex flex-col justify-center mt-3 gap-2">
            <input
              type="text"
              placeholder="Sub-Meal Name"
              className="w-full rounded-md bg-poster py-1 px-3 border border-[#333333]"
            />
            <input
              type="number"
              placeholder="Price(number)"
              className="bg-poster border-[#333333] border py-1 px-3 rounded-md"
            />
            <input
              type="number"
              placeholder="Minimum Quantity(number)"
              className="bg-poster border-[#333333] border py-1 px-3 rounded-md"
            />
            <div className="flex flex-col mt-3">
              <span className="font-semibold">Meal-Image:</span>
              <input type="file" />
            </div>
            <div className="flex w-full px-3 absolute bottom-2 centerX flex-row items-center justify-between">
              <div className="py-2 px-3 font-semibold bg-red-500 border rounded-md cool-s-button ">
                Delete Meal
              </div>
              <div className="py-2 px-3 font-semibold bg-lime rounded-md  border cool-s-button">
                Save Changes
              </div>
            </div>
          </div>
        </div>
      </Blurdiv>
    )
  );
}
