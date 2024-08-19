import AdminLayout from "./AdminLayout";
import Search from "../../public/search.svg";
import Filter from "../../public/filter.svg";

import Image from "next/image";
import { Inter_font } from "../page";
import DashboardAnalytics from "../_components/analytics_section";
import DashboardMeal from "../_components/dashboardMeal";
import OrdersTable from "../_components/orderstable";
import { getRestaurants, getSingleRestaurant } from "@/_lib/data-service";

export default async function AdminDashboard() {
  const userId=1
  const RestaurantData = await getSingleRestaurant(userId);

  return (
    <AdminLayout>
      <div
        className={`w-full h-full ${Inter_font.className} py-5 max-sm:py-3 flex flex-col gap-1 `}
      >
        <span className="font-bold mb-1">Analytics</span>
        <DashboardAnalytics />
        <DashboardMeal />

        <div className="flex flex-row w-full h-10 mt-3 border items-center px-3 justify-between border-poster rounded-md">
          <span className="font-bold max-sm:text-[14px]">Recent Orders</span>
          <div className="flex flex-row items-center">
            <div className="flex flex-row items-center border-poster px-2 h-8 gap-1 border rounded-md w-fit">
              <Image src={Filter} alt="filter" className="h-[17px]" />
              <span className="text-[14px] text-[#b4b4a2]">Filters</span>
            </div>
            <div className="flex flex-row items-center border-poster px-1 h-8 border rounded-md w-fit">
              <Image src={Search} alt="search" className="h-[17px]" />{" "}
              <input
                type="text"
                placeholder="Search OrderId"
                className="text-[14px] py-1 removefocus max-sm:w-[110px]"
              />
            </div>
          </div>
        </div>
        <OrdersTable />
      </div>
    </AdminLayout>
  );
}
