import Image from "next/image";
import MainImage from "../../public/testmealimage.jpg";
import { getMostOrderedMeal, Meal } from "@/_lib/analytics";

export default function DashboardMeal({ orderData }) {
  const mealArr = getMostOrderedMeal(orderData);
  return (
    <div className="flex flex-col px-0 gap-2 ">
      <span className="font-bold"> Most Ordered Meals</span>
      <div className="w-full grid grid-cols-3 max-sm:grid-cols-2 gap-3 ">
        {mealArr.slice(0, 3).map((Meal: Meal) => {
          const { name, price, count, meal_image } = Meal;
          return (
            <div
              key={name}
              className="relative w-full h-[200px] max-sm:h-[150px] items-center rounded-lg overflow-hidden bg-poster flex flex-col"
            >
              <div className="basis-3/4 w-full relative">
                <Image
                  src={meal_image}
                  fill
                  alt="name"
                  className="object-cover"
                />
              </div>
              <div className="basis-1/4 w-full px-3 flex justify-center flex-col">
                <span className="font-bold text-[13px]">{name}</span>
                <span className="text-[11px]  ">#{price}</span>
              </div>
              <div className="flex item-center justify-center px-2 py-1 rounded-md bg-poster font-extrabold absolute right-3 top-3">
                {count}
              </div>
            </div>
          );
        })}

        {/* <div className="w-full h-[200px] items-center rounded-lg overflow-hidden bg-poster flex flex-col">
          <div className="basis-3/4 w-full relative">
            <Image src={MainImage} fill alt="name" className="object-cover" />
          </div>
          <div className="basis-1/4 w-full px-3 flex justify-center flex-col">
            <span className="font-bold text-[13px]">Chicken Fried Rice</span>
            <span className="text-[11px]  ">#13000</span>
          </div>
        </div> */}
      </div>
    </div>
  );
}
