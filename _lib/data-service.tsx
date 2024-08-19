import { supabase } from "./supabase";

export type Restaurant = {
  id: number;
  created_at: any;
  name: string;
  restaurant_image: string;
  Meals: {
    id: number;
    name: string;
    price: string;
    meal_image: string;
    category_id: number;
    description: string;
    allow_order: boolean;
  }[];
};

export async function getRestaurants() {
  let { data, error } = await supabase
    .from("KitchenData")
    .select(
      "id, created_at, name, restaurant_image, Meals(id, name, price, meal_image, allow_order, category_id, description)"
    )
    .order("id", { ascending: false });
  //   console.log(Restaurant);
  if (error) {
    console.error(error);
    throw new Error("Restaurants could not be loaded");
  }
  return (data as unknown as Restaurant[]) || [];
}

export async function getCategories() {
  let { data, error } = await supabase
    .from("Categories")
    .select("*")
    .order("id", { ascending: true });
  // console.log("categories", data);
  if (error) {
    console.error(error);
    throw new Error("Categories could not be loaded");
  }
  return data;
}

export async function getRestaurantMeals(restaurant_id: number) {
  let { data, error } = await supabase
    .from("Meals")
    .select("*")
    .eq("kitchen_id", restaurant_id);
  // console.log("categories", data);
  if (error) {
    console.error(error);
    throw new Error("Meals could not be loaded");
  }
  return data;
}
export async function getSingleRestaurant(restaurant_id: number) {
  let { data, error } = await supabase
    .from("KitchenData")
    .select(
      "id, created_at, name, restaurant_image, Meals(id, name, price, allow_order, meal_image, category_id, description)"
    )
    .eq("id", restaurant_id);
  // console.log("categories", data);
  if (error) {
    console.error(error);
    throw new Error("Restaurant could not be loaded");
  }
  return data as unknown as Restaurant[];
}

export type Order = {
  id: number;
  created_at: any;
  totalprice: number;
  status: any;
  KitchenData: {
    id: number;
    name: string;
    location: string;
  };
  Meals: {
    id: number;
    name: string;
    price: string;
  };
  quantity: number;
}[];

export async function getAllOrders(): Promise<Order> {
  let { data, error } = await supabase
    .from("Orders")
    .select(
      "id, created_at, totalprice, status, KitchenData(id, name, location),Meals(id, name, price), quantity "
    )
    .order("id", { ascending: false });
  // console.log("orders", data);
  if (error) {
    console.error(error);
    throw new Error("orders could not be loaded");
  }
  return (data as unknown as Order) || [];
}

// export function handleNotFound() {
//   const error = new Error('Not Found');
//   error.statusCode = 404;
//   throw error;
// }
// console.log("stfu",supabase.from("Restaurant").select("*"))
// export const fetchData = async () => {
//   const response = await fetch(
//     "https://ijlsuhslxonjiszlebem.supabase.co/rest/v1/Restaurant",
//     {
//       headers: {
//         Authorization:
//           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqbHN1aHNseG9uamlzemxlYmVtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxOTMwNTI4MiwiZXhwIjoyMDM0ODgxMjgyfQ.ZGtqNvaPS9nd2Hmhx53jkj37kfs8wEvfu-veiasdz40",
//         apikey:
//           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqbHN1aHNseG9uamlzemxlYmVtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxOTMwNTI4MiwiZXhwIjoyMDM0ODgxMjgyfQ.ZGtqNvaPS9nd2Hmhx53jkj37kfs8wEvfu-veiasdz40",
//       },
//     }
//   );
//   const data = await response.json();
//  return (data);
// };
