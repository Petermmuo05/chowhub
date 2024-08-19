import AdminLayout from "@/app/admin/AdminLayout";
import { Inter_font } from "@/app/page";
import FilterBar from "./filterbar";
import SearchBar from "./searchbar";
import OrdersTable from "@/app/_components/orderstable";

export default function Orders() {
  return (
    <AdminLayout>
      <div
        className={`w-full h-full ${Inter_font.className} py-5 max-sm:py-3 flex flex-col gap-1 `}
      >
        <div className="flex flex-row justify-between w-full mb-5">
          <span className="font-bold text-[26px]">Orders</span>
          <div className="flex flex-row gap-1 items-center ">
            {" "}
            <div className="px-2 border border-poster rounded-lg cool-button text-[14px] font-bold py-1">
              Today
            </div>
            <div className="px-2 border border-poster rounded-lg cool-button text-[14px] font-bold py-1">
              This Week
            </div>
            <div className="px-2 border border-poster rounded-lg text-[14px] cool-button font-bold py-1">
              All
            </div>
          </div>
        </div>
        <FilterBar />
        <SearchBar />
        <OrdersTable/>
      </div>
    </AdminLayout>
  );
}
