"use client";
import Image from "next/image";
import { useApp } from "../_components/appcontext";
import CheckoutList from "../_components/checkoutlist";
import { LargeSummary, SmallSummary } from "../_components/summary";
import Payments from "./payment";
import Checkoutpic from "../../public/checkout.svg";
import CartWoman from "../../public/cartwoman.png";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function MainCheckout({ Restaurant_data, session }) {
  const { cartdata, checkOutKitchenId } = useApp();

  const checkoutCart = cartdata.filter(
    ({ kitchen_id }) => kitchen_id === Number(checkOutKitchenId)
  );
  const cartlength = checkoutCart.length;
  const router = useRouter();

  useEffect(
    function () {
      if (!cartlength || cartlength === 0) {
        router.push("/");
      }
    },
    [cartlength, router]
  );
  return cartlength > 0 ? (
    <div className={`w-full flex flex-col text-[#333333]`}>
      <RestaurantName data={Restaurant_data} />

      <div className="w-full flex flex-row gap-10 ">
        <div className="flex flex-col w-full item-center">
          <CheckoutList />
          <Payments />
          <LargeSummary session={session} />
        </div>
        <SmallSummary session={session} />
      </div>
    </div>
  ) : (
    <NoCart />
  );
}
function RestaurantName({ data }) {
  const { checkOutKitchenId } = useApp();
  console.log("checkOutKitchenId", checkOutKitchenId);
  const Restaurant_data = data.filter(
    ({ id }) => id === Number(checkOutKitchenId)
  );
  if (Restaurant_data.length !== 1) {
    return;
  }
  const restaurantName = Restaurant_data[0].name;
  return (
    <div className="flex flex-row gap-2 mt-5 items-center">
      <Image
        src={Checkoutpic}
        alt="checkoutpic"
        className="w-10 h-10 max-sm:w-7 max-sm:h-7"
      />
      <span className={`font-[600] max-sm:text-[25px] text-[35px]`}>
        {restaurantName}
      </span>
    </div>
  );
}
function NoCart() {
  return (
    <div className="flex flex-col min-h-[70vh] items-center mt-5 justify-center gap-10">
      <Image src={CartWoman} alt="nocart" className="w-[360px] h-[340px] " />{" "}
      <div className="font-extrabold text-[19px] text-[#333333]">
        You have to add items to your cart 😉😚
      </div>
    </div>
  );
}
