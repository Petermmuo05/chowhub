import { Inter } from "next/font/google";

import { getRestaurants } from "@/_lib/data-service";
import UserLayout from "../UserLayout";
import Payments from "./payment";
import MainCheckout from "./maincheckout";
import { auth } from "@/_lib/auth";

const Inter_font = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "900", "800"],
});

export default async function Checkout() {
  const Restaurant_data = await getRestaurants();
  const session=await auth()

  return (
    <UserLayout>
      {" "}
      <MainCheckout Restaurant_data={Restaurant_data} session={session} />
    </UserLayout>
  );
}

// function Summary() {
//   return (
//     <div className="flex bg-poster shadow-lg mt-10 max-800:hidden flex-col gap-8 px-5 py-8 rounded-lg basis-[40%] h-fit min-w-[300px] font-bold  ">
//       <span
//         className={`${Inter_font.className} font-[800]  max-sm:text-[22px] text-[30px]`}
//       >
//         Summary
//       </span>
//       <div className="flex flex-col gap-3 items-center">
//         {" "}
//         <div className="flex flex-row items-center justify-between mt-4 w-full">
//           <span>Products</span>
//           <span>&#8358;5000.00</span>
//         </div>
//         <div className="flex flex-row items-center justify-between w-full">
//           <span>Services</span>
//           <span>&#8358;100.00</span>
//         </div>
//         <div
//           className={`flex flex-row items-center justify-between ${Inter_font.className} font-[800] mt-5 max-sm:text-[20px] text-[27px] w-full`}
//         >
//           <span>Total</span>
//           <span>&#8358;5100.00</span>
//         </div>
//       </div>

//       <div
//         className={`flex sticky ${Inter_font.className} justify-center bg-[#32CD32] mx-auto w-full text-poster shadow-lg rounded-[20px] font-bold text-[20px] items-center py-2`}
//       >
//         Confirm Order
//       </div>
//     </div>
//   );
// }
