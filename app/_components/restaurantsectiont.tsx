import Image from "next/image";
import { Inter_font } from "../page";
import Likes from "../../public/likes.png";
import Link from "next/link";

function Restaurantsection({ data: Restaurant_data }) {
  return (
    <div className="flex flex-col  w-full gap-5">
      <p
        className={`${Inter_font.className} text-[#333333] text-primaryheader font-[800] `}
      >
        Popular Restaurants
      </p>
      <div className="grid gap-5 max-sm:gap-6 grid-cols-3 trans-range:grid-cols-2 max-sm:grid-cols-1 w-full">
        {Restaurant_data.map(({ name, restaurant_image, id }) => (
          <Link
            href={`/restaurants/${id}`}
            className="flex flex-col w-full large-button"
            key={id}
          >
            {" "}
            <div className="relative aspect-video overflow-hidden bg-poster w-full rounded-lg">
              <Image
                src={restaurant_image}
                fill
                alt="name"
                className="object-cover"
              />
            </div>
            <span
              className={`font-bold ${Inter_font.className}  mt-3 max-sm:font-[800] text-[16px] `}
            >
              {name}
            </span>{" "}
            <div className="flex flex-row items-center gap-1 justify-start ">
              <div className="relative w-7  h-7">
                <Image
                  src={Likes}
                  className="object-cover"
                  fill
                  alt="MainImage"
                />
              </div>
              <span className="text-7 font-medium">90%</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Restaurantsection;
