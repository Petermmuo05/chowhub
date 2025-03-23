/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  compilerOptions: {
    types: ["node", "next", "next/types/global"],
  },
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        poster: "#F5F5DC",
        button: "#FF8C00",
        vibrantred: "#FF4500",
        lime: "#32CD32",
      },
      screens: {
        "max-lg": { max: "1000px" },
        "trans-meal": { min: "700px", max: "1300px" },
        "trans-range": { min: "600px", max: "1024px" },
        "max-sm": { max: "600px" },
        "min-sm": { min: "600px" },
        "max-800": { max: "800px" },
        "min-800": { min: "800px" },

        // You can also add other custom breakpoints here
      },
      fontSize: {
        tiny: "var(--font-size-tiny)",
        mini: "var(--font-size-mini)",
        small: "var(--font-size-small)",
        medium: "var(--font-size-medium)",
        largemedium: "var(--font-size-largemedium)",
        large: "var(--font-size-large)",
        xlarge: "var(--font-size-xlarge)",
        xxlarge: "var(--font-size-xxlarge)",
        logotext: "var(--font-size-logotext)",
        mainbutton: "var(--font-size-mainbutton)",
        primaryheader: "var(--font-size-primaryheader)",
        secondaryheader: "var(--font-size-secondaryheader)",
        footertext: "var(--font-size-footertext)",
        restaurantext: "var(--font-size-restaurantext)",
      },
      margin: {
        rowgap: "var(--rowgap)",
      },
    },
  },
  plugins: [],
};
