import { Inter } from "next/font/google";
import Checkoutpic from "../../public/checkout.svg";
import Image from "next/image";

import Card from "../../public/card.svg";
import Products from "../../public/products.svg";
import Dropdown from "../../public/arrowdown.svg";
import Remove from "../../public/remove.png";
import Add from "../../public/add.png";
// import { useApp } from "../_components/appcontext";
import CheckoutList, { RestaurantName } from "../_components/checkoutlist";
import { LargeSummary, SmallSummary } from "../_components/summary";
import { getRestaurants, getSingleRestaurant } from "@/_lib/data-service";
import UserLayout from "../UserLayout";

const Inter_font = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "900", "800"],
});

export default async function Checkout() {
  const Restaurant_data = await getRestaurants();

  return (
    <UserLayout>
      {" "}
      <div className="w-full flex flex-col text-[#333333]">
        <div className="flex flex-row gap-2 mt-5 items-center">
          <Image
            src={Checkoutpic}
            alt="checkoutpic"
            className="w-10 h-10 max-sm:w-7 max-sm:h-7"
          />
          {/* <span className={`${Inter_font.className} text-[35px]  font-[800]`}>
        Checkout
      </span> */}
          <RestaurantName Inter_font={Inter_font} data={Restaurant_data} />
        </div>
        <div className="w-full flex flex-row gap-10 ">
          <div className="flex flex-col w-full item-center">
            <CheckoutList />
            <div className="bg-[#ffea74] w-full flex flex-col mt-3 px-3 rounded-lg border  border-[#FF4D00] items-start py-2 ">
              <span className="font-bold text-[14px]">55-65 mins</span>
              <span className="text-[12px]">As soon as possible</span>
            </div>
            <div className="flex flex-col mt-10 font-bold w-full ">
              <span
                className={`${Inter_font.className} font-[600] max-sm:text-[20px] text-[30px]`}
              >
                Payment method
              </span>
              <div className="bg-poster w-full flex flex-row px-3 rounded-lg items-center justify-between py-4 ">
                <div className="flex flex-row gap-3 items-center">
                  {" "}
                  <Image
                    src={Card}
                    alt="cardpic"
                    className="w-10 h-10 max-sm:w-7 max-sm:h-7"
                  />{" "}
                  <span>Pay by Card</span>
                </div>
                <Image
                  src={Dropdown}
                  alt="dropdown"
                  className="w-10 h-10 self-end max-sm:w-7 max-sm:h-7"
                />
              </div>
            </div>
            {/* <div className="flex min-800:hidden bg-poster p-3 shadow-lg flex-col max-sm:gap-[6px] mt-5 rounded-lg font-bold w-full ">
          <span
            className={`${Inter_font.className} font-[800]  max-sm:text-[22px] text-[30px]`}
          >
            Summary
          </span>
          <div className="flex flex-row items-center justify-between mt-4 w-full">
            <span>Products</span>
            <span>&#8358;5000.00</span>
          </div>
          <div className="flex flex-row items-center justify-between w-full">
            <span>Services</span>
            <span>&#8358;100.00</span>
          </div>
          <div
            className={`flex flex-row items-center justify-between ${Inter_font.className} font-[800] mt-5 max-sm:text-[20px] text-[27px] w-full`}
          >
            <span>Total</span>
            <span>&#8358;5100.00</span>
          </div>
        </div> */}
            <LargeSummary Inter_font={Inter_font} />
          </div>
          <SmallSummary Inter_font={Inter_font} />
        </div>
      </div>
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
