import { useEffect } from "react";
const landing = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeout(function () {
        window.scrollTo(0, 1);
      }, 0);
    }
  }, []);
  return (
    <>
      <div className="class flex h-full flex-col">
        <div className="z-40 flex min-h-[calc(100svh-13rem)] flex-col justify-around pl-5 pt-16 align-middle md:pl-52 [&>*]:py-1">
          {/* header page */}
          <section className="flex flex-col text-slate-100">
            <p className="pb-2">Hello all. i am</p>
            <h1 className="text-4xl md:text-5xl">Wilson</h1>
            <h1 className="text-4xl md:text-5xl">Diaz-Antigua</h1>
            <p className="py-5 text-xl text-[#43D9AD]">
              {">"} Full-Stack Developer
            </p>
          </section>

          {/* github link */}
          <section className="">
            <p className="py-2">{"//"} find my github profile</p>
            <p>
              <span className="text-[#5565e8]">const</span>
              <span className="text-[#43D9AD]"> githubLink</span>
              <span> =</span>{" "}
              <span className="block text-[#e99287] md:inline">
                <a href="https://github.com/wilson-diaz-antigua">
                  “github.com/wilson-diaz-antigua”
                </a>
              </span>
            </p>
          </section>
        </div>
      </div>
      {/* BLOB SVG */}

      <svg
        className="pointer-events-none fixed inset-x-48 inset-y-20 z-10 h-[100%] w-[100%] -rotate-45 transform-gpu opacity-55 mix-blend-screen blur-xl md:inset-y-52 md:blur-2xl"
        viewBox="0 0 440 440"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#A7F0BA" stop-opacity="1" />
            <stop offset="100%" stop-color="#A7F0BA" stop-opacity="1" />
          </linearGradient>
        </defs>
        <path
          className="animate-blob"
          d="M220,353.9319167720775C250.1238778422295,346.0012846367567,239.73919827297146,290.54788212233996,267.7348046261698,276.8881249050206C315.7255073826696,253.472259569872,387.7199447293041,296.803458431142,421.6281675480888,255.55248600953504C452.41866210231274,218.09437891580995,430.819480051961,153.47386593070422,399.8501974220468,116.16344010457401C370.52055861771936,80.82838484375152,317.881027775744,82.6553380947902,272.4665982522466,75.84920602635523C237.46320647755408,70.60334673094198,204.62050943383304,76.20448570842353,169.64979822125085,81.6639575479027C122.583444545264,89.01174727168062,61.7366767137066,73.80399113746992,34.63356790976739,112.97864053398361C7.711735507840448,151.89127425015363,30.415280411845774,208.1107093836784,53.647860515319685,249.33237048972705C72.10203421302909,282.0756857294058,113.37695967801648,289.14191013969895,145.19529991962955,309.1487700637138C170.56261126576422,325.09932690914087,191.02207689693526,361.56085649157984,220,353.9319167720775"
          fill="url(#gradient)"
        />
      </svg>
      {/* BLOB SVG */}
      <svg
        className="pointer-events-none fixed bottom-[1/2] right-52 z-10 h-[80%] w-[80%] translate-x-52 rotate-45 scale-110 transform-gpu opacity-30 mix-blend-difference blur-lg md:left-[1/3] md:-translate-x-0 md:blur-xl"
        viewBox="0 0 440 440"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#8A3FFC" stop-opacity="1" />
            <stop offset="100%" stop-color="#F0B4F3" stop-opacity="1" />
          </linearGradient>
        </defs>
        <path
          className="origin-center animate-blob2"
          d="M220,323.04029862512834C260.69775963244433,318.72582110176967,295.5649040769783,369.3496218594936,334.344522577358,356.2704955750362C377.57962318283575,341.6886775322742,423.1313987898299,300.9347208220884,420.6255758008567,255.37570203386238C418.059755288399,208.7258526834996,353.0184215520919,196.47263406217408,323.56081655309333,160.20913468557413C301.8993984969744,133.54305574938624,300.8824973276206,94.19965084134408,273.1862578774519,73.87195745641043C238.04438118200255,48.07952828126883,195.40255025069914,26.67478675421148,152.55638703803692,34.70019630056934C105.93755102253769,43.432255919114425,60.5483032708393,73.56808855505551,41.92576450116853,117.18879219901272C24.0835819145165,158.98162015871426,54.521760556247635,203.04435382596583,61.518132562108235,247.94462918236258C68.75116527471732,294.3637104127387,40.87180511634104,362.76492249985654,83.32608756989936,382.88162615247876C129.6666480847131,404.83981903897234,169.0060309191524,328.44630464150794,220,323.04029862512834"
          fill="url(#gradient2)"
        />
      </svg>
    </>
  );
};

export default landing;
