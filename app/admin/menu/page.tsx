import { Inter_font } from "@/app/restaurants/[restaurant]/page";
import AdminLayout from "../AdminLayout";
import MealSection from "./meal_section";
import Image from "next/image";
import Add from "../../../public/add.svg";
import MealForm from "./meal_form";
import SubMealForm from "./submeal_form";
import AddMeal from "./addmeal";
import { getCategories, getSingleRestaurant } from "@/_lib/data-service";

export default async function Menu() {
  const userId = 1;
  const Categories_data = await getCategories();
  const Restaurant_data = await getSingleRestaurant(userId);
  //change this when you add the middleware (remove this)
  if (Restaurant_data.length !== 1) {
    return <div>Not Found</div>;
  }
  console.log(Restaurant_data);
  const { Meals: Meals_data } = Restaurant_data[0];
  console.log(Meals_data, "checking meals data");

  return (
    <AdminLayout>
      <div
        className={`w-full h-full ${Inter_font.className} py-5 max-sm:py-3 flex flex-col gap-1 `}
      >
        <AddMeal />
        <div className="w-full flex flex-col gap-8 ">
          {Categories_data.map((category) => (
            <MealSection
              key={category.id}
              Category={category}
              MealsData={Meals_data}
              Restaurant_data={Restaurant_data}
            />
          ))}
        </div>

        <MealForm categories={Categories_data}/>
        <SubMealForm />
      </div>
    </AdminLayout>
  );
}
