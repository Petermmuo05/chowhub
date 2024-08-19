"use client";
import Link from "next/link";
import Dropdown from "../../public/forward.svg";
import Dashboard from "../../public/dashboard.svg";
import Orders from "../../public/admin_orders.svg";
import Menu from "../../public/restaurant_menu.svg";
import Analytics from "../../public/analytics.svg";
import Image from "next/image";
import { useApp } from "../_components/appcontext";

export default function MobileSidebar() {
  const { isSideBar, setSideBar } = useApp();
  if (!isSideBar) return null;

  return (
    <div className="h-full bg-poster min-sm:hidden fixed z-[100] left-0 top-[38px] flex-col flex pt-7 text-[14px] z-1 w-[200px]">
      <Link
        href={"/admin"}
        onClick={() => setSideBar(false)}
        className="flex flex-row items-center rounded-lg hover:bg-[#e7e7e7] px-2 py-2 justify-between"
      >
        <div className="flex-row gap-3 flex items-center">
          <Image src={Dashboard} alt="bags" className="w-5 h-5" />

          <span className="font-bold text-[#6a6c5a]">Dashboard</span>
        </div>{" "}
        <Image src={Dropdown} alt="dropdown" className="w-4 h-4" />
      </Link>{" "}
      <Link
        href={"/admin/orders"}
        onClick={() => setSideBar(false)}
        className="flex flex-row items-center rounded-lg hover:bg-[#e7e7e7] px-2 py-2 justify-between"
      >
        <div className="flex-row gap-3 flex items-center">
          <Image src={Orders} alt="bags" className="w-5 h-5" />

          <span className="font-bold text-[#6a6c5a]">Orders</span>
        </div>{" "}
        <Image src={Dropdown} alt="dropdown" className="w-4 h-4" />
      </Link>
      <Link
        href={"/admin/menu"}
        onClick={() => setSideBar(false)}
        className="flex flex-row items-center rounded-lg hover:bg-[#e7e7e7] px-2 py-2 justify-between"
      >
        <div className="flex-row gap-3 flex items-center">
          <Image src={Menu} alt="bags" className="w-5 h-5" />

          <span className="font-bold text-[#6a6c5a]">Menu</span>
        </div>{" "}
        <Image src={Dropdown} alt="dropdown" className="w-4 h-4" />
      </Link>
      <Link
        href={"/admin/analytics"}
        onClick={() => setSideBar(false)}
        className="flex flex-row items-center rounded-lg hover:bg-[#e7e7e7] px-2 py-2 justify-between"
      >
        <div className="flex-row gap-3 flex items-center">
          <Image src={Analytics} alt="bags" className="w-5 h-5" />

          <span className="font-bold text-[#6a6c5a]">Analytics</span>
        </div>{" "}
        <Image src={Dropdown} alt="dropdown" className="w-4 h-4" />
      </Link>
    </div>
  );
}
