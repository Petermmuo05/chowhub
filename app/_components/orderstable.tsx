"use client";
// import { capitalizeFirstLetter, Order, slicestring } from "@/_lib/data-service";
import AdminStatus from "./adminstatus";
import { Menu, MenuItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import StatusDropdown from "./statusDropdown";
import { Order } from "@/_lib/data-service";
import { useApp } from "./appcontext";
export default function OrdersTable({ RawOrderData }: { RawOrderData: Order }) {
  const {
    statusFilter,
    dateFilter,
    mealFilter,
    searchFilter,
    orderSearchInput,
  } = useApp();
  const [OrderData, setOrderData] = useState(RawOrderData);
  console.log(dateFilter);
  useEffect(
    function () {
      console.log(searchFilter, "searchFilter");
      console.log(orderSearchInput, "orderSearchInput");

      let filterByStatusData = statusFilter
        ? RawOrderData.filter(({ status }) => status === statusFilter)
        : RawOrderData;
      let filterByDateData = dateFilter
        ? dateFilterFunction(filterByStatusData, dateFilter)
        : filterByStatusData;
      let filterByIdData =
        searchFilter === "id"
          ? idFilterFunction(filterByDateData, orderSearchInput)
          : filterByDateData;
      let filterByUserData =
        searchFilter === "user"
          ? userFilterFunction(filterByIdData, orderSearchInput)
          : filterByIdData;
      let filterByMealData =
        searchFilter === "meal"
          ? mealFilterFunction(filterByUserData, mealFilter)
          : filterByUserData;
      setOrderData(filterByMealData);
    },
    [
      statusFilter,
      RawOrderData,
      dateFilter,
      dateFilterFunction,
      searchFilter,
      orderSearchInput,
      mealFilter,
    ]
  );

  return (
    <div className="flex flex-col gap-1 w-full overflow-auto ">
      <div className="flex flex-row items-center min-h-10 max-sm:min-h-9 bg-poster w-full max-sm:text-[13px] max-sm:h-7 max-sm:rounded-md font-semibold ">
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
    App_Users: { id: user_id, full_name },
  } = orderdata;

  return (
    <div className="flex flex-row items-center max-800:text-[12px] min-h-10  border border-poster rounded-lg w-full">
      <div className="basis-[8%] flex-1  h-full text-center flex justify-center items-center">
        CH-{id}
      </div>
      <div className="basis-[20%] flex-1 h-full text-center flex justify-center items-center">
        {full_name}
      </div>
      <div className="basis-[17%] h-full max-sm:hidden text-center flex flex-1 justify-center items-center">
        {slicestring(meal_name, 23)}
      </div>
      <div className="basis-[17%] h-full min-sm:hidden text-center flex flex-1 justify-center items-center">
        {slicestring(meal_name, 15)}
      </div>
      <div className="basis-[20%] h-full flex-1 text-center max-800:hidden flex justify-center items-center">
        +2348888888888
      </div>
      <div className="basis-[15%] h-full text-center max-800:hidden flex justify-center items-center">
        {meal_price}
      </div>
      <div className="basis-[10%] h-full text-center flex justify-center flex-1 items-center">
        <StatusDropdown status={status} orderId={id} />
      </div>
      <div className="basis-[10%] max-lg:hidden h-full text-center flex justify-center items-center">
        Action
      </div>
    </div>
  );
}

export function slicestring(str, len) {
  return `${str.slice(0, len)}${str.length >= len ? "..." : ""}`;
}

// Function to get today's orders

function dateFilterFunction(orderData, filter) {
  if (filter === "today") {
    return getTodaysOrders(orderData);
  } else if (filter === "this week") {
    return getWeeksOrders(orderData);
  }
}

function idFilterFunction(orderData, selectedId) {
  return orderData.filter(
    ({ id }) =>
      String(id).toLowerCase().startsWith(selectedId.trim().toLowerCase()) //check if the input starts with the id
  );
}
function userFilterFunction(orderData, selectedName: string) {
  return orderData.filter(
    ({ App_Users: { id, full_name } }) =>
      full_name.toLowerCase().includes(selectedName.trim().toLowerCase()) //check if inputted string is included in the order user name
  );
}
function mealFilterFunction(orderData, selectedMealId: number) {
  return orderData.filter(({ Meals: { id, name } }) => id === selectedMealId); //check if order is for the selected meal
}

function getTodaysOrders(orderData) {
  const today = new Date();
  return orderData.filter((order) => {
    const orderDate = new Date(order.created_at);
    return (
      orderDate.getFullYear() === today.getFullYear() &&
      orderDate.getMonth() === today.getMonth() &&
      orderDate.getDate() === today.getDate()
    );
  });
}

function getWeeksOrders(orderData) {
  const today = new Date();
  const startOfWeek = new Date();
  startOfWeek.setDate(today.getDate() - today.getDay()); // Set to the start of the week (Sunday)

  return orderData.filter((order) => {
    const orderDate = new Date(order.created_at);
    return orderDate >= startOfWeek && orderDate <= today;
  });
}
