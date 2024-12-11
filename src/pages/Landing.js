const Landing = () => {
  return (
    <div className="class flex h-full flex-col">
      <div className="flex min-h-[calc(100vh-13rem)] flex-col justify-around pl-10 pt-16 align-middle [&>*]:py-1">
        <div className="flex flex-col text-slate-100">
          <p className="pb-2">Hello all. i am</p>
          <h1 className="text-4xl">Wilson</h1>
          <h1 className="text-4xl">Diaz-Antigua</h1>
          <p className="py-5 text-xl text-[#43D9AD]">
            {">"} Full-Stack Developer
          </p>
        </div>
        <div className="">
          <p className="py-2">// find my github profile</p>
          <p>
            <span className="text-[#5565e8]">const</span>
            <span className="text-[#43D9AD]"> githubLink</span> ={" "}
            <span className="text-[#e99287]">
              “https://github.com/example/url”
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
