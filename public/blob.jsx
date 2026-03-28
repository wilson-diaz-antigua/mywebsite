import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

export default function Blob() {
  return (
    <main className="absolute left-0 top-0 -z-10 h-[98svh] w-full">
      <Spline scene="https://prod.spline.design/T-bh0sxr0UEM4kmk/scene.splinecode" />
    </main>
  );
}
