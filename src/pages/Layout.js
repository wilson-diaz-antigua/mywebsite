import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  const [nav, setNav] = useState(false);
  return (
    <div className="box-border bg-[#010C15] p-5 text-[#607B96]">
      <div className="flex min-h-[calc(100vh-40px)] flex-col justify-between rounded-lg border-2 border-[#1E2D3D] bg-[#011627] font-code">
        <div className="">
          <Header setnav={setNav} nav={nav} />
          <main
            className={`flex flex-1 flex-col items-stretch ${nav ? "hidden" : " "} `}
          >
            {children}
          </main>
        </div>

        <Footer />
      </div>
    </div>
  );
}
