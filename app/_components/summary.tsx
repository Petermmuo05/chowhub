"use client";

import { placeOrder } from "@/_lib/actions.tsx";
import { useApp } from "./appcontext.tsx";

export function SmallSummary({ session }) {
  const { cartdata, setcartdata, checkOutKitchenId } = useApp();
  const checkoutCart = cartdata.filter(
    ({ kitchen_id }) => kitchen_id === Number(checkOutKitchenId)
  );
  const cartlength = checkoutCart.length;
  const totalPrice = checkoutCart.reduce(totalSum, 0);
  const services = 100;


  function totalSum(total, item) {
    const { price, qty } = item;
    return total + Number(price) * qty;
  }
  console.log(cartdata, "This is the cartdata");

  return (
    <div className="flex bg-poster shadow-lg mt-10 max-800:hidden flex-col gap-8 px-5 py-8 rounded-lg basis-[40%] h-fit min-w-[300px] font-bold  ">
      <span className={` font-[800]  max-sm:text-[22px] text-[30px]`}>
        Summary
      </span>
      <div className="flex flex-col gap-3 items-center">
        {" "}
        <div className="flex flex-row items-center justify-between mt-4 w-full">
          <span>Products</span>
          <span>&#8358;{totalPrice}.00</span>
        </div>
        <div className="flex flex-row items-center justify-between w-full">
          <span>Services</span>
          <span>&#8358;{services}.00</span>
        </div>
        <div
          className={`flex flex-row items-center justify-between  font-[800] mt-5 max-sm:text-[20px] text-[27px] w-full`}
        >
          <span>Total</span>
          <span>&#8358;{totalPrice + services}.00</span>
        </div>
      </div>

      <div
        className={`flex sticky justify-center cool-button bg-[#32CD32] mx-auto w-full text-poster shadow-lg rounded-[20px] font-bold text-[20px] items-center py-2`}
        onClick={() => handleOrder(cartdata, setcartdata, session)}
      >
        Confirm Order
      </div>
    </div>
  );
}

async function handleOrder(cartdata, setcartdata, session) {
  const user_id=session.user?.id
  for (const cartdataobject of cartdata) {
    const {
      price: totalprice,
      kitchen_id,
      id: meal_id,
      qty: quantity,
    } = cartdataobject;

    console.log(cartdataobject, "This is the current cartdataobject");
    console.log(totalprice, kitchen_id, meal_id, quantity);

    const newOrder = { totalprice, kitchen_id, meal_id, quantity , user_id};
    console.log(newOrder, "This is the newOrder");

    try {
      const order = await placeOrder(newOrder);
      console.log(order, "Placed order");
      setcartdata([]);
    } catch (error) {
      console.error("Error placing order:", error);
    }
  }
}

export function LargeSummary({ session }) {
  const { cartdata, setcartdata, checkOutKitchenId } = useApp();
  const checkoutCart = cartdata.filter(
    ({ kitchen_id }) => kitchen_id === Number(checkOutKitchenId)
  );
  const cartlength = checkoutCart.length;
  const totalPrice = checkoutCart.reduce(totalSum, 0);
  const services = 100;

  function totalSum(total, item) {
    const { price, qty } = item;
    return total + Number(price) * qty;
  }
  return (
    <>
      <div className="flex min-800:hidden bg-poster p-3 shadow-lg flex-col max-sm:gap-[6px] mt-5 rounded-lg font-bold w-full ">
        <span className={` font-[800]  max-sm:text-[22px] text-[30px]`}>
          Summary
        </span>
        <div className="flex flex-row items-center justify-between mt-4 w-full">
          <span>Products</span>
          <span>&#8358;5000.00</span>
        </div>
        <div className="flex flex-row items-center justify-between w-full">
          <span>Services</span>
          <span>&#8358;1009.00</span>
        </div>
        <div
          className={`flex flex-row items-center justify-between  font-[800] mt-5 max-sm:text-[20px] text-[27px] w-full`}
        >
          <span>Total</span>
          <span>&#8358;{totalPrice}.00</span>
        </div>
      </div>{" "}
      <div
        className={`fixed min-800:hidden flex bottom-5 z-20 justify-center bg-[#32CD32]  centerX text-poster shadow-xl rounded-[20px] font-bold text-[20px] items-center w-[80vw] py-[1vh]`}
        onClick={() => handleOrder(cartdata, setcartdata, session)}
      >
        Confirm Order
      </div>
    </>
  );
}
