"use client";
import Image from "next/image";

import { useMediaQuery } from "react-responsive";
import StatusSection from "./statussection";
import Menu from "../../public/menu.svg";
import Paid from "../../public/paid.svg";
import { useApp } from "./appcontext.tsx";
import { useEffect, useState } from "react";
import { Order } from "@/_lib/data-service.tsx";

export default function OrderRows({ data: orderData }: { data: Order }) {
  const { setSummaryData, summaryData } = useApp();
  const [isSmallScreen, setSmallScreen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width:600px)" });
  function handleClickMenu(data) {
    //on menu image only visible on large screens
    if (!summaryData.data) setSummaryData(data);
    else setSummaryData({});
  }
  function handleClickMainBody(data) {
    //clicks on main body should only be allowed on small screens
    if (!summaryData.data) isSmallScreen && setSummaryData(data);
    else setSummaryData({});
  }

  useEffect(
    function () {
      setSmallScreen(isMobile);
    },
    [isMobile, setSmallScreen]
  );
  console.log(summaryData, "this is summary data");
  return orderData.map((order) => {
    const {
      id: order_id,
      totalprice,
      status,
      KitchenData,
      quantity,
      Meals,
    } = order;
    const { id: kitchen_id, name: kitchenName, location } = KitchenData;
    const title = Meals.name;

    return (
      <div
        key={order_id}
        onClick={() => handleClickMainBody(order)}
        className="flex flex-col w-full px-5 py-3 mt-5 h-fit rounded-lg bg-poster"
      >
        <div className="flex items-center justify-between max-sm:items-end flex-row">
          <div className="flex max-sm:items-start items-center max-sm:gap-1 max-sm:flex-col gap-2 text-[20px] max-800:text-[15px] font-semibold flex-row">
            <span className="max-sm:font-bold max-sm:text-[16px]">
              CH-{order_id}
            </span>
            <span className="max-sm:hidden">|</span>
            <span>{shortenText(title, 23)}...</span>
          </div>
          <div className="flex items-center  gap-2 flex-row">
            <span className="text-[18px] max-800:text-[14px]">
              &#8358;{totalprice}.00
            </span>
            <div className="flex px-2 py-1 max-800:py-0 max-800:px-1  bg-lime rounded-lg gap-1 text-[13px] max-800:[8px] items-center">
              <Image
                src={Paid}
                alt="menu"
                className="w-4 h-4 max-800:w-3 max-800:h-3"
              />
              <span>Paid</span>
            </div>
            <Image
              src={Menu}
              alt="menu"
              className="ml-3 max-sm:hidden"
              onClick={() => handleClickMenu(order)}
            />
          </div>
        </div>
        <div className="flex flex-row gap-1 text-[13px] items-center font-extralight">
          <span>{kitchenName} </span>
          <span className="">&middot;</span>
          <span>{location}</span>
        </div>

        {status === "ready" || "placed" || "cooking" ? (
          <StatusSection status={status} />
        ) : (
          <div className="flex mt-3 py-1 px-4 bg-lime text-poster w-fit text-[17px] max-800:text-[12px] rounded-lg">
            {status}
          </div>
        )}
      </div>
    );
  });
}

// function StatusSection({ status }) {
//   let num;

//   switch (status) {
//     case "placed":
//       num = 0;
//       break;
//     case "cooking":
//       num = 1;
//       break;
//     case "ready":
//       num = 2;
//       break;
//     default:
//       num = -1; // or some other default value if status is unknown
//   }

//   let description =
//     status === "placed"
//       ? "Order has been placed"
//       : status === "cooking"
//       ? "Order is being prepared"
//       : status === "ready"
//       ? "Order is ready for pickup"
//       : "";

//   return (
//     <div className="bg-[#ddddc8] mt-3 text-[13px] flex-col rounded-lg px-4 flex gap-1 p-2 w-full bg-blue font-semibold">
//       <div className="flex flex-row items-center gap-2">
//         <span className="">{description} </span>
//         <span className="font-extralight">August 1, 2024</span>
//       </div>

//       <div className="flex gap-1 flex-row items-center">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           height="30px"
//           viewBox="0 -960 960 960"
//           width="30px"
//           fill={num >= 0 ? "green" : "#5f6368"}
//         >
//           <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93ZM320-320v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T663-540L443-320H320Zm300-263-37-37 37 37ZM380-380h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z" />
//         </svg>{" "}
//         <div
//           className={`flex w-20 h-1 ${
//             num >= 1 ? "bg-lime" : "bg-[#5f6368]"
//           } rounded-lg `}
//         ></div>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           height="30px"
//           viewBox="0 -960 960 960"
//           width="30px"
//           fill={num >= 1 ? "green" : "#5f6368"}
//         >
//           <path d="M177-560q14-36 4.5-64T149-680q-33-40-43.5-75.5T102-840h78q-8 38-2.5 62t28.5 52q38 46 48.5 81.5t.5 84.5h-78Zm160 0q14-36 5-64t-32-56q-33-40-44-75.5t-4-84.5h78q-8 38-2.5 62t28.5 52q38 46 48.5 81.5t.5 84.5h-78Zm160 0q14-36 5-64t-32-56q-33-40-44-75.5t-4-84.5h78q-8 38-2.5 62t28.5 52q38 46 48.5 81.5t.5 84.5h-78ZM200-160q-50 0-85-35t-35-85v-200h561q5-34 27-59.5t54-36.5l185-62 25 76-185 62q-12 4-19.5 14.5T720-462v182q0 50-35 85t-85 35H200Zm0-80h400q17 0 28.5-11.5T640-280v-120H160v120q0 17 11.5 28.5T200-240Zm200-80Z" />
//         </svg>{" "}
//         <div
//           className={`flex w-20 h-1 ${
//             num >= 2 ? "bg-lime" : "bg-[#5f6368]"
//           } rounded-lg `}
//         ></div>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           height="30px"
//           viewBox="0 -960 960 960"
//           width="30px"
//           fill={num >= 2 ? "green" : "#5f6368"}
//         >
//           <path d="m424-318 282-282-56-56-226 226-114-114-56 56 170 170ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm280-590q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790ZM200-200v-560 560Z" />
//         </svg>
//       </div>
//     </div>
//   );
// }

export function shortenText(text: string, maxLength: number) {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength);
}
