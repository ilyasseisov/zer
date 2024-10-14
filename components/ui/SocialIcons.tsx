// fc
import { FC } from "react";
// next image
import Image from "next/image";
// images
import images from "@/public/img";

const SocialIcons: FC = () => {
  // hooks

  // return
  return (
    <>
      <aside className="fixed bottom-12 left-8 hidden flex-col gap-y-10 xl:bottom-16 xl:left-16 xl:flex">
        <a target="_blank" rel="noreferrer">
          <Image src={images.dribbble} alt="dribbble" width={40} height={40} />
        </a>
        <a target="_blank" rel="noreferrer">
          <Image src={images.linkedin} alt="linkedin" width={40} height={40} />
        </a>
        <a target="_blank" rel="noreferrer">
          <Image src={images.insta} alt="insta" width={40} height={40} />
        </a>
        <a target="_blank" rel="noreferrer">
          <Image src={images.blog} alt="blog" width={40} height={40} />
        </a>
      </aside>
    </>
  );
};
export default SocialIcons;
