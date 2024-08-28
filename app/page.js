import { Inter, Irish_Grover, Kaisei_Tokumin } from "next/font/google";
import MainImage from "../public/homepageimage.png";
import Shawarma from "../public/shawarma.png";
import Noodles from "../public/Noodles.png";
import Fastfood from "../public/Fastfood.png";
import Jollof from "../public/jollof.png";
import Bread from "../public/bread.png";

import Image from "next/image";
import { getRestaurants } from "@/_lib/data-service.tsx";
import Cooldata from "./_components/cooldata";
import Restaurantsection from "./_components/restaurantsectiont";
import Poster from "./_components/poster.tsx";
import Categories from "./_components/categories";
import UserLayout from "./UserLayout.tsx";

export const revalidate = 600;

export const Irish = Irish_Grover({
  subsets: ["latin"],
  weight: "400",
});
export const Inter_font = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "900", "800"],
});
export const Kaisei = Kaisei_Tokumin({
  subsets: ["latin"],
  weight: ["500", "800"],
});

export default async function Home() {
  const Restaurant_data = await getRestaurants();
  // const Restdata= await fetchData()
  // console.log("data",Restdata)
  // console.log("restaurant", Restaurant_data);
  return (
    <UserLayout>
      {" "}
      <div className={` w-full flex ${Inter_font.className}  flex-col `}>
        {/* <div className="flex bg-[#F5F5DC] px-8 py-4 max-sm:px-4 flex-row justify-center items-center w-full z-[-1]  gap-4">
          <div className="flex flex-col justify-center  gap-[1.6vw] flex-1 max-w-[600px] leading-[1.2]">
            <p className={`${Kaisei.className} text-[#333333] text-xxlarge `}>
              it’s not just Food, It’s an Experience.
            </p>
            <Cooldata className={Kaisei.className} />
            <div
              className={`${Inter_font.className}  text-[#333333] font-semibold w-fit  text-medium px-12 py-3 max-sm:w-full max-sm:text-center max-sm:text-[10px] max-sm:px-[3vw] max-sm:py-2 bg-[#FF8C00] rounded-[25px] shadowbutton`}
            >
              Experience Delivery
            </div>
          </div>
          <div className="relative aspect-square min-w-[100px] max-w-[500px] flex-1 ">
            {" "}
            <Image
              src={MainImage}
              className="object-cover"
              fill
              alt="MainImage"
            />
          </div>
        </div> */}
        <Poster img={MainImage} Inter_font={Inter_font}>
          {" "}
          <p className={`${Kaisei.className} text-[#333333] text-xxlarge `}>
            it’s not just Food, It’s an Experience.
          </p>
          <p
            className={`${Kaisei.className} text-[#333333] text-medium min-sm:hidden `}
          >
            Let us take the stress of &apos;order&apos; away, so you can focus
            on enjoying your meal.
          </p>
          <p
            className={`${Kaisei.className} text-[#333333] text-medium max-sm:hidden `}
          >
            Savor the convenience of having your favorite dishes delivered
            quickly and safely, so you can focus on enjoying your meal without
            the stress.
          </p>
        </Poster>
        {/* <div className="flex flex-col mt-rowgap w-full gap-5">
          <p
            className={`${Inter_font.className} text-[#333333] text-primaryheader font-[800] `}
          >
            Popular Restaurants
          </p>
          <div className="grid gap-4 grid-cols-3 max-sm:grid-cols-2 w-full">
            {Restaurant_data.map(({ name, restaurant_image, id }) => (
              <div className="flex flex-col w-full gap-3" key={id}>
                {" "}
                <div className="relative aspect-video overflow-hidden  bg-red-200 w-full rounded-lg">
                  <Image
                    src={restaurant_image}
                    fill
                    alt="name"
                    className="object-cover"
                  />
                </div>
                <span
                  className={`font-bold ${Inter_font.className} font-[600]  max-sm:font-[500] text-medium`}
                >
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div> */}
        <div className="w-full mt-rowgap">
          <Restaurantsection data={Restaurant_data} />
        </div>
        {/* <div className="mt-rowgap">
          <p
            className={`${Inter_font.className} text-[#333333] text-primaryheader font-[800] `}
          >
            Popular Categories
          </p>{" "}
          <div className="flex flex-row w-full gap-3 mt-4 scrollbar-hide overflow-x-scroll">
            <Category src={Noodles} description={"Noodles"} />
            <Category src={Bread} description={"Bread"} />
            <Category src={Fastfood} description={"Fast Food"} />
            <Category src={Jollof} description={"Local Food"} />
            <Category src={Shawarma} description={"Shawarma"} />
          </div>
        </div> */}
        <Categories />
      </div>
    </UserLayout>
  );
}

// function Category({ src, description }) {
//   return (
//     <div className="flex flex-shrink-0 flex-col w-[250px]  max-sm:w-[150px] max-sm:h-[150px] trans-range:h-[180px] trans-range:w-[180px]  relative h-[250px] rounded-lg overflow-hidden border bg-[#FF8C00]">
//       <div className="flex-1 basis-5/6  bg-[#F5F5DC] relative ">
//         {" "}
//         <Image src={src} className="object-cover" fill alt="MainImage" />
//       </div>
//       <span className="flex-1 basis-1/6 flex text-[#333333] font-bold justify-center items-center">
//         {description}
//       </span>
//     </div>
//   );
// }

// Ride for us. Pretty Please :)
//         </h1>
//         <p>
//           Enjoy flexibility, freedom and cool cash by providing quick and safe delivery at your own leisure through ChowHub.
