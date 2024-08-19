import NextTopLoader from "nextjs-toploader";
import AdminHeader from "./adminHeader";
import Link from "next/link";
import { Inter_font, Irish } from "../page";
import Profilepic from "../../public/profilepic.jpg";
import Dropdown from "../../public/forward.svg";
import Dashboard from "../../public/dashboard.svg";
import Orders from "../../public/admin_orders.svg";
import Menu from "../../public/restaurant_menu.svg";
import Analytics from "../../public/analytics.svg";

import Image from "next/image";
import Sidebar from "./sidebar";
import MobileSidebar from "./mobileSidebar";
import HeaderIcons from "./headerIcons";

export default function AdminLayout({ children }) {
  return (
    <div className="flex flex-col h-[100vh] w-[100vw] bg-white ">
      <NextTopLoader color="#FF8C00" height={3} showSpinner={false} />
      <AdminHeader>
        <Link
          href="/"
          className={`${Irish.className} text-poster text-[30px] max-sm:text-[20px]`}
        >
          ChowHub
        </Link>
        <HeaderIcons />
        {/* <ProfileMenu menu={<Blurdiv />} /> */}
      </AdminHeader>
      <div className="flex flex-row justify-between h-[100vh] w-full z-1 ">
        <MobileSidebar />
        <Sidebar />
        <div
          className={`w-full h-full ${Inter_font.className} flex flex-col pt-[53px] max-sm:pt-[38px] overflow-y-auto gap-1 px-5 max-sm:px-2 `}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
