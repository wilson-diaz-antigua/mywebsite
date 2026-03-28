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
    <div className="relative box-border min-h-[calc(100lvh)] bg-[#010C15] p-5 text-[#607B96]">
      <div className="flex min-h-[calc(100dvh-40px)] flex-col justify-between rounded-lg border-2 border-[#1E2D3D] bg-[#011627] font-code">
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
      <div className="-z-5 pointer-events-none absolute -bottom-0 -right-0 h-[calc(100lvh)] h-[calc(100vh)] w-[200dvw] opacity-60 md:w-[100dvw]">
        <Blob />
      </div>
    </div>
  );
}
