import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  const [nav, setNav] = useState(false);
  const [pageKey, setPageKey] = useState(0); // Add state for animation key

  // Add handler for menu clicks
  const handleMenuClick = () => {
    setPageKey((prev) => prev + 1); // Increment key to force animation replay
  };
  return (
    <div className="box-border bg-[#010C15] p-5 text-[#607B96]">
      <div className="flex min-h-[calc(100vh-40px)] flex-col justify-between rounded-lg border-2 border-[#1E2D3D] bg-[#011627] font-code">
        <Header
          className="z-20"
          setnav={setNav}
          nav={nav}
          onMenuClick={handleMenuClick}
        />
        <main
          key={pageKey}
          className={`animate-appear flex grow flex-col ${nav ? "hidden" : " "} `}
        >
          {children}
        </main>

        <Footer />
      </div>
    </div>
  );
}
