import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-[#010C15]">
        <Main />
        <NextScript />
        <div className="-z-5 pointer-events-none absolute -bottom-0 -right-0 h-[100lvh] w-[200dvw] opacity-60 md:w-[100dvw]">
          <Blob />
        </div>
      </body>
    </Html>
  );
}
