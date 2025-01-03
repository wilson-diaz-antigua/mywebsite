import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="z-200 flex h-12 justify-between border-t-2 border-[#1E2D3D] pl-5 align-middle">
        <h2 className="pt-2">find me in:</h2>
        <div className="[&>*]:border-1 flex [&>*]:w-16 [&>*]:border-l-2 [&>*]:border-[#1E2D3D]">
          <a
            href="https://github.com/wilson-diaz-antigua "
            className="flex items-center justify-center"
          >
            <Image height={23} width={23} src="social/github.svg" />
          </a>
          <a
            href="https://www.linkedin.com/in/wilson-da/ "
            className="flex items-center justify-center"
          >
            <Image height={30} width={30} src="social/linkedIn.svg" />
          </a>
          <a
            href="https://wildiant.itch.io/"
            className="flex items-center justify-center"
          >
            <Image height={23} width={23} src="social/itchio.svg" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
