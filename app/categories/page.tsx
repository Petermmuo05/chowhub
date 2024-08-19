import Image from "next/image";
import { Inter_font, Kaisei } from "../page.js";
import Categories from "../_components/categories.js";
import Poster from "../_components/poster.tsx";
import MainImage from "../../public/homepageimage.png";
import Cooldata from "../_components/cooldata.js";
import UserLayout from "../_components/UserLayout.tsx";

function AllCategories() {
  return (
    <UserLayout>
      <div className="w-full ">
        
        <Poster img={MainImage} Inter_font={Inter_font}>
          {" "}
          <p className={`${Kaisei.className} text-[#333333] text-xxlarge `}>
            it’s not just Food, It’s an Experience.
          </p>
          <Cooldata className={Kaisei.className} />
          <div
            className={`${Inter_font.className}  text-[#333333] font-semibold w-fit  text-medium px-12 py-3 max-sm:w-full max-sm:text-center max-sm:text-[10px] max-sm:px-[3vw] max-sm:py-2 bg-[#FF8C00] rounded-[25px] shadowbutton`}
          >
            Experience Delivery
          </div>
        </Poster>{" "}
        <div className="w-full mt-rowgap">
          <Categories />
        </div>
      </div>
    </UserLayout>
  );
}
export default AllCategories;
