import Image from "next/image";

const Projects = () => {
  return (
    <div className="max-h-[calc(100vh-148px)] overflow-scroll">
      <div className="flex flex-col border-t-2 border-[#1E2D3D] md:justify-evenly [&>*]:border-[#1E2D3D] [&>*]:px-3 [&>*]:py-3">
        <button className="flex w-full items-center bg-[#1E2D3D] text-slate-100">
          <img className="pr-2" src="/arrow.svg" alt="" />
          <p>projects</p>
        </button>
        <h2 className="mb-10 border-b-2">// projects / all</h2>

        <div className="flex flex-col gap-6 md:flex-row md:flex-wrap md:justify-evenly">
          <div className="max-w-[400px]">
            <h1 className="pb-3">
              <b className="text-[#5565e8]">MTA Station Alert Tracker</b> //
              project 1
            </h1>

            <div className="overflow-hidden rounded-xl border-2 border-[#1E2D3D] bg-[#011221]">
              <Image
                src="/projects/mtaalerts.png"
                alt="MTA Alerts Project"
                width={700} // Adjust based on your needs
                height={500} // Adjust based on your needs
                className="aspect-video min-h-[300px] object-cover" // Optional - for maintaining aspect ratio
              />
              <div className="min-h-[100px] px-3 py-5">
                <p className="pb-3">
                  lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis quasi
                </p>
                <button className="w-fit rounded-lg bg-[#1c2b3a] px-4 py-2 text-xs text-white">
                  <a href="">View Repo</a>
                </button>
              </div>
            </div>
          </div>

          <div className="max-w-[400px]">
            <h1 className="pb-3">
              <b className="text-[#5565e8]">Device Inventory Application</b> //
              project 2
            </h1>
            <div className="overflow-hidden rounded-xl border-2 border-[#1E2D3D] bg-[#011221]">
              <Image
                src="/projects/deviceInventory.png"
                alt="MTA Alerts Project"
                width={700} // Adjust based on your needs
                height={500} // Adjust based on your needs
                className="aspect-video min-h-[300px] object-cover" // Optional - for maintaining aspect ratio
              />
              <div className="min-h-[100px] px-3 py-5">
                <p className="pb-3">
                  lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis quasi
                </p>
                <button className="w-fit rounded-lg bg-[#1c2b3a] px-4 py-2 text-xs text-white">
                  <a href="">View Repo</a>
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
