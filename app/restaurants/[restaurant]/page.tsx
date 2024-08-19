import { Inter, Irish_Grover, Kaisei_Tokumin } from "next/font/google";
import Image from "next/image";
import Likes from "../../../public/likes.png";
import Mood from "../../../public/mood.png";
import Pay from "../../../public/payments.png";
import Time from "../../../public/timer.png";
import Background from "../../../public/foodbasket.png";
import Mealsection from "@/app/_components/mealsection.tsx";
import Cartsection from "@/app/_components/cartsection.tsx";
// import { useApp } from "@/app/_components/appcontext";
import Localnav from "../../_components/localnav";

import {
  getCategories,
  getRestaurantMeals,
  getRestaurants,
  getSingleRestaurant,
} from "@/_lib/data-service.tsx";
import UserLayout from "@/app/_components/UserLayout";

export const revalidate = 250; // revalidate at most every hour
export const Inter_font = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "900", "800"],
});

async function Restaurant({ params }) {
  const kitchenId = params.restaurant; //the restaurant name
  console.log(typeof kitchenId);
  console.log(/^\d+$/.test(kitchenId));
  if (typeof kitchenId !== "string" || !/^\d+$/.test(kitchenId)) {
    return <div>Not Found</div>;
  }
  const Restaurant_data = await getSingleRestaurant(Number(kitchenId));
  if (Restaurant_data.length !== 1) {
    return <div>Not Found</div>;
  }
  const Restaurant = Restaurant_data[0];
  const { name } = Restaurant;
  const Categories_data = await getCategories();
  const Meals_data = await getRestaurantMeals(Number(kitchenId));
  console.log("meals", Meals_data);

  console.log("categories", Categories_data);
  return (
    <UserLayout>
      <div className="flex items-end relative bg-[#8B4513] justify-center w-full h-[30vh] max-sm:h-[25vh] rounded-lg rounded-tr-[40px] mt-3 ">
        {/* <Image src={Background} fill className="object-cover" alt="behind" /> */}
        <div className="flex flex-col relative  justify-between  h-[28vh] max-sm:h-[23vh] w-full px-10 max-sm:px-7 max-sm:pb-5 pb-10 rounded-lg rounded-tr-[40px] bg-poster restaurant-shadow ">
          {/* <div className="blurred-div">
        <Image
          src={Background}
          fill
          alt="background"
          className="object-cover l-0 t-0 z-[-1] absolute"
        />
      </div> */}
          {/* <div className */}

          <div className="flex justify-center items-center w-[80px] h-[80px] max-sm:w-[60px] max-sm:h-[60px] text-secondaryheader restaurant-shadow  rounded-lg -mt-5 bg-white ">
            MD
          </div>
          <p
            className={`text-restaurantext ${Inter_font.className} font-[600] `}
          >
            {name}
          </p>
          <div className="flex flex-row gap-6 items-center text-[#333333]">
            <div className="flex flex-col items-center">
              {" "}
              <div className="relative w-7 h-7">
                <Image
                  src={Likes}
                  className="object-cover"
                  fill
                  alt="MainImage"
                />
              </div>
              <span className="text-footertext font-bold">90%</span>
            </div>

            <div className="flex flex-col items-center">
              {" "}
              <div className="relative w-7 h-7">
                <Image
                  src={Time}
                  className="object-cover"
                  fill
                  alt="MainImage"
                />
              </div>
              <span className="text-footertext font-bold">25-40`</span>
            </div>

            <div className="flex flex-col items-center ">
              {" "}
              <div className="relative w-7 h-7">
                <Image
                  src={Pay}
                  className="object-cover"
                  fill
                  alt="MainImage"
                />
              </div>
              <span className="text-footertext font-bold">#350</span>
            </div>

            <div className="flex flex-col items-center">
              {" "}
              <div className="relative w-7 h-7">
                <Image
                  src={Mood}
                  className="object-cover"
                  fill
                  alt="MainImage"
                />
              </div>
              <span className="text-footertext font-bold">Prime</span>
            </div>
          </div>
        </div>
      </div>
      {/* <Localnav /> */}
      {Categories_data.map((category) => (
        <Mealsection
          font={Inter_font}
          key={category.id}
          Category={category}
          MealsData={Meals_data}
        />
      ))}
      <Cartsection id={kitchenId} />
    </UserLayout>
    //background of image blurred and box shadow
  );
}

export default Restaurant;
