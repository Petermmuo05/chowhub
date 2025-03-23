import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import "./_styles/globals.css";
import { Inter_font, Irish } from "./page";

import { AppProvider } from "./_components/appcontext.tsx";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "ChowHub",
  description: "Food Ordering Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="unselectable">
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <AppProvider>
              {children}

            </AppProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
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
