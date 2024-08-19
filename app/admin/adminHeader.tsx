export default function AdminHeader({ children }) {
  return (
    <div
      className={`flex flex-row w-full px-[12px] max-sm:px-[7px]  top-0 left-1/2 transform -translate-x-1/2 bg-[#8B4513] transition-shadow mb-[20px] py-1 items-center shadowbox fixed z-[50] justify-between `}
    >
      {children}
    </div>
  );
}