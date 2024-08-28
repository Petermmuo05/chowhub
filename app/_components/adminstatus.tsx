import { capitalizeFirstLetter } from "@/_lib/data-service";

export default function AdminStatus({ status }: { status: string }) {
  return (
    <div className="flex flex-row text-[14px] max-sm:text-[11px] trans-range:text-[14px] py-1 items-center px-2 gap-1 bg-orange-500  rounded-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="25px"
        viewBox="0 -960 960 960"
        width="25px"
        className={`${
          status !== "placed" && "hidden"
        } max-sm:h-[20px] max-sm:w-[20px]`}
        fill={"#5f6368"}
      >
        <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93ZM320-320v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T663-540L443-320H320Zm300-263-37-37 37 37ZM380-380h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="25px"
        viewBox="0 -960 960 960"
        width="25px"
        className={`${
          status !== "cooking" && "hidden"
        } max-sm:h-[20px] max-sm:w-[20px]`}
        fill={"#5f6368"}
      >
        <path d="M177-560q14-36 4.5-64T149-680q-33-40-43.5-75.5T102-840h78q-8 38-2.5 62t28.5 52q38 46 48.5 81.5t.5 84.5h-78Zm160 0q14-36 5-64t-32-56q-33-40-44-75.5t-4-84.5h78q-8 38-2.5 62t28.5 52q38 46 48.5 81.5t.5 84.5h-78Zm160 0q14-36 5-64t-32-56q-33-40-44-75.5t-4-84.5h78q-8 38-2.5 62t28.5 52q38 46 48.5 81.5t.5 84.5h-78ZM200-160q-50 0-85-35t-35-85v-200h561q5-34 27-59.5t54-36.5l185-62 25 76-185 62q-12 4-19.5 14.5T720-462v182q0 50-35 85t-85 35H200Zm0-80h400q17 0 28.5-11.5T640-280v-120H160v120q0 17 11.5 28.5T200-240Zm200-80Z" />
      </svg>{" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="25px"
        viewBox="0 -960 960 960"
        width="25px"
        fill={"#5f6368"}
        className={`${
          status !== "ready" && "hidden"
        } max-sm:h-[20px] max-sm:w-[20px]`}
      >
        <path d="m424-318 282-282-56-56-226 226-114-114-56 56 170 170ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm280-590q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790ZM200-200v-560 560Z" />
      </svg>
      <span className="text-[#5f6368]">{capitalizeFirstLetter(status)}</span>
    </div>
  );
}
