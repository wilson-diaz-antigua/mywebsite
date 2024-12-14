import { useEffect } from "react";
const Landing = () => {
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
        {/* <div className="fixed bottom-[20%] right-[20%] size-72 blur-3xl"></div> */}
        <div className="z-40 flex min-h-[calc(100svh-13rem)] flex-col justify-around pl-5 pt-16 align-middle md:pl-52 [&>*]:py-1">
          <div className="flex flex-col text-slate-100">
            <p className="pb-2">Hello all. i am</p>
            <h1 className="text-4xl md:text-5xl">Wilson</h1>
            <h1 className="text-4xl md:text-5xl">Diaz-Antigua</h1>
            <p className="py-5 text-xl text-[#43D9AD]">
              {">"} Full-Stack Developer
            </p>
          </div>
          <div className="">
            <p className="py-2">{"//"} find my github profile</p>
            <p>
              <span className="text-[#5565e8]">const</span>
              <span className="text-[#43D9AD]"> githubLink</span> =
              <span> =</span>{" "}
              <span className="text-[#e99287]">
                <a href="https://github.com/wilson-diaz-antigua">
                  “github.com/wilson-diaz-antigua”
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
      <svg
        className="pointer-events-none fixed right-[2px] top-52 z-10 h-[100%] w-[100%] opacity-55 mix-blend-lighten blur-2xl md:blur-3xl"
        viewBox="0 0 440 440"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "#43D9AD", stopOpacity: 0.5 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#5565e8", stopOpacity: 0.5 }}
            />
          </linearGradient>
        </defs>
        <path
          className="animate-blob"
          d="M220,304.7628413036C238.8386158135346,305.435541876153,253.99189426160754,289.2693575008605,265.7820376977315,274.5609079025551C275.70467207893137,262.1822147620523,271.0503439957021,243.90480271916255,279.5308292763148,230.49689138536368C299.1963645006113,199.4050677580233,345.3064668181966,183.7481794385057,346.4781850783977,146.97778579837183C347.82800053551045,104.6184171809925,325.0732612566069,55.19091244095095,285.6094685182279,39.73946674375002C246.1126007442591,24.275071021199594,200.48406051517327,49.833665670643285,167.98565432705908,77.09175977588754C141.96634779618333,98.91549789604188,150.74741704985573,140.9183722205924,131.5667659812812,168.94304853398347C109.18507755495425,201.6447316652016,33.58331007122018,213.80335334404924,49.61389690965696,250.04366711260138C67.55583953362688,290.6049788638957,134.65351146227061,257.8249015784104,176.8816898278327,271.3864010542718C194.72484062055688,277.1166951254123,201.27122438878723,304.09406297075515,220,304.7628413036"
          fill="url(#gradient)"
        />
      </svg>
      <svg
        className="pointer-events-none fixed bottom-0 left-64 z-10 h-[80%] w-[80%] opacity-30 mix-blend-screen blur-xl md:blur-2xl"
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
          className="animate-blob2"
          d="M220,323.04029862512834C260.69775963244433,318.72582110176967,295.5649040769783,369.3496218594936,334.344522577358,356.2704955750362C377.57962318283575,341.6886775322742,423.1313987898299,300.9347208220884,420.6255758008567,255.37570203386238C418.059755288399,208.7258526834996,353.0184215520919,196.47263406217408,323.56081655309333,160.20913468557413C301.8993984969744,133.54305574938624,300.8824973276206,94.19965084134408,273.1862578774519,73.87195745641043C238.04438118200255,48.07952828126883,195.40255025069914,26.67478675421148,152.55638703803692,34.70019630056934C105.93755102253769,43.432255919114425,60.5483032708393,73.56808855505551,41.92576450116853,117.18879219901272C24.0835819145165,158.98162015871426,54.521760556247635,203.04435382596583,61.518132562108235,247.94462918236258C68.75116527471732,294.3637104127387,40.87180511634104,362.76492249985654,83.32608756989936,382.88162615247876C129.6666480847131,404.83981903897234,169.0060309191524,328.44630464150794,220,323.04029862512834"
          fill="url(#gradient2)"
        />
      </svg>
    </>
  );
};

export default Landing;
