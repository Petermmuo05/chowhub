import Menu from "../../public/menu.svg";
import Paid from "../../public/paid.svg";
import Orders from "../../public/orders.svg";

import Image from "next/image";
import { Inter_font } from "../page";
import { getAllOrders } from "@/_lib/data-service";
import StatusSection from "../_components/statussection";
import OrderSummary from "../_components/ordersummary";
import OrderRows from "../_components/orderRow";
import UserLayout from "../_components/UserLayout";

export const revalidate = 250; // revalidate at most every four minutes and 10 seconds
export default async function OrderInfo() {
  const orderData = await getAllOrders();
  console.log(orderData, "orderdata");


  // const { cartdata } = useApp();
  // console.log(cartdata);

  return (
    <UserLayout>
      {" "}
      <div className="flex  min-h-[70vh]  ">
        <div className={`flex flex-col w-full ${Inter_font.className}  `}>
          <div className="flex flex-row gap-1 max-sm:text-[28px] max-sm:mt-0 items-center">
            <Image
              src={Orders}
              alt="checkoutpic"
              className="w-10 h-10 max-sm:w-[28px] max-sm:h-[28px]"
            />
            {/* <span className={`${Inter_font.className} text-[35px]  font-[800]`}>
        Checkout
      </span> */}
            <p
              className={`text-[40px] max-sm:text-[27px] trans-range:text-[35px] ${Inter_font.className} font-[600] text-[#333333] `}
            >
              Orders
            </p>{" "}
          </div>

          <OrderRows data={orderData} />

          <OrderSummary Inter_font={Inter_font} />
        </div>
      </div>
    </UserLayout>
  );
}
