import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

export default function Blob() {
  return <Spline scene="scene-clean.splinecode" />;
}
