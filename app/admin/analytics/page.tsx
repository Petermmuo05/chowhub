import { Inter_font } from "@/app/page";
import AdminLayout from "../AdminLayout";
import DashboardAnalytics from "@/app/_components/analytics_section";

export default function Analytics() {
  return (
    <AdminLayout>
      <div
        className={`w-full h-full ${Inter_font.className} py-5 max-sm:py-3 flex flex-col gap-1 `}
      >
        <span className="font-bold text-[26px]">Analytics</span>
        <DashboardAnalytics />
      </div>
    </AdminLayout>
  );
}
