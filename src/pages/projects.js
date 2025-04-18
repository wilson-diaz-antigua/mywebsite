import Image from "next/image";

const Projects = () => {
  return (
    <div className="z-50 max-h-[calc(100svh-148px)] overflow-scroll">
      <div className="flex flex-col border-t-2 border-[#1E2D3D] md:justify-evenly md:border-t-0 [&>*]:border-[#1E2D3D]">
        <button className="mt-2 flex gap-3 border-b-2 border-[#1E2D3D] p-2">
          {/* <Image
            width={10}
            height={10}
            className="pt-1"
            src="/icons/arrow.svg"
            alt=""
          /> */}
          <h3 className="ml-3">all projects</h3>
        </button>
        <div className="flex flex-col items-center gap-6 md:flex-row md:flex-wrap md:justify-evenly [&>*]:px-3 [&>*]:py-10">
          <div className="max-w-[450px]">
            <h1 className="pb-3">
              <b className="text-[#5565e8]">MTA Station Alert Tracker</b> {"//"}
              project 1
            </h1>

            <div className="overflow-hidden rounded-xl border-2 border-[#1E2D3D] bg-[#011221]">
              <Image
                src="/projects/mtaAlerts.png"
                alt="MTA Alerts Project"
                width={700}
                height={500}
                className="aspect-video min-h-[300px] object-cover"
              />
              <div className="min-h-[100px] px-3 py-5">
                <p className="pb-3">
                  Subway station alerts tracker. It allows users to conveniently
                  check all train alerts for a specific route.
                </p>
                <button className="w-fit rounded-lg bg-[#1c2b3a] px-4 py-2 text-xs text-white">
                  <a href="https://willdiaz.me/project/mtaTracker">
                    View-Website
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="max-w-[450px]">
            <h1 className="pb-3">
              <b className="text-[#5565e8]">Device Inventory Application</b>{" "}
              {"//"}project 2
            </h1>
            <div className="overflow-hidden rounded-xl border-2 border-[#1E2D3D] bg-[#011221]">
              <Image
                src="/projects/deviceInventory.png"
                alt="Device Inventory Project"
                width={700}
                height={500}
                className="aspect-video min-h-[300px] object-cover"
              />
              <div className="min-h-[100px] px-3 py-5">
                <p className="pb-3">
                  Ipad device inventory app that allows users to create, read,
                  update, and delete device details of connected devices.
                </p>
                <button className="w-fit rounded-lg bg-[#1c2b3a] px-4 py-2 text-xs text-white">
                  <a href="https://github.com/wilson-diaz-antigua/Device_Inventory_App">
                    View-Repo
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="max-w-[450px]">
            <h1 className="pb-3">
              <b className="text-[#5565e8]">Endless Runner Game</b> {"//"}
              project 3
            </h1>
            <div className="overflow-hidden rounded-xl border-2 border-[#1E2D3D] bg-[#011221]">
              <Image
                src="/projects/scroller.png"
                alt="Endless Runner Game"
                width={700}
                height={400}
                className="aspect-video min-h-[300px] object-cover"
              />
              <div className="min-h-[100px] px-3 py-5">
                <p className="pb-3">
                  Endless runner game built with Unity. Collect stars while
                  jumping on top of asteroid obstacles to use as platforms.
                </p>
                <button className="w-fit rounded-lg bg-[#1c2b3a] px-4 py-2 text-xs text-white">
                  <a href="https://wildiant.itch.io/nyan-dog">
                    View in Itch.io
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
