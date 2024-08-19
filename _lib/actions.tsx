"use server";
import { revalidatePath } from "next/cache";
import { supabase } from "./supabase";

export async function updateMeals(updateData) {
  console.log(updateData);
  console.log("updatedata", updateData.get("file_data"));
  const file = updateData.get("file_data");
  let isUrl = true;
  if (file && file.size > 0) {
    console.log("a file was selected");
    isUrl = false;
  }
  let formdata: any = {};
  updateData.forEach((value, key) => (formdata[key] = value));
  console.log(formdata, "formdata");
  const { name, description, price, meal_image } = formdata;

  // const image =
  //   typeof updateData.meal_image === "string"
  //     ? updateData.meal_image
  //     : updateData.meal_image[0];
  // const formdata = { ...updateData, meal_image: image };

  const { id } = formdata;

  const supabaseUrl = "https://ijlsuhslxonjiszlebem.supabase.co";
  console.log(formdata.meal_image);
  // const hasImagePath = formdata.meal_image?.startsWith?.(supabaseUrl);
  // console.log(hasImagePath, "hasImagePath");
  const imageName = `${Math.random()}-${file?.name}`.replaceAll("/", "");
  console.log(imageName, "imageName");
  const imagePath = isUrl
    ? formdata.meal_image
    : `${supabaseUrl}/storage/v1/object/public/Food_images/${imageName}`;
  console.log(imagePath, "imagePath");
  //1. Create/edit
  // let query = supabase.from("Meals");
  let query;
  //a create
  if (!id)
    query = supabase
      .from("Meals")
      .insert([{ name, description, price, meal_image: imagePath , allow_order:false}]);//add more properties cuz it doesn't work yet

  if (id)
    query = supabase
      .from("Meals")
      .update({ name, description, price, meal_image: imagePath })
      .eq("id", id);

  const { data, error } = await query.select().single();
  console.log(data, "data");

  if (error) {
    console.error(error);
    throw new Error("Meal could not be created");
  }

  if (!isUrl) {
    const { error: storageError } = await supabase.storage
      .from("Food_images")
      .upload(imageName, file);
    if (storageError) {
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
