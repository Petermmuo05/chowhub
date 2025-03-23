"use server";
import { revalidatePath } from "next/cache";
import { supabase } from "./supabase";
import { v4 as uuidv4 } from "uuid";
import { auth, signIn, signOut } from "./auth.ts";
import toast from "react-hot-toast";

export async function updateMeals(updateData) {
  const session = await auth();
  const userId = session.user.admin_id;
  console.log(updateData);
  console.log("updatedata", updateData.get("file_data"));
  const file = updateData.get("file_data");
  let isUrl = true;
  if (file && file.size > 0) {
    console.log("a file was selected");
    isUrl = false;
  }
  console.log(isUrl, "isUrl");
  let formdata: any = {};
  updateData.forEach((value, key) => (formdata[key] = value));
  console.log(formdata, "formdata");
  const { name, description, price, meal_image, category_id } = formdata;

  // const image =
  //   typeof updateData.meal_image === "string"
  //     ? updateData.meal_image
  //     : updateData.meal_image[0];
  // const formdata = { ...updateData, meal_image: image };

  const { id } = formdata;

  const supabaseUrl = "https://ijlsuhslxonjiszlebem.supabase.co";
  console.log(formdata.meal_image);

  const imageName = `${uuidv4()}-${file?.name}`.replaceAll("/", "");
  console.log(imageName, "imageName");
  const imagePath = isUrl
    ? formdata.meal_image
    : `${supabaseUrl}/storage/v1/object/public/Food_images/${imageName}`;
  console.log(imagePath, "imagePath");
  //1. Create/edit
  let query;
  //a create
  console.log(id && "This already exists");
  if (!id) {
    console.log("inserting data");
    query = supabase.from("Meals").insert([
      {
        name,
        description,
        price,
        meal_image: imagePath,
        allow_order: false,
        category_id,
        kitchen_id: userId,
      },
    ]);
    
  }
  //add more properties cuz it doesn't work yet

  if (id) {
    console.log("updating data");

    query = supabase
      .from("Meals")
      .update({ name, description, price, meal_image: imagePath, category_id })
      .eq("id", id);
  }
  const { data, error } = await query.select().single();
  console.log(data, "data");

  if (error) {
    console.error(error);
    throw new Error("Meal could not be created");
  }

  if (!isUrl) {
    console.log("uploading file");
    const { error: storageError } = await supabase.storage
      .from("Food_images")
      .upload(imageName, file, {
        cacheControl: "3600",
        upsert: false,
      });
    if (storageError) {
      console.log("There was a storage error");
      console.error(storageError);
      await supabase.from("Food_images").delete().eq("id", data.id);
    }
  }
  console.log("Update Meal successful:", data);
  toast.success("")
  revalidatePath("/admin/menu"); //revalidate the router cache
  return data;
}

export async function updateSubMeals(updateData) {
  const session = await auth();
  const userId = session.user.admin_id;
  console.log(updateData, "for submeal");
  console.log("updatedata for submeal", updateData.get("file_data"));
  const file = updateData.get("file_data");
  let isUrl = true;
  if (file && file.size > 0) {
    console.log("a file was selected");
    isUrl = false;
  }
  console.log(isUrl, "isUrl");
  let formdata: any = {};
  updateData.forEach((value, key) => (formdata[key] = value));
  console.log(formdata, "formdata");
  const { name, price, meal_image, minQty, meal_id } = formdata;

  const { id } = formdata;

  const supabaseUrl = "https://ijlsuhslxonjiszlebem.supabase.co";
  console.log(formdata.meal_image);

  const imageName = `${uuidv4()}-${file?.name}`.replaceAll("/", "");
  console.log(imageName, "imageName");
  const imagePath = isUrl
    ? formdata.meal_image
    : `${supabaseUrl}/storage/v1/object/public/Food_images/${imageName}`;
  console.log(imagePath, "imagePath");
  //1. Create/edit
  let query;
  //a create
  console.log(id && "This already exists");
  if (!id) {
    console.log("inserting data");
    query = supabase.from("SubMeal").insert([
      {
        name,
        price,
        minQty,
        meal_id,
        meal_image: imagePath,
        kitchen_id: userId,
      },
    ]);
  }
  //add more properties cuz it doesn't work yet

  if (id) {
    console.log("updating data");

    query = supabase
      .from("SubMeal")
      .update({ name, price, minQty, meal_id, meal_image: imagePath })
      .eq("id", id);
  }
  const { data, error } = await query.select().single();
  console.log(data, "data");

  if (error) {
    console.error(error);
    throw new Error("SubMeal could not be created");
  }

  if (!isUrl) {
    console.log("uploading file");
    const { error: storageError } = await supabase.storage
      .from("Food_images")
      .upload(imageName, file, {
        cacheControl: "3600",
        upsert: false,
      });
    if (storageError) {
      console.log("There was a storage error");
      console.error(storageError);
      await supabase.from("Food_images").delete().eq("id", data.id);
    }
  }
  console.log("Update SubMeal successful:", data);
  revalidatePath("/admin/menu"); //revalidate the router cache
  return data;
}

export async function updateSingleMeal(val, id: number) {
  const { data, error } = await supabase
    .from("Meals")
    .update({ ...val })
    .eq("id", id)
    .select();

  if (error) {
    throw error;
  }
  console.log("Update Meal successful:", data);
  revalidatePath("/admin/menu"); //revalidate the router cache
  return data;
}
export async function deleteSingleMeal(id) {
  //work on this delete function to only allow users to delete meals they have created ie with their user id
  const { data, error } = await supabase.from("Meals").delete().eq("id", id);
  if (error) {
    throw error;
  }
  console.log("Delete Meal Successful", data);
  revalidatePath("/admin/menu"); //revalidate the router cache
  return data;
}
export async function deleteSingleSubMeal(id) {
  //work on this delete function to only allow users to delete meals they have created ie with their user id
  const { data, error } = await supabase.from("SubMeal").delete().eq("id", id);
  if (error) {
    throw error;
  }
  toast("Delete SubMeal Successful");
  console.log("Delete SubMeal Successful");
  revalidatePath("/admin/menu"); //revalidate the router cache
  return data;
}

export async function signInAction() {
  //get the provider dynamically

  await signIn("google", { redirectTo: "/" });
}
export async function signOutAction() {
  await signOut({ redirectTo: "/login" });
}

export async function createAppUser(newUser) {
  const { data, error } = await supabase.from("App_Users").insert([newUser]);
  if (error) {
    console.error(error);
    throw new Error("User Could not be created");
  }
  return data;
}
export async function getAppUsers() {
  let { data: App_Users, error } = await supabase.from("App_Users").select("*");
  if (error) {
    console.error(error);
    throw new Error("Could not retrieve Users");
  }
  return App_Users;
}

// export async function updateAppUsers() {
//   const { data, error } = await supabase
//     .from("App_Users")
//     .update({ other_column: "otherValue" })
//     .eq("some_column", "someValue")
//     .select();
//   if (error) {
//     console.error(error);
//     throw new Error("Failed to update users");
//   }
//   return data;
// }

export async function placeOrder(newOrder) {
  console.log(newOrder, "This is the newOrder");
  const { data, error } = await supabase.from("Orders").insert([newOrder]);
  if (error) {
    console.error(error);
    throw new Error("Order Could not be placed");
  }
  return data;
}
export async function updateOrderStatus(newStatus, id) {
  const { data, error } = await supabase
    .from("Orders")
    .update({ status: newStatus })
    .eq("id", id)
    .select();

  if (error) {
    throw error;
  }
  console.log("Update Order successful:", data);
  revalidatePath("/admin/"); //revalidate the router cache
  return data;
}
