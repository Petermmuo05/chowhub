"use client";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function Cooldata({ className: class_name }) {
  const [displayText, setdisplayText] = useState(
    "Savor the convenience of having your favorite dishes delivered quickly and safely, so you can focus on enjoying your meal without the stress"
  );
  const isMobile = useMediaQuery({ query: "(max-width:600px)" });

  useEffect(
    function () {
      setdisplayText(
        isMobile
          ? "Let us take the stress of 'order' away, so you can focus on enjoying your meal."
          : "Savor the convenience of having your favorite dishes delivered quickly and safely, so you can focus on enjoying your meal without the stress"
      );
    },
    [isMobile, setdisplayText]
  );
  return (
    <p className={`${class_name} text-[#333333] text-medium `}>{displayText}</p>
  );
}
//
