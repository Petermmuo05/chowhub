export default function FilterBar() {
  return (
    <div className="flex flex-col gap-[6px] w-full">
      <div className="flex flex-row items-center gap-5 font-semibold text-[14px] ">
        <span>All Orders</span>
        <span>Placed</span>
        <span>Cooking</span>
        <span>Completed</span>
      </div>
      <div className="w-[320px] h-[2px] bg-poster"></div>
    </div>
  );
}
