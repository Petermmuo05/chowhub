"use client";
import { useRef } from "react";
// import { Inter_font } from "../page";
import useOutsideClick from "./customHook";
import { useApp } from "./appcontext.tsx";
import { Order } from "@/_lib/data-service.tsx";

export default function OrderSummary({ Inter_font }) {
  const { summaryData, setSummaryData } = useApp();
  const divRef = useRef(null);
  // const { data, orderId, totalPrice } = summaryData;
  const { id: orderId, Meals, quantity, totalprice } = summaryData;

  console.log(summaryData);
  function handleOutsideClick() {
    console.log("Clicked outside the target div");
    //make summaryData an empty array so that the modal disappears
    setSummaryData({});
    // Your action here
  }
  function isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
  }

  useOutsideClick(divRef, handleOutsideClick);
  return (
    !isEmptyObject(summaryData) && (
      <div
        ref={divRef}
        className="flex stripe-shadow bg-poster  border-yellow-500 border-2 centerXY z-[10] flex-col fixed px-5 py-8 rounded-lg h-[250px] max-sm:h-[210px] overflow-y-auto w-[30%] min-w-[300px] mx-auto font-bold  "
      >
        <span
          className={`${Inter_font.className} font-[800]  max-sm:text-[22px] text-[30px]`}
        >
          Order CH-{orderId}
        </span>
        {/* <div className="flex flex-row items-center justify-between mt-4 w-full">
      <span>Products</span>
      <span>&#8358;5000.00</span>
    </div> */}
        <div className="w-full flex h-[75%] overflow-auto scrollbar-hide mt-5 flex-col ">
          <div
            key={orderId}
            className={`flex flex-row w-full  justify-between`}
          >
            <div className="flex flex-col">
              <span className="max-sm:text-[15px] trans-range:text-[16px] text-[18px] font-[700]">
                {Meals.name}
              </span>
              <span className="max-sm:text-[13px] trans-range:text-[14px] text-[16px] font-[400]">{`${
                Number(Meals.price)
              }.00 NGN`}</span>
            </div>
            <div className="flex flex-row items-center gap-1">
              <span className="max-sm:text-[15px] text-[18px] trans-range:text-[16px] font-bold">
                {quantity}X
              </span>
            </div>
          </div>
        </div>

        <div
          className={`flex flex-row items-center justify-between ${Inter_font.className} font-[800] mt-5 max-sm:text-[20px] text-[27px] w-full`}
        >
          <span>Total</span>
          <span>&#8358;{totalprice}.00</span>
        </div>
      </div>
    )
  );
}
