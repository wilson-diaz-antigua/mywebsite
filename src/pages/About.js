const About = () => {
  return (
    <div className="flex flex-col border-t-2 border-[#1E2D3D] [&>*]:border-[#1E2D3D] [&>*]:py-3 [&>*]:pl-3">
      <div className="flex flex-1 md:gap-10 md:border-b-0 md:pb-24">
        <div className="flex flex-1 flex-col border-2">
          <div>
            <button className="mt-2 flex gap-3 p-2">
              <img className="pt-1" src="/icons/arrow.svg" alt="" />
              <h3>contact details</h3>
            </button>
            <div className="flex gap-3 p-2">
              <img src="/icons/Email.svg" alt="" />
              <a href="">wilson.diaz.antigua@gmail.com</a>
            </div>
            <div className="flex gap-3 p-2">
              <img src="/icons/Phone.svg" alt="" />
              <a href="">3473303954</a>
            </div>
          </div>
          <div>
            <button className="flex gap-3 p-2">
              <img className="pt-1" src="/icons/arrow.svg" alt="" />
              <h3>find me also in</h3>
            </button>
            <div className="flex gap-3 p-2">
              <img src="/icons/Link.svg" alt="" />
              <a href="">wilson.diaz@gmail.com</a>
            </div>
            <div className="flex gap-3 p-2">
              <img src="/icons/Link.svg" alt="" />
              <a href="">Github profile</a>
            </div>
            <div className="flex gap-3 p-2">
              <img src="/icons/Link.svg" alt="" />
              <a href="">LinkedIn profile</a>
            </div>
          </div>
        </div>
        <div className="border-none md:max-w-[33%]">
          <p className="pb-10 pt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            quasi laborum distinctio cum sequi non aliquid minus. Hic ullam
            corrupti iusto fuga ratione. Reiciendis dolorem at dolore sunt
            dolorum exercitationem? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Facilis quasi laborum distinctio cum sequi non
            aliquid minus. Hic ullam corrupti iusto fuga ratione. Reiciendis
            dolorem at dolore sunt dolorum exercitationem?
          </p>
        </div>
        <div className="bg-[#1E2D3D] md:max-w-[33%]">
          <div>
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
