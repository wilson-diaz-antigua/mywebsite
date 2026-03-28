import { useEffect, useState } from "react";
import Blob from "../../public/blob";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  const [nav, setNav] = useState(false);
  const [pageKey, setPageKey] = useState(0);
  const [isMobileSafari, setIsMobileSafari] = useState(false);

  useEffect(() => {
    if (typeof navigator === "undefined") return;

    const ua = navigator.userAgent;
    const isSafari =
      /Safari/i.test(ua) &&
      !/CriOS|FxiOS|EdgiOS|OPiOS|Chrome|Android/i.test(ua);
    const isMobile =
      /iPhone|iPad|iPod/i.test(ua) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

    setIsMobileSafari(isSafari && isMobile);
  }, []);

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
      <div
        className={`-z-5 pointer-events-none absolute -right-0 h-[calc(100svh)] w-[200svw] opacity-60 md:w-[100dvw] ${isMobileSafari ? "-bottom-5" : "-bottom-0"}`}
      >
        <Blob />
      </div>
    </div>
  );
}
