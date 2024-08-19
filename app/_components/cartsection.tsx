"use client";
import React from "react";

import Image from "next/image";
const Dropup = require("../../public/dropup.png");
const Cart = require("../../public/cart.png");
const Remove = require("../../public/remove.png");
const Add = require("../../public/add.png");
const Close = require("../../public/close.png");

// import DropUp from "../../public/dropup.png";
// import Cart from "../../public/cart.png";

import { useState } from "react";
import { useApp } from "./appcontext.tsx";
import Link from "next/link";
export function updatecart(id: number, value: number, setcartdata) {
  //once less than zero try to remove the item from cart

  function newCart(cartdata) {
    let cartclone = [...cartdata];
    cartclone = cartclone.map((cartItem) => {
      const { id: currId, qty } = cartItem;
      const newqty = currId === id ? qty + value : qty;
      return newqty === 0 ? null : { ...cartItem, qty: newqty };
    });
    return cartclone.filter((cartItem) => cartItem !== null);
  }

  setcartdata((cartdata) => newCart(cartdata));
}
export function countqty(cartdata) {
  let totalqty = 0;
  console.log(typeof cartdata);
  console.log(cartdata);
  cartdata.map(({ qty }) => (totalqty += qty));
  return totalqty;
}

function Cartsection({ id: restaurantId }) {
  const [isexpanded, setexpanded] = useState<boolean>(false);
  const { cartdata, setcartdata } = useApp();
  const restaurantCart = cartdata.filter(
    ({ kitchen_id }) => kitchen_id === Number(restaurantId)
  );
  console.log("restaurantCart", restaurantCart);
  // if (cartdata.length > 0) {
  //   if (cartdata[0].kitchen_id !== Number(RestaurantId)) {
  //     console.log("clearing cart");
  //     setcartdata([]);
  //   }
  // }

  return isexpanded ? (
    //only show when cart is not empty
    <Expandedbox
      setexpanded={setexpanded}
      cart={restaurantCart}
      kitchen_id={restaurantId}
    />
  ) : (
    <NotExpanded setexpanded={setexpanded} cartdata={restaurantCart} />
  );
}

function NotExpanded({ setexpanded, cartdata }) {
  console.log(cartdata);
  return (
    //Change the structure
    <div
      className={`flex flex-row items-center restaurant-shadow fixed bottom-4 z-10 right-[8.5%] rounded-lg bg-poster ${
        countqty(cartdata) > 0 ? "shake" : ""
      }  py-1 px-2`}
      onClick={() => setexpanded(true)}
    >
      <Image src={Cart} className="w-10 h-10" alt={"cart"} />

      <div className="flex justify-center items-center text-[10px] self-start ml-[-10px] bg-vibrantred text-white border border-white rounded-full p-1 px-2">
        {countqty(cartdata)}
      </div>
      {/* <Image src={DropUp} className="w-10 h-10 " alt={"dropup"} /> */}
    </div>
  );
}

//Make the expanded and notexpanded section one
function Expandedbox({ setexpanded, cart, kitchen_id }) {
  const { setcartdata, setCheckOutKitchenId } = useApp();

  return (
    <div className="flex flex-col w-[350px] z-10 h-[65vh] restaurant-shadow fixed bottom-4 items-center cartbox right-[8.5%] rounded-lg bg-poster  py-2 px-2">
      <div className="flex flex-row justify-between w-full px-3 py-2 gap-2 items-center text-primaryheader">
        <Image src={Cart} className="w-10 h-10" alt={"cart"} />
        <Image
          src={Close}
          className="w-7 h-7"
          alt={"close"}
          onClick={() => setexpanded(false)}
        />
      </div>
      <div className="w-full flex flex-col mt-2 hide-scrollbar-scroll overflow-y-auto h-full">
        {cart.map(({ id, name, price, qty }) => (
          <CartItem
            key={id}
            itemdata={{ id, name, price, qty }}
            setcartdata={setcartdata}
          />
        ))}

        {/* <CartItem
          itemdata={{ id: 1, name: "Shrimps Jollof Rice", price: "1500" }}
        />
        <CartItem
          itemdata={{ id: 1, name: "Shrimps Jollof Rice", price: "1500" }}
        />
        <CartItem
          itemdata={{ id: 1, name: "Shrimps Jollof Rice", price: "1500" }}
        /> */}
      </div>
      <Link
        href="/checkout"
        onClick={() => setCheckOutKitchenId(kitchen_id)}
        className="flex justify-center bg-[#32CD32] text-white rounded-[20px] font-bold text-[20px] items-center w-full py-3"
      >
        <span>Checkout</span>
      </Link>
    </div>
  );
}
function CartItem({ itemdata, setcartdata }) {
  // }: {
  //   itemdata: { id: number; name: string; price: string; qty: number };
  // }) {
  const { id, name, price, qty } = itemdata;
  return (
    <div className="flex flex-row p-3 justify-between">
      <div className="flex flex-col">
        <span className="text-[15px] font-bold">{name}</span>
        <span className="text-[13px]">{`${Number(price) * qty}.00 NGN`}</span>
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
        <span>{qty}</span>
        <span className="flex justify-center w-4 h-4 rounded-full py-0 bg-[#FF4D00] items-center">
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

export default Cartsection;
