import AdminLayout from "@/app/admin/AdminLayout";
import { Inter_font } from "@/app/page";
import FilterBar from "./filterbar";
import SearchBar from "./searchbar";
import OrdersTable from "@/app/_components/orderstable";
import { getOrders, getSingleRestaurant } from "@/_lib/data-service";
import { auth } from "@/_lib/auth";
import DateFilter from "./datefilter";

export const revalidate = 7; // revalidate at most every 8 seconds
export default async function Orders() {
  const session = await auth();
  const OrderData = await getOrders(session.user.admin_id);
  const Restaurant_data = await getSingleRestaurant(session.user.admin_id);
  const { Meals: Meals_data } = Restaurant_data[0];
  // console.log(OrderData)

  return (
    <AdminLayout>
      <div
        className={`w-full h-full ${Inter_font.className} py-5 max-sm:py-3 flex flex-col gap-1 `}
      >
        <div className="flex flex-row justify-between w-full mb-5">
          <span className="font-bold text-[26px]">Orders</span>
          <DateFilter />
        </div>
        <FilterBar />
        <SearchBar MealsData={Meals_data} />
        <OrdersTable RawOrderData={OrderData} />
      </div>
    </AdminLayout>
  );
}
