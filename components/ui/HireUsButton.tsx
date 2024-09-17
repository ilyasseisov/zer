// fc
import { FC } from "react";
// next image
import Image from "next/image";
// images
import images from "@/public/img";
// types
type bgColor = "bg-purple-dark" | "bg-dark";
type ButtonProps = {
  bgColor: bgColor;
};

const HireUsButton: FC<ButtonProps> = ({ bgColor }) => {
  return (
    <button
      type="button"
      className={`text-20px-capsized md:text-32px-capsized rounded-[40px] ${bgColor} pb-6 pl-12 pr-12 pt-6 font-stolzl font-normal text-white md:pb-8 md:pl-16 md:pr-16 md:pt-8`}
    >
      HIRE US
      <span className="relative top-1 ml-2 inline-block h-[24px] w-[24px] md:top-[6px] md:ml-4 md:h-[36px] md:w-[36px]">
        <Image alt="star" src={images.star} width={100} height={100} />
      </span>
    </button>
  );
};
export default HireUsButton;
