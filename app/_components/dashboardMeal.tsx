import Image from "next/image";
import MainImage from "../../public/testmealimage.jpg";

export default function DashboardMeal() {
  return (
    <div className="flex flex-col px-0 gap-2 ">
      <span className="font-bold"> Most Ordered Meals</span>
      <div className="w-full grid grid-cols-3 max-sm:grid-cols-2 gap-3 ">
        <div className="relative w-full h-[200px] max-sm:h-[150px] items-center rounded-lg overflow-hidden bg-poster flex flex-col">
          <div className="basis-3/4 w-full relative">
            <Image src={MainImage} fill alt="name" className="object-cover" />
          </div>
          <div className="basis-1/4 w-full px-3 flex justify-center flex-col">
            <span className="font-bold text-[13px]">Chicken Fried Rice</span>
            <span className="text-[11px]  ">#13000</span>
          </div>
          <div className="flex item-center justify-center px-2 py-1 rounded-md bg-poster font-extrabold absolute right-3 top-3">
            1000
          </div>
        </div>
        {/* <div className="w-full h-[200px] items-center rounded-lg overflow-hidden bg-poster flex flex-col">
          <div className="basis-3/4 w-full relative">
            <Image src={MainImage} fill alt="name" className="object-cover" />
          </div>
          <div className="basis-1/4 w-full px-3 flex justify-center flex-col">
            <span className="font-bold text-[13px]">Chicken Fried Rice</span>
            <span className="text-[11px]  ">#13000</span>
          </div>
        </div> */}
        <div className="relative w-full h-[200px] max-sm:h-[150px] items-center rounded-lg overflow-hidden bg-poster flex flex-col">
          <div className="basis-3/4 w-full relative">
            <Image src={MainImage} fill alt="name" className="object-cover" />
          </div>
          <div className="basis-1/4 w-full px-3 flex justify-center flex-col">
            <span className="font-bold text-[13px]">Chicken Fried Rice</span>
            <span className="text-[11px]  ">#13000</span>
          </div>
          <div className="flex item-center justify-center px-2 py-1 rounded-md bg-poster font-extrabold absolute right-3 top-3">
            1000
          </div>
        </div>
      </div>
    </div>
  );
}
