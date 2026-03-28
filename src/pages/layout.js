import { useState } from "react";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  const [nav, setNav] = useState(false);
  const [pageKey, setPageKey] = useState(0);

  const handleMenuClick = () => {
    setPageKey((prev) => prev + 1);
  };
  return (
    <div className="box-border bg-[#010C15] p-5 text-[#607B96]">
      <div className="min-h-100dvh flex flex-col justify-between rounded-lg border-2 border-[#1E2D3D] bg-[#011627] font-code">
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
    </div>
  );
}
