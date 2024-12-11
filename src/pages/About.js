import Image from "next/image";

const About = () => {
  return (
    <div className="flex max-h-[calc(100vh-148px)] grow overflow-scroll border-t-0 border-[#1E2D3D] md:border-t-0 [&>*]:border-[#1E2D3D]">
      <div className="w-full pl-0 md:flex md:flex-1 md:grow md:border-b-0">
        <div className="flex flex-col border-r-2 border-[#1E2D3D] md:min-w-[30%]">
          <button className="mt-2 flex gap-3 border-b-2 border-[#1E2D3D] p-2">
            <Image
              width={10}
              height={10}
              className="pt-1"
              src="/icons/arrow.svg"
              alt=""
            />
            <h3>contact details</h3>
          </button>
          <div className="flex grow flex-col">
            <div className="border-b-2 border-[#1E2D3D]">
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
            <div>
              <button className="flex gap-3 p-2">
                <Image
                  width={10}
                  height={10}
                  className="pt-1"
                  src="/icons/arrow.svg"
                  alt=""
                />
                <h3>find me also in</h3>
              </button>
              <div className="flex gap-3 border-t-2 border-[#1E2D3D] p-2">
                <Image width={17} height={17} src="/icons/Link.svg" alt="" />
                <a href="">instagram link</a>
              </div>
              <div className="flex gap-3 p-2">
                <Image width={17} height={17} src="/icons/Link.svg" alt="" />
                <a href="">Github profile</a>
              </div>
              <div className="flex gap-3 p-2">
                <Image width={17} height={17} src="/icons/Link.svg" alt="" />
                <a href="">LinkedIn profile</a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-r-2 border-[#1E2D3D] md:min-w-[36%]">
          <button className="mt-2 flex gap-3 border-y-2 border-[#1E2D3D] p-2 md:border-t-0">
            <Image
              width={10}
              height={10}
              className="pt-1"
              src="/icons/arrow.svg"
              alt=""
            />
            <h3>about me</h3>
          </button>
          <p className="px-5 pb-10 pt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            quasi laborum distinctio cum sequi non aliquid minus. Hic ullam
            corrupti iusto fuga ratione. Reiciendis dolorem at dolore sunt
            dolorum exercitationem? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Facilis quasi laborum distinctio cum sequi non
            aliquid minus. Hic ullam corrupti iusto fuga ratione. Reiciendis
            dolorem at dolore sunt dolorum exercitationem?
          </p>
        </div>
        <div className="flex grow flex-col border-b-2 border-r-2 border-[#1E2D3D] md:min-w-[33.33%]">
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
        </div>
      </div>
    </div>
  );
};

export default About;
