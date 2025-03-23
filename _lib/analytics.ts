// "use client";
import { Order } from "./data-service";

export function getNumberofCustomers(orderData: Order) {
  const userData = orderData.map(({ App_Users }) => {
    return App_Users.id;
  });
  const userset = new Set(userData);
  const length = userset.size;
  return length;
}

export function getTotalForStatus(orderData, statusType: string) {
  const statusArr = orderData.filter(({ status }) => status === statusType);
  return statusArr.length;
}

export type Meal = {
  id: number;
  name: string;
  price: string;
  count: number;
  meal_image: string;
};

export function getMostOrderedMeal(orderData: Order) {
  const mealData = orderData.map(({ Meals }) => {
    return Meals;
  });
  // const mealIds=mealData.map(({id})=>id)

  const frequencyMap = mealData.reduce((acc, obj) => {
    const key = JSON.stringify(obj); // Convert object to string to use as a key
    if (acc[key]) {
      acc[key].count += 1;
    } else {
      acc[key] = { ...obj, count: 1 };
    }
    return acc;
  }, {});

  // Step 2: Convert the frequencyMap to an array and sort by the count
  const sortedArray = Object.values(frequencyMap).sort(
    (a: Meal, b: Meal) => b.count - a.count
  );
  // Step 3: Return the sorted array without the count property
  return sortedArray;
}
