// fc
import { FC } from "react";
// next image
import Image from "next/image";

// images
import images from "../public/img";
const Header: FC = () => {
  return (
    <header className="fixed top-0 z-10 w-full">
      <div className="flex w-full items-center justify-between px-4 py-6 text-3xl md:px-8 md:py-12 xl:px-16 xl:py-16">
        <div className="logo h-[40px] w-[73px] md:h-[60px] md:w-[109.5px]">
          <Image alt="logo" src={images.logo} width={146} height={80} />
        </div>
        <p className="text-20px-capsized md:text-28px-capsized font-stolzl font-normal text-white">
          HIRE US
        </p>
      </div>
    </header>
  );
};

export default Header;
