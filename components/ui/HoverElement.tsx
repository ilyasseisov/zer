// fc
import { FC } from "react";
// types
type Text = {
  text: string;
  hover: string;
};
type HoverElementProps = {
  content: Text;
  starMarker?: boolean;
};
const HoverElement: FC<HoverElementProps> = ({ content, starMarker }) => {
  // hooks

  // return
  return (
    <>
      <div
        data-hover-element
        className={`${starMarker ? "starMarker" : ""} text-28px-capsized md:text-36px-capsized xl:text-40px-capsized font-stolzl font-medium`}
      >
        {content.text}
        <span className="bg-purple-light text-dark">{content.hover}</span>
      </div>
    </>
  );
};
export default HoverElement;
