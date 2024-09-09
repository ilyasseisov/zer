// fc
import { FC } from "react";

// types

type bgColor = "bg-purple-dark" | "bg-dark";
type ButtonProps = {
  bgColor: bgColor;
  children: React.ReactNode;
};

const Button: FC<ButtonProps> = ({ children, bgColor }) => {
  return (
    <button
      type="button"
      className={`text-32px-capsized rounded-[40px] ${bgColor} pb-8 pl-16 pr-16 pt-8 font-stolzl font-normal text-white`}
    >
      {children}
    </button>
  );
};
export default Button;
