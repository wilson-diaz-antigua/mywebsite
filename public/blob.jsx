import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

export default function Blob() {
  return (
    <div className="absolute left-0 top-0 -z-10 h-[100dvh] w-full">
      <Spline scene="scene-clean.splinecode" />
    </div>
  );
}
