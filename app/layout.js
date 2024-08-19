import Footer from "./_components/footerpart";
import Headerdiv from "./_components/headerbox";
import "./_styles/globals.css";
import { Inter_font, Irish } from "./page";
import Logo from "./icon.png";
import Rider from "../public/rider.png";
import Partners from "../public/partners.png";
import AdSection from "./_components/adsection";
import { AppProvider } from "./_components/appcontext.tsx";
import ProfileMenu from "./_components/profile";
import Blurdiv from "./_components/blurdiv";
import Link from "next/link";
import NextTopLoader from "nextjs-toploader";

export const metadata = {
  title: "ChowHub",
  description: "Food Ordering Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="unselectable">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}

{
  /* <div className="flex flex-col min-h-[100vh] w-full">
<NextTopLoader color="#FF8C00" height={3} showSpinner={false} />
<Headerdiv>
  <Link
    href="/"
    className={`${Irish.className} text-[#333333] text-[45px] max-sm:text-[30px]`}
  >
    ChowHub
  </Link>

  <ProfileMenu menu={<Blurdiv />} />
</Headerdiv>
<div className="mt-24 max-sm:mt-[70px] flex-1 w-[83%] max-lg:w-[90%] mx-auto">
  {children}
</div>
<AdSection Rider={Rider} Partners={Partners} />
<Footer className={Inter_font.className} img={Logo} />
</div> */
}
