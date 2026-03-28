import { useState } from "react";
import Blob from "../../public/blob";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  const [nav, setNav] = useState(false);
  const [pageKey, setPageKey] = useState(0);

  const handleMenuClick = () => {
    setPageKey((prev) => prev + 1);
  };
  return (
    <div className="relative box-border bg-[#010C15] p-5 text-[#607B96]">
      <div className="flex min-h-[calc(100svh-20px)] flex-col justify-between rounded-lg border-2 border-[#1E2D3D] bg-[#011627] font-code">
        <Header
          className=""
          setnav={setNav}
          nav={nav}
          onMenuClick={handleMenuClick}
        />
        <main
          key={pageKey}
          className={`flex grow animate-appear flex-col ${nav ? "hidden" : " "} `}
        >
          {children}
        </main>

        <Footer className="z-10" />
      </div>
      <div className="-z-5 pointer-events-none absolute -bottom-20 -right-0 h-[100lvh] w-[200dvw] opacity-60 md:w-[100dvw]">
        <Blob />
      </div>
    </div>
  );
}
