import Footer from "./Footer";
import Header from "./Header";
import Landing from "./Landing";
export default function Home() {
  return (
    <div className="box-border bg-[#010C15] p-5 text-[#607B96]">
      <div className="flex min-h-[calc(100vh-40px)] flex-col justify-between rounded-lg border-2 border-[#1E2D3D] bg-[#011627] font-code">
        <Header setnav={setNav} nav={nav} />
        <main className={`flex grow flex-col ${nav ? "hidden" : " "} `}>
          <Landing></Landing>
        </main>

        <Footer />
      </div>
    </div>
  );
}
