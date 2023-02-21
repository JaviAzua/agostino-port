import Link from "next/link";
import React from "react";
import { SiUpwork, SiVimeo } from "react-icons/si";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="relative select-none bg-orangeL">
      <p className="absolute bottom-2 left-10 text-[0.5rem]">
        ©2023 - Web made by JavierAzua
      </p>

      <div className="flex items-center justify-end px-2 md:justify-center py-2 right-7 gap-5">
        <p className="text-sm font-semibold">Gonzalo Agostino</p>
        <Link
          target={"_blank"}
          href={"https://www.upwork.com/freelancers/~014f58dbab80832b3f"}
        >
          <div className="flex items-center gap-2 group  cursor-pointer">
            <SiUpwork className="group-hover:scale-110 duration-300" />
            <span className="text-xs">Upwork</span>
          </div>
        </Link>
        <Link href={"https://vimeo.com/user53523138"} target={"_blank"}>
          <div className="flex items-center gap-2 group cursor-pointer">
            <SiVimeo className=" group-hover:scale-110 duration-300 " />
            <span className="text-xs">Vimeo</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
