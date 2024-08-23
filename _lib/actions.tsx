"use server";
import { revalidatePath } from "next/cache";
import { supabase } from "./supabase";
import { v4 as uuidv4 } from "uuid";

export async function updateMeals(updateData) {
  const userId = 1;
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
