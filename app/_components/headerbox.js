"use client";
import { useEffect, useState } from "react";

function Headerdiv({ children }) {
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`flex flex-row w-full px-[7%] max-sm:px-[7px] z-10 top-0 left-1/2 transform -translate-x-1/2 transition-shadow ${
        shadow ? "shadow-md" : ""
      } mb-[20px] py-3 items-center bg-[#FFFDD0] shadowbox fixed justify-between `}
    >
      {children}
    </div>
  );
}
export default Headerdiv;
