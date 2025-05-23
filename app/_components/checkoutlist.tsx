"use client";
import Image from "next/image";
import Products from "../../public/products.svg";
import Remove from "../../public/remove.png";
import Add from "../../public/add.png";
import { useApp } from "./appcontext.tsx";
import { updatecart } from "./cartsection";
import { getSingleRestaurant } from "@/_lib/data-service";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Checkoutpic from "../../public/checkout.svg";
import CartWoman from "../../public/cartwoman.png";

export default function CheckoutList() {
  const { cartdata, setcartdata, checkOutKitchenId } = useApp();
  const checkoutCart = cartdata.filter(
    ({ kitchen_id }) => kitchen_id === Number(checkOutKitchenId)
  );
  const cartlength = checkoutCart.length;

  return (
    <>
      <div className="flex mt-10 max-sm:mt-3 flex-col bg-poster px-3 rounded-lg gap-2 py-3 items-start">
        <Image
          src={Products}
          alt="products"
          className="w-10 h-10 max-sm:w-7 max-sm:h-7"
        />{" "}
        {checkoutCart.map((value, index) => (
          <CheckoutItem
            key={index}
            index={index}
            setcartdata={setcartdata}
            itemData={value}
            cartlength={cartlength}
          />
        ))}
      </div>
      <div className="bg-[#ffea74] w-full flex flex-col mt-3 px-3 rounded-lg border  border-[#FF4D00] items-start py-2 ">
        <span className="font-bold text-[14px]">55-65 mins</span>
        <span className="text-[12px]">As soon as possible</span>
      </div>
    </>
  );
}

function CheckoutItem({ setcartdata, itemData, index, cartlength }) {
  const { id, name, price, qty } = itemData;
  return (
    <div
      className={`flex flex-row w-full ${
        index + 1 !== cartlength && "bottomborder"
      }  py-3  justify-between`}
    >
      <div className="flex flex-col">
        <span className="max-sm:text-[15px] trans-range:text-[16px] text-[18px] font-bold">
          {name}
        </span>
        <span className="max-sm:text-[13px] trans-range:text-[14px] text-[16px]">{`${
          Number(price) * qty
        }.00 NGN`}</span>
      </div>
      <div className="flex flex-row items-center gap-1">
        <span className="flex justify-center rounded-full bg-[#32CD32] items-center w-[21px] h-[21px]">
          <Image
            src={Add}
            className="w-3 h-3"
            alt="add"
            onClick={() => updatecart(id, 1, setcartdata)}
          />
        </span>
        <span className="max-sm:text-[15px] text-[18px] trans-range:text-[16px] font-bold">
          {qty}X
        </span>
        <span className="flex justify-center w-4 h-4 rounded-full py-0 bg-poster border-[2px] border-red items-center">
          <Image
            src={Remove}
            className="w-3 h-3"
            alt="add"
            onClick={() => updatecart(id, -1, setcartdata)}
          />
        </span>
      </div>
    </div>
  );
}
