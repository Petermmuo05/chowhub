import {
  Inter,
  Irish_Grover,
  Kaisei_Tokumin,
  Lexend_Deca,
} from "next/font/google";
import MainImage from "../public/homepageimage.png";

import { getRestaurants } from "@/_lib/data-service.tsx";
import Restaurantsection from "./_components/restaurantsectiont";
import Poster from "./_components/poster.tsx";
import Categories from "./_components/categories";
import UserLayout from "./UserLayout.tsx";

export const revalidate = 600;

export const Irish = Irish_Grover({
  subsets: ["latin"],
  weight: "400",
});

export const Lexend_font = Lexend_Deca({
  subsets: ["latin"],
  weight: ["500", "800"],
});

export const Inter_font = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "900", "800"],
});
export const Kaisei = Kaisei_Tokumin({
  subsets: ["latin"],
  weight: ["500", "800"],
  display: "swap",
});

export default async function Home() {
  const Restaurant_data = await getRestaurants();

  return (
    <UserLayout>
      {" "}
      <div className={` w-full flex ${Lexend_font.className}  flex-col `}>
        <Poster img={MainImage} Inter_font={Inter_font}>
          {" "}
          <p className={` text-[#333333] text-xxlarge `}>
            it’s not just Food, It’s an Experience.
          </p>
          <p className={` text-[#333333] text-medium min-sm:hidden `}>
            Let us take the stress of &apos;order&apos; away, so you can focus
            on enjoying your meal.
          </p>
          <p className={` text-[#333333] text-medium max-sm:hidden `}>
            Savor the convenience of having your favorite dishes delivered
            quickly and safely, so you can focus on enjoying your meal without
            the stress.
          </p>
        </Poster>
        <div className="w-full mt-rowgap">
          <Restaurantsection data={Restaurant_data} />
        </div>
        <Categories />
      </div>
    </UserLayout>
  );
}
