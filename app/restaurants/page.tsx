import { getCategories, getRestaurants } from "@/_lib/data-service.tsx";
import Restaurantsection from "../_components/restaurantsectiont.tsx";
import Poster from "../_components/poster.tsx";
import MainImage from "../../public/homepageimage.png";
import Cooldata from "../_components/cooldata.js";
import { Inter_font, Kaisei } from "../page.js";
import RestaurantPoster from "../_components/restaurant_poster.tsx";
import UserLayout from "../_components/UserLayout.tsx";

async function AllRestaurants() {
  const Restaurant_data = await getRestaurants();

  // TODO make the poster for categories and restaurants smaller and more relevant
  return (
    <UserLayout>
      <div className="w-full ">
        <RestaurantPoster>
          {" "}
          <p className={`${Kaisei.className} text-[#333333] text-xxlarge `}>
            {/* it’s not just Food, It’s an Experience. */}
            You&apos;ve Come to the Right Place...
          </p>
          {/* <Cooldata className={Kaisei.className} /> */}
          <div
            className={`${Inter_font.className}  text-[#333333] cool-button font-semibold w-fit  text-medium px-12 py-3 max-sm:w-full max-sm:text-center max-sm:text-[10px] max-sm:px-[3vw] max-sm:py-2 bg-[#FF8C00] rounded-[25px] shadowbutton`}
          >
            Experience Delivery
          </div>
        </RestaurantPoster>{" "}
        <div className="w-full mt-rowgap">
          <Restaurantsection data={Restaurant_data} />
        </div>
      </div>
    </UserLayout>
  );
}

export default AllRestaurants;
