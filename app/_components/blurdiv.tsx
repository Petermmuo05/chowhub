"use client";
// import { Inter_font } from "../page";

export default function Blurdiv({ setter, value, children }) {
  return (
    <div
      className="fixed left-0 top-0 w-[100vw] m-0 p-0 h-[100vh] bg-[#0000007e] z-30 "
      onClick={() => setter(value)}
    >
      {children}
    </div>
  );
}
