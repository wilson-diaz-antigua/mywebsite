import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const Header = (props) => {
  const pathname = usePathname();
  const [isReverse, setIsReverse] = useState(false);

  const handleNavToggle = (e) => {
    if (window.innerWidth < 768) {
      setIsReverse(props.nav);
      props.setnav(!props.nav);
    }
  };
  return (
    <>
      {console.log(props.nav)}

      <div
        className={
          "z-100 border-b-2 border-[#1E2D3D] md:flex md:justify-between"
        }
      >
        {/* hamburger icon mobile */}
        <section className="flex items-center justify-between border-r-2 border-[#1E2D3D] py-[10px] pl-5 pr-10">
          <h2>Wilson-Diaz</h2>

          <div
            className="md:hidden"
            onClick={() => {
              handleNavToggle();
            }}
          >
            <svg fill="" viewBox="0 0 100 100" width="35">
              <rect
                fill="#607B96"
                className={
                  props.nav
                    ? "animate-top"
                    : isReverse
                      ? "animate-top-reverse"
                      : ""
                }
                width="80"
                height="10"
                x="10"
                y="25"
                rx="5"
              ></rect>
              <rect
                fill="#607B96"
                className={
                  props.nav
                    ? "animate-mid"
                    : isReverse
                      ? "animate-midReverse"
                      : ""
                }
                width="80"
                height="10"
                x="10"
                y="45"
                rx="5"
              ></rect>
              <rect
                fill="#607B96"
                className={
                  props.nav
                    ? "animate-btm"
                    : isReverse
                      ? "animate-btmReverse"
                      : " "
                }
                width="80"
                height="10"
                x="10"
                y="65"
                rx="5"
              ></rect>
            </svg>
          </div>
        </section>

        {/* Nav Links */}
        <section
          onClick={(e) => {
            props.onMenuClick();
            handleNavToggle();
          }}
          className={`${
            props.nav ? "animate-drop" : "hidden md:flex"
          } flex flex-col border-t-2 border-[#1E2D3D] md:flex-grow md:flex-row md:border-t-0 [&>*]:border-r-2 [&>*]:border-x-[#1E2D3D] [&>*]:px-8 [&>*]:py-3 [&>*]:md:pt-5`}
        >
          <Link
            className={` ${
              pathname === "/landing"
                ? "bg-[#1e2d3d] text-slate-100 md:border-b-4 md:border-orange-400 md:bg-inherit"
                : "border-b-[1px] border-[#1E2D3D]"
            } hover:bg-[#1e2d3d]`}
            href="/landing"
          >
            _home
          </Link>
          <Link
            className={` ${
              pathname === "/about"
                ? "bg-[#1e2d3d] text-slate-100 md:border-b-4 md:border-orange-400 md:bg-inherit"
                : "border-b-[1px] border-[#1E2D3D]"
            } hover:bg-[#1e2d3d]`}
            href="/about"
          >
            _about
          </Link>
          <Link
            className={` ${
              pathname === "/projects"
                ? "bg-[#1e2d3d] text-slate-100 md:border-b-4 md:border-orange-400 md:bg-inherit"
                : "border-b-[1px] border-[#1E2D3D]"
            } hover:bg-[#1e2d3d]`}
            href="/projects"
          >
            _projects
          </Link>
        </section>
      </div>
    </>
  );
};

export default Header;
