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
  SubMeal: {
    id: number;
    name: string;
    price: string;
    meal_image: string;
    minQty: number;
    kitchen_id: number;
    meal_id: number;
  }[];
};

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
  App_Users: {
    full_name: string;
    id: number;
  };
  quantity: number;
}[];

export function capitalizeFirstLetter(str) {
  if (str.length === 0) return str; // Check if the string is empty
  return str.charAt(0).toUpperCase() + str.slice(1);
}
export function slicestring(str, len) {
  return `${str.slice(0, len)}${str.length >= len ? "..." : ""}`;
}

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
      "id, created_at, name, restaurant_image, Meals(id, name, price, allow_order, meal_image, category_id, description,SubMeal(id, name,price,minQty,kitchen_id,meal_id, meal_image))"
    )
    .eq("id", restaurant_id);
  // console.log("categories", data);
  if (error) {
    console.error(error);
    throw new Error("Restaurant could not be loaded");
  }
  return data as unknown as Restaurant[];
}

export async function getAllOrders(Userid: string): Promise<Order> {
  let { data, error } = await supabase
    .from("Orders")
    .select(
      "id, created_at, totalprice, status, KitchenData(id, name, location),Meals(id, name, price), quantity "
    )
    .order("id", { ascending: false })
    .eq("user_id", Userid);
  // console.log("orders", data);
  if (error) {
    console.error(error);
    throw new Error("orders could not be loaded");
  }
  return (data as unknown as Order) || [];
}
export async function getOrders(kitchen_id: number): Promise<Order> {
  if (!kitchen_id || typeof kitchen_id !== "number") {
    console.log(kitchen_id)
    throw new Error("Invalid kitchen_id provided");
  }

  let { data, error } = await supabase
    .from("Orders")
    .select(
      "id, created_at, totalprice, status, KitchenData(id, name, location),Meals(id, name, price, meal_image), quantity,App_Users(id,full_name) "
    )
    .eq("kitchen_id", kitchen_id)
    .order("id", { ascending: false });
  // console.log("orders", data);
  if (error) {
    console.error(error);
    throw new Error("orders could not be loaded");
  }
  return (data as unknown as Order) || [];
}

export async function getSingleAppUser(email) {
  let { data: App_Users, error } = await supabase
    .from("App_Users")
    .select("*")
    .eq("email", email)
    .single();
  //no error handling here. We handle the possibility of no guest in the sign in callback
  return App_Users;
}
