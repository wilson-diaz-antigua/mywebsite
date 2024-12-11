import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = (props) => {
  const pathname = usePathname();

  const handleNavToggle = (e) => {
    // Only toggle nav if screen width is below 768px
    if (window.innerWidth < 768) {
      props.setnav(!props.nav);
    }
  };
  return (
    <>
      {console.log(props.nav)}
      <div className="border-b-2 border-[#1E2D3D] md:flex md:justify-between">
        <div className="flex justify-between border-r-2 border-[#1E2D3D] py-5 pl-5 pr-10">
          <h2>Wilson-Diaz</h2>
          <div
            className="md:hidden"
            onClick={() => {
              handleNavToggle();
            }}
          >
            <img src={props.nav ? "close.svg" : "menu.svg"} alt="" />
          </div>
        </div>

        <div
          onClick={(e) => {
            handleNavToggle();
            console.log(e);
          }}
          className={`${
            props.nav ? "" : "hidden md:flex"
          } flex flex-col border-t-2 border-[#1E2D3D] md:flex-grow md:flex-row md:border-t-0 [&>*]:border-r-2 [&>*]:border-x-[#1E2D3D] [&>*]:px-8 [&>*]:py-3 [&>*]:md:pt-5`}
        >
          <Link
            className={` ${
              pathname === "/Landing"
                ? "bg-[#1e2d3d] text-slate-100 md:border-b-4 md:border-orange-400 md:bg-inherit"
                : "border-b-[1px] border-[#1E2D3D]"
            } hover:bg-[#1e2d3d]`}
            href="/Landing"
          >
            _home
          </Link>
          <Link
            className={` ${
              pathname === "/About"
                ? "bg-[#1e2d3d] text-slate-100 md:border-b-4 md:border-orange-400 md:bg-inherit"
                : "border-b-[1px] border-[#1E2D3D]"
            } hover:bg-[#1e2d3d]`}
            href="/About"
          >
            _about
          </Link>
          <Link
            className={` ${
              pathname === "/Projects"
                ? "bg-[#1e2d3d] text-slate-100 md:border-b-4 md:border-orange-400 md:bg-inherit"
                : "border-b-[1px] border-[#1E2D3D]"
            } hover:bg-[#1e2d3d]`}
            href="/Projects"
          >
            _projects
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
