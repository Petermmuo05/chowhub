import Image from "next/image";
import Cooking from "../../public/order_cooking.svg";
import StatusSection from "./statussection";
import { capitalizeFirstLetter } from "@/_lib/data-service";
import AdminStatus from "./adminstatus";
export default function OrdersTable({ OrderData }) {
  return (
    <div className="flex flex-col gap-1 w-full overflow-auto ">
      <div className="flex flex-row items-center min-h-10 bg-poster w-full max-sm:text-[13px] max-sm:h-7 max-sm:rounded-md font-semibold ">
        <div className="basis-[8%]  h-full text-center flex flex-1 justify-center items-center">
          Order Id
        </div>
        <div className="basis-[20%]  h-full text-center flex-1 flex justify-center items-center">
          Customer
        </div>
        <div className="basis-[17%] h-full flex-1 text-center flex justify-center items-center">
          Meal
        </div>

        <div className="basis-[20%] max-800:hidden h-full text-center flex justify-center items-center">
          Phone
        </div>

        <div className="basis-[15%] max-800:hidden h-full text-center flex justify-center items-center">
          Price
        </div>
        <div className="basis-[10%]  h-full text-center flex flex-1 justify-center items-center">
          Status
        </div>
        <div className="basis-[10%] max-lg:hidden h-full text-center flex justify-center items-center">
          Action
        </div>
      </div>
      <div className="flex flex-col w-full overflow-auto">
        {OrderData.map((orderdata) => (
          <OrderRow key={orderdata.id} orderdata={orderdata} />
        ))}
      </div>
    </div>
  );
}
function OrderRow({ orderdata }) {
  const {
    id,
    totalprice,
    status,
    quantity,
    KitchenData,
    Meals: { name: meal_name, price: meal_price },
  } = orderdata;
  return (
    <div className="flex flex-row items-center max-800:text-[12px] min-h-10 border border-poster rounded-lg w-full">
      <div className="basis-[8%] flex-1  h-full text-center flex justify-center items-center">
        CH-{id}
      </div>
      <div className="basis-[20%] flex-1 h-full text-center flex justify-center items-center">
        Adeniji Daniella
      </div>
      <div className="basis-[17%] h-full text-center flex flex-1 justify-center items-center">
        {meal_name}
      </div>
      <div className="basis-[20%] h-full flex-1 text-center max-800:hidden flex justify-center items-center">
        +2348888888888
      </div>
      <div className="basis-[15%] h-full text-center max-800:hidden flex justify-center items-center">
        {meal_price}
      </div>
      <div className="basis-[10%] h-full text-center flex justify-center flex-1 items-center">
        {/* <div className="flex flex-row text-[15px] max-sm:text-[11px] trans-range:text-[14px] py-1 items-center px-2 bg-orange-500  rounded-lg">
          <Image
            src={Cooking}
            alt="search"
            className="h-[17px] max-800:h-[13px]"
          />

          <span>{capitalizeFirstLetter(status)}</span>
        </div> */}
        <AdminStatus status={status} />
      </div>
      <div className="basis-[10%] max-lg:hidden h-full text-center flex justify-center items-center">
        Action
      </div>
    </div>
  );
}
