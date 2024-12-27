import Image from "next/image";
import { useState } from "react";
const About = () => {
  const [contactsDropdown, setcontactsDropdown] = useState(false);
  const [socialDropdown, setsocialDropdown] = useState(false);

  const toggleContactsMenu = () => {
    setcontactsDropdown(!contactsDropdown);
  };
  const toggleSocialMenu = () => {
    setsocialDropdown(!socialDropdown);
  };

  return (
    <div className="flex max-h-[calc(100svh-148px)] grow overflow-scroll border-t-0 border-[#1E2D3D] md:border-t-0 [&>*]:border-[#1E2D3D]">
      <div className="w-full pl-0 md:flex md:flex-1 md:grow md:border-b-0">
        {/* basic info  */}
        <section className="flex flex-col border-r-2 border-[#1E2D3D] md:min-w-[30%]">
          <button
            onClick={toggleContactsMenu}
            className="mt-2 flex gap-3 border-b-2 border-[#1E2D3D] p-2"
          >
            <Image
              width={10}
              height={10}
              className={`ml-3 pt-1 ${contactsDropdown ? "" : "rotate-90"} `}
              src="/icons/arrow.svg"
              alt=""
            />
            <h3 className={`${!contactsDropdown ? "text-slate-100" : ""}`}>
              contact details
            </h3>
          </button>
          <div className="flex grow flex-col">
            {!contactsDropdown && (
              <div className="border-b-2 border-[#1E2D3D]">
                <div className="flex gap-3 p-2">
                  <Image width={20} height={20} src="/icons/pin.svg" alt="" />
                  <a href="">
                    <p>New York, NY</p>
                  </a>
                </div>
                <div className="flex gap-3 p-2">
                  <Image width={17} height={17} src="/icons/Email.svg" alt="" />
                  <a href="">
                    <p>wilson.diaz@gmail.com</p>
                  </a>
                </div>
                <div className="flex gap-3 p-2">
                  <Image width={17} height={17} src="/icons/Phone.svg" alt="" />
                  <a href="">3473303954</a>
                </div>
              </div>
            )}

            <div>
              <button
                onClick={toggleSocialMenu}
                className="flex w-full gap-3 p-2"
              >
                <Image
                  width={10}
                  height={10}
                  className={`ml-3 pt-1 ${socialDropdown ? "rotate-90 transform" : ""}`}
                  src="/icons/arrow.svg"
                  alt=""
                />
                <h3 className={`${socialDropdown ? "text-slate-100" : ""}`}>
                  find me also in
                </h3>
              </button>
              {socialDropdown && (
                <div>
                  <div className="flex gap-3 border-t-2 border-[#1E2D3D] p-2">
                    <Image
                      width={17}
                      height={17}
                      src="/icons/Link.svg"
                      alt=""
                    />
                    <a href="https://github.com/wilson-diaz-antigua">
                      Github profile
                    </a>
                  </div>
                  <div className="flex gap-3 p-2">
                    <Image
                      width={17}
                      height={17}
                      src="/icons/Link.svg"
                      alt=""
                    />
                    <a href="https://www.linkedin.com/in/wilson-da/">
                      LinkedIn profile
                    </a>
                  </div>
                  <div className="flex gap-3 p-2">
                    <Image
                      width={17}
                      height={17}
                      src="/icons/Link.svg"
                      alt=""
                    />
                    <a href="https://wildiant.itch.io/">itch.io link</a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        {/* about */}
        <section className="flex flex-col border-r-2 border-[#1E2D3D] md:min-w-[36%]">
          <div className="my-2 flex gap-3 border-y-2 border-[#1E2D3D] p-2 md:border-t-0">
            <h3 className="ml-5">about me</h3>
          </div>
          <p className="px-5 pb-10 pt-5">
            As a Parsons School of Design alum, my journey in game and
            interactive media design has equipped me with a multifaceted skill
            set, especially in computer graphics and software development. At
            Voyce, my role as a Field Technician allowed me to apply these
            competencies, contributing to projects that demanded both technical
            prowess and creative problem-solving.
          </p>
          <p className="px-5 pb-10 pt-5">
            {" "}
            Driven by a passion for ar`t and programming, I aim to continuously
            develop tools that empower us in our crafts. Through collaboration
            and a dedication to my craft, my goal is to continually evolve as a
            software developer, delivering innovative solutions to complex
            challenges
          </p>
        </section>
        {/* message me */}
        {/* <div className="flex grow flex-col border-b-2 border-r-2 border-[#1E2D3D] md:min-w-[33.33%]">
          <button className="mt-2 flex gap-3 border-y-2 border-[#1E2D3D] p-2 md:border-t-0">
            <Image
              width={10}
              height={10}
              className="pt-1"
              src="/icons/arrow.svg"
              alt=""
            />
            <h3>message me</h3>
          </button>
          <div className="mt-10 px-10">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded bg-[#1E2D3D] p-2"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded bg-[#1E2D3D] p-2"
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full rounded bg-[#1E2D3D] p-2"
              ></textarea>
              <button type="submit" className="rounded bg-[#1E2D3D] px-4 py-2">
                {" "}
                SEND
              </button>
            </form>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
